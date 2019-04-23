// @flow
import type { $Response as Response, $Request as Request } from 'express';
// import { EntityTypesClient } from 'dialogflow';
import { Conversation } from 'actions-on-google';
import { check, validationResult } from 'express-validator/check';
import logger from '../logger';
import { getImages, getTeams, login } from './RequestController';
import { makeCarousel, makeImage } from './CarouselFactory';
import type { ResponseData, Image, ConvParams } from '../types';
import { DialogflowEntityClient, EntityNotFoundError } from '../DialogflowEntityClient';

const THRESHOLD: number = 0;

function respondMultipleImages(conv: Conversation, images: Array<Image>) {
  conv.ask('Here are the best images we found for your request:');
  conv.ask(makeCarousel(images));
  logger.info('Responded with carousel.');
}

function respondOneImage(conv: Conversation, images: Array<Image>) {
  conv.ask('Here is the best image we found for your request:');
  conv.ask(makeImage(images[0]));
  logger.info('Responded with image.');
}

function respondServerError(conv: Conversation) {
  logger.info('Error');
  conv.ask('The server can\'t handle your request right now. We are sorry.');
}

function addTeamFromContext(conv: Conversation, params: ConvParams) {
  const newParams = params;
  newParams.Team = conv.contexts.get('team').parameters.Team;
  return newParams;
}

async function getTeamName(accessToken: string, teamId: string) {
  const data = await getTeams(accessToken);
  logger.info(`Returned Teams are: ${JSON.stringify(data)}`);
  const myTeam = data.teams.find(team => team.id === teamId);
  if (!myTeam) return '';
  return myTeam.name;
}

export function getGoodImages(data: ResponseData): Array<Image> {
  return data.images.filter((element: Image) => {
    logger.info(`Element: ${JSON.stringify(element)} and Score: ${JSON.stringify(element.score > THRESHOLD)}`);
    return element.score > THRESHOLD;
  });
}

export async function getArtifacts(conv: Conversation, params: ConvParams) {
  try {
    const images = getGoodImages(await getImages(conv.user.storage.accessToken, params));
    logger.info(`Returned Images are: ${JSON.stringify(images)}`);
    if (images.length > 1) {
      respondMultipleImages(conv, images);
    } else if (images.length === 1) {
      respondOneImage(conv, images);
    } else {
      conv.ask('No image matched your search criteria. We are sorry.');
    }
  } catch (e) {
    respondServerError(conv);
  }
}

export async function getArtifactsTeamFromContext(conv: Conversation, params: ConvParams) {
  const paramsWithTeam = addTeamFromContext(conv, params);
  await getArtifacts(conv, paramsWithTeam);
}

export async function selectTeam(conv: Conversation, params: ConvParams) {
  logger.info('selecting team...');
  try {
    logger.info(`select team dialogflow params: ${JSON.stringify(params)}`);
    const teamName = await getTeamName(conv.user.storage.accessToken, params.Team);
    if (teamName) {
      conv.ask(`You have selected the team ${teamName}.`);
    } else {
      conv.ask('Could not find that team.');
      conv.contexts.delete('team');
    }
  } catch (e) {
    logger.info('server error');
    respondServerError(conv);
  }
}

// Create a Dialogflow intent with the `actions_intent_SIGN_IN` event.
export async function getSignIn(conv: Conversation, params: ConvParams, signin: any) {
  if (signin.status === 'OK') {
    const { token } = conv.user.profile;
    const { accessToken } = await login(token);
    conv.user.storage.accessToken = accessToken;
    conv.ask('I logged you in. What do you want to do next?');
  } else {
    conv.close('Thank you, bye.');
  }
}

export function validateTeamsParams(req: Request, res: Response, next: any) {
  check('id').exists();
  check('name').exists();
  check('id').isString();
  check('name').isString();
  next();
}

export async function createTeam(req: Request, res: Response) {
  logger.info('Updating team on dialogflow...');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const teamsClient = new DialogflowEntityClient('Team', process.env.PROJECT_ID);
    const response = await teamsClient.createEntity(req.body.id, [req.body.name]);
    logger.info(`Updated entity type: ${JSON.stringify(response[0])}`);
    return res.sendStatus(200);
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      logger.info('Could not find the entity named Team.');
      return res.status(500).send('Could not find entity type Dialogflow.');
    }
    logger.info(`Error updating entity type: ${err}`);
    return res.status(500).send('Could not update Team on Dialogflow.');
  }
}

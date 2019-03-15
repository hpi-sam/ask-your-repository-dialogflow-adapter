// @flow
import type { $Response as Response, $Request as Request } from 'express';
import { EntityTypesClient } from 'dialogflow';
import { Conversation } from 'actions-on-google';
import { check, validationResult } from 'express-validator/check';
import logger from '../logger';
import { getImages, getTeams } from './RequestController';
import { makeCarousel, makeImage } from './CarouselFactory';
import type { ResponseData, Image, ConvParams } from '../types';
// import credentials from '../../credentials.json';

class EntityNotFoundError extends Error { }
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

async function getTeamName(teamId: string) {
  const data = await getTeams();
  logger.info(`Returned Teams are: ${JSON.stringify(data)}`);
  const myTeam = data.teams.find(team => team.id === teamId);
  if (!myTeam) return '';
  return myTeam.name;
}

export function getGoodImages(data: ResponseData) {
  return data.images.filter((element) => {
    logger.info(`Element: ${JSON.stringify(element)} and Score: ${JSON.stringify(element.score > THRESHOLD)}`);
    return element.score > THRESHOLD;
  });
}

export async function getArtifacts(conv: Conversation, params: ConvParams) {
  try {
    logger.info(`request: ${JSON.stringify(conv)}`);
    const paramsWithTeam = addTeamFromContext(conv, params);
    const images = getGoodImages(await getImages(paramsWithTeam));
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

export async function selectTeam(conv: Conversation, params: ConvParams) {
  try {
    logger.info(`select team dialogflow params: ${JSON.stringify(params)}`);
    const teamName = await getTeamName(params.Team);
    if (teamName) {
      conv.ask(`You have selected the team ${teamName}`);
    } else {
      conv.ask('Could not find team.');
      conv.contexts.delete('team');
    }
  } catch (e) {
    respondServerError(conv);
  }
}

// Create a Dialogflow intent with the `actions_intent_SIGN_IN` event.
export async function getSignIn(conv, params, signin) {
  if (signin.status === 'OK') {
    const { payload } = conv.user.profile;
    console.log(payload);
    conv.ask(`I got your account details, ${payload.name}. What do you want to do next?`);
  } else {
    conv.ask('I won\'t be able to save your data, but what do you want to do next?');
  }
}

export function validateTeamsParams(req, res, next) {
  check('id').exists();
  check('name').exists();
  check('id').isString();
  check('name').isString();
  next();
}

export function createTeam(req: Request, res: Response) {
  logger.info('Updating team on dialogflow...');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const entityName = 'Team';
  const entitiesClient = new EntityTypesClient();
  const agentPath = entitiesClient.projectAgentPath(process.env.PROJECT_ID);
  const teamId = req.body.id;
  const teamName = req.body.name;
  return entitiesClient
    .listEntityTypes({ parent: agentPath })
    .then((responses) => {
      const resources = responses[0];
      const entity = resources.find(resource => resource.displayName === entityName);
      if (entity) {
        return entity;
      }
      throw EntityNotFoundError;
    })
    .then((team) => {
      const newTeam = { synonyms: [teamName], value: teamId };
      team.entities.push(newTeam);
      const request = {
        entityType: team,
        updateMask: {
          paths: ['entities'],
        },
      };
      return entitiesClient.updateEntityType(request);
    })
    .then((response) => {
      logger.info(`Updated entity type: ${JSON.stringify(response[0])}`);
      return res.sendStatus(200);
    })
    .catch((err) => {
      if (err instanceof EntityNotFoundError) {
        logger.info('Could not find the entity named Team.');
        return res.status(500).send('Could not find entity type Dialogflow.');
      }
      logger.info(`Error updating entity type: ${err}`);
      return res.status(500).send('Could not update Team on Dialogflow.');
    });
}

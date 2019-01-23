// @flow
import { Conversation } from 'actions-on-google';
import logger from '../logger';
import { getImages, getTeams } from './RequestController';
import { makeCarousel, makeImage } from './CarouselFactory';
import type { ResponseData, Image, ConvParams } from '../types';


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
  conv.ask('The server can\'t handle your request right. We are sorry.');
}

async function teamExists(team: string) {
  const teams = await getTeams();
  logger.info(`Returned Teams are: ${JSON.stringify(teams)}`);
  if (teams.any(x => x.name === team)) {
    return true;
  }
  return false;
}

export function getGoodImages(data: ResponseData) {
  return data.images.filter((element) => {
    logger.info(`Element: ${JSON.stringify(element)} and Score: ${JSON.stringify(element.score > THRESHOLD)}`);
    return element.score > THRESHOLD;
  });
}

export async function getArtifacts(conv: Conversation, params: ConvParams) {
  try {
    if (teamExists(params.Team)) {
      const images = getGoodImages(await getImages(params));
      logger.info(`Returned Images are: ${JSON.stringify(images)}`);
      if (images.length > 1) {
        respondMultipleImages(conv, images);
      } else if (images.length === 1) {
        respondOneImage(conv, images);
      } else {
        conv.ask('No image matched your search criteria. We are sorry.');
      }
    } else {
      conv.ask('Your team was not found. Please try again');
    }
  } catch (e) {
    respondServerError(conv);
  }
}

export async function selectTeam(conv: Conversation, params: ConvParams) {
  try {
    if (teamExists(params.Team)) {
      conv.ask(`You have now selected the team ${params.Team}`);
    } else {
      conv.ask('Your team was not found. Please try again.');
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

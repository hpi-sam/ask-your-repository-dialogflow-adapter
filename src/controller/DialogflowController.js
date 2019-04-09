// @flow
import { Conversation } from 'actions-on-google';
import logger from '../logger';
import { getImages, presentImages } from './RequestController';
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

export function getGoodImages(data: ResponseData) {
  return data.images.filter((element) => {
    logger.info(`Element: ${JSON.stringify(element)} and Score: ${JSON.stringify(element.score > THRESHOLD)}`);
    return element.score > THRESHOLD;
  });
}

export default async function getArtifacts(conv: Conversation, params: ConvParams) {
  try {
    const images = getGoodImages(await getImages(params));
    logger.info(`Returned Images are: ${JSON.stringify(images)}`);
    if (images.length > 1) {
      respondMultipleImages(conv, images);
    } else if (images.length === 1) {
      respondOneImage(conv, images);
    } else {
      conv.ask('No image matched your search criteria. We are sorry.');
    }
    if (images.length > 0) {
      presentImages(images.map((element: Image) => (element.id)));
    }
  } catch (e) {
    respondServerError(conv);
  }
}

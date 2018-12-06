// @flow
import { Conversation } from 'actions-on-google';
import logger from '../logger';
import request from './RequestController';
import { makeCarousel, makeImage } from './CarouselFactory';
import type { ResponseData, Image, ConvParams } from '../types';


const THRESHHOLD: number = 0;

function respondMultipleImages(conv: Conversation, images: Array<Image>, params: ConvParams) {
  conv.ask('Here are the best images we found for your request:');
  conv.ask(makeCarousel(images, params));
  logger.info('Responded with carousel.');
}

function respondOneImage(conv: Conversation, images: Array<Image>, params: ConvParams) {
  conv.ask('Here is the best image we found for your request:');
  conv.ask(makeImage(images[0], params));
  logger.info('Responded with image.');
}

function respondServerError(conv: Conversation) {
  logger.info('Error');
  conv.ask('The server can\'t handle your request right. We are sorry.');
}

function getGoodImages(data: ResponseData) {
  return data.images.filter(element => element.score > THRESHHOLD);
}

export default async function getArtifacts(conv: Conversation, params: ConvParams) {
  try {
    const images = getGoodImages(await request(params));
    logger.info(`Returned Images are: ${JSON.stringify(images)}`);
    if (images.length > 1) {
      respondMultipleImages(conv, images, params);
    } else if (images.length === 1) {
      respondOneImage(conv, images, params);
    } else {
      conv.ask('No image matched your serach criteria. We are sorry.');
    }
  } catch (e) {
    respondServerError(conv);
  }
}

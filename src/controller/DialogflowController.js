// @flow
import {
  Image as DialogflowImage, Conversation,
} from 'actions-on-google';
import logger from '../logger';
import request from './RequestController';
import { makeCarousel, getHumanReadableTags, getGoodImages } from './CarouselFactory';

export type convParams = {
  DatePeriod: { startDate: string, endDate: string },
  Artifact: string,
  Tag: Array<string>,
  Author: string
}

function respondMultipleImages(conv: Conversation, goodImages, params) {
  conv.ask('Here are the best images we found for your request:');
  const carousel = makeCarousel(goodImages, params);
  conv.ask(carousel);
  logger.info(`Get Artifact - Responded with this carousel ${JSON.stringify(carousel)}`);
}

function respondOneImage(conv: Conversation, images, params: convParams) {
  conv.ask('Here is the best image we found for your request:');
  const image = new DialogflowImage({
    url: images[0].url,
    alt: `${params.Artifact} with the tags: ${getHumanReadableTags(images[0])}`,
  });
  conv.ask(image);
  logger.info(`Get Artifact - Responded with this image:\n${JSON.stringify(image)}`);
}

function respondServerError(conv: Conversation) {
  logger.info('Error');
  conv.ask('The server can\'t handle your request right now but have a Cat instead!');
  conv.ask(new DialogflowImage({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }));
}

export default {
  async getArtifacts(conv: Conversation, params: convParams) {
    try {
      const goodImages = getGoodImages(await request(params));
      if (goodImages.length > 1) {
        respondMultipleImages(conv, goodImages, params);
      } else if (goodImages.length === 1) {
        respondOneImage(conv, goodImages, params);
      } else {
        conv.ask('No image matched your serach criteria. We are sorry.');
      }
    } catch (e) {
      respondServerError(conv);
    }
  },
};

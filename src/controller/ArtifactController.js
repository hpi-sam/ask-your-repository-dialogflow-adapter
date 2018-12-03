// @flow
import axios from 'axios';
import {
  Image, BrowseCarousel, BrowseCarouselItem, Conversation,
} from 'actions-on-google';
import logger from '../logger';

const THRESHHOLD: number = 0;
const url = 'https://api.askir.me/images';

function setParams(params) {
  logger.info(JSON.stringify(params));
  const requestString = {
    params: {},
  };

  if (params.Tag) { requestString.params.search = params.Tag; }
  if (params.DatePeriod) { requestString.params.start_date = params.DatePeriod.startDate; }
  if (params.DatePeriod) { requestString.params.end_date = params.DatePeriod.endDate; }
  if (params.Author) { requestString.params.author = params.Author; }
  return requestString;
}

function getGoodImages(response) {
  const { images } = response.data;
  const goodImages = [];
  images.forEach((element) => {
    if (element.score > THRESHHOLD) { goodImages.push(element); }
  });
  return goodImages;
}

function getHumanReadableTags(goodImages, i) {
  return goodImages[i].tags ? goodImages[i].tags.join(', ') : 'No Tags';
}

function makeCarousel(goodImages, params) {
  const items = [];
  for (let i = 0; i < goodImages.length && i < 5; i += 1) {
    items.push(new BrowseCarouselItem({
      title: `Image ${i + 1}`,
      url: goodImages[i].url,
      description: getHumanReadableTags(goodImages, i),
      image: new Image({
        url: goodImages[i].url,
        alt: `${params.Artifact} with the tags: ${getHumanReadableTags(goodImages, i)}`,
      }),
    }));
  }
  const car = new BrowseCarousel({
    items,
  });
  return car;
}

function respondMultipleImages(conv, goodImages, params) {
  conv.ask('Here are the best images we found for your request:');
  const carousel = makeCarousel(goodImages, params);
  conv.ask(carousel);
  logger.info(`Get Artifact - Responded with this carousel ${JSON.stringify(carousel)}`);
}

function respondOneImage(conv, goodImages, params) {
  conv.ask('Here is the best image we found for your request:');
  const image = new Image({
    url: goodImages[0].url,
    alt: `${params.Artifact} with the tags: ${getHumanReadableTags(goodImages, 0)}`,
  });
  conv.ask(image);
  logger.info(`Get Artifact - Responded with this image:\n${JSON.stringify(image)}`);
}

function respondServerError(conv) {
  logger.info('Error');
  conv.ask('The server can\'t handle your request right now but have a Cat instead!');
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }));
}

export default {
  async getArtifacts(conv: Conversation, params: Object) {
    try {
      const response = await axios.get(url, setParams(params));
      const goodImages = getGoodImages(response);
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

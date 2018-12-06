// @flow
import { Image as DialogflowImage, BrowseCarousel, BrowseCarouselItem } from 'actions-on-google';
import logger from '../logger';
import type { convParams } from './DialogflowController';
import type{ Response, Image } from './RequestController';

const THRESHHOLD: number = 0;

export function getGoodImages(response: Response) {
  const { images } = response.data;
  logger.info(`Images are: ${JSON.stringify(images)}`);
  const goodImages: Array<Image> = images.filter(element => element.score > THRESHHOLD);
  logger.info(`good Images are: ${JSON.stringify(goodImages)}`);
  return goodImages;
}

export function getHumanReadableTags(image: Image): string {
  return image.tags ? image.tags.join(', ') : 'No Tags';
}

export function makeImage(image: Image, params: convParams): DialogflowImage {
  return new DialogflowImage({
    url: image.url,
    alt: `${params.Artifact} with the tags: ${getHumanReadableTags(image)}`,
  });
}

export function makeCarousel(imageList: Array<Image>, params: convParams): BrowseCarousel {
  return new BrowseCarousel({
    items: imageList.slice(0, 4).map((image, i) => new BrowseCarouselItem({
      title: `Image ${i + 1}`,
      url: image.url,
      description: getHumanReadableTags(image),
      image: makeImage(image, params),
    })),
  });
}

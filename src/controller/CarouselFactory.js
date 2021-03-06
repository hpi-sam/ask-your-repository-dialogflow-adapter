// @flow
import { Image as DialogflowImage, BrowseCarousel, BrowseCarouselItem } from 'actions-on-google';
import type { Image } from '../types';


export function getHumanReadableTags(image: Image): string {
  return image.tags ? image.tags.join(', ') : 'No Tags';
}

export function makeImage(image: Image): DialogflowImage {
  return new DialogflowImage({
    url: image.url,
    alt: `Image with the tags: ${getHumanReadableTags(image)}`,
  });
}

export function makeCarousel(imageList: Array<Image>): BrowseCarousel {
  return new BrowseCarousel({
    items: imageList.slice(0, 5).map((image, i) => new BrowseCarouselItem({
      title: `Image ${i + 1}`,
      url: image.url,
      description: getHumanReadableTags(image),
      image: makeImage(image),
    })),
  });
}

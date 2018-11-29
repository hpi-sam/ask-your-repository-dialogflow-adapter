import axios from 'axios';
import {
  Image, BrowseCarousel, BrowseCarouselItem,
} from 'actions-on-google';
import logger from '../logger';

export default {
  async getArtifacts(conv, params) {
    try {
      logger.info(JSON.stringify(params));
      const url = 'https://api.askir.me/images';
      const response = await axios.get(url, {
        params: {
          searchTerm: params.Tag,
          // type: params.Artifact,
          // date: params.DatePeriod,
        },
      });
      const { images } = response.data;
      if (images.length > 1) {
        conv.ask('Here are the best images we found for your request:');
        const items = [];
        for (let i = 0; i < images.length && i < 5; i += 1) {
          items.push(new BrowseCarouselItem({
            title: `Image ${i}`,
            url: images[i].url,
            description: images[i].tags ? images[i].tags.join(', ') : 'No Tags',
            image: new Image({
              url: images[i].url,
              alt: `${params.Artifact} with the tags: ${images[i].tags ? images[i].tags.join(', ') : 'No Tags'}`,
            }),
          }));
        }
        const car = new BrowseCarousel({
          items,
        });
        conv.ask(car);
        logger.info(`Get Artifact - Responded with this carousel ${JSON.stringify(car)}`);
      } else if (images.length === 1) {
        conv.ask('Here is the best image we found for your request:');
        const image = new Image({
          url: images[0].url,
          alt: params.Artifact,
        });
        conv.ask(image);
        logger.info(`Get Artifact - Responded with this image:\n${JSON.stringify(image)}`);
      } else {
        conv.ask('No image matched your serach criteria. We are sorry.');
      }
      // conv.contexts.set('images', 5, images); // This doesn't work yet.
    } catch (e) {
      logger.info('Error');
      conv.ask('The server isn\'t up right now but have a Cat instead!');
      conv.ask(new Image({
        url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
        alt: 'A cat',
      }));
    }
  },
};

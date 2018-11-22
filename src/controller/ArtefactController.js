import axios from 'axios';

import { Image } from 'actions-on-google';

export default {
  async getArtefacts(conv, params) {
    try {
      const url = 'http://api.askir.me/images';
      // type: params.Artefact
      // date: params.DatePeriod
      const response = await axios.get(url, {
        params: {
          search_term: params.tags,
        },
      });
      const { images } = response.data;
      if (images.length > 0) {
        conv.ask('Here is the best image we found for your request:');
        conv.ask(new Image({
          url: images[0].url,
          alt: params.Artefact,
        }));
      } else {
        conv.ask('No image matched your serach criteria. We are sorry.');
      }
      // conv.contexts.set('images', 5, images); // This doesn't work yet.
    } catch (e) {
      conv.ask('The server isn\'t up right now but have a Cat instead!');
      conv.ask(new Image({
        url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
        alt: 'A cat',
      }));
    }
  },

};

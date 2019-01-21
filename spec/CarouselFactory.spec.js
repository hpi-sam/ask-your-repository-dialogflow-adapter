import { Image as DialogflowImage, BrowseCarousel, BrowseCarouselItem } from 'actions-on-google';
import {
  GetImageresponseSingle, GetArtifactRequest,
} from './SampleRequests';
import { getHumanReadableTags, makeImage, makeCarousel } from '../src/controller/CarouselFactory';

describe('getHumanReadableTags', () => {
  it('Returns correct Tags', (done) => {
    expect(getHumanReadableTags(GetImageresponseSingle.images[1]))
      .to.equal('dwa, dwada');
    done();
  });
});

describe('makeImage', () => {
  it('Returns correct Image', (done) => {
    expect(makeImage(
      GetImageresponseSingle.images[1],
      GetArtifactRequest.queryResult.parameters,
    ))
      .to.eql(new DialogflowImage({
        url: 'https://files.askir.me/4df920ae-5718-499d-a13d-045489d71f2e_Bildschirmfoto_vom_2018-11-04_23-36-51.png',
        alt: 'picture with the tags: dwa, dwada',
      }));
    done();
  });
});

describe('makeCarousel', () => {
  it('should return a correct carousel', (done) => {
    expect(makeCarousel(
      GetImageresponseSingle.images.slice(0, 3),
      GetArtifactRequest.queryResult.parameters,
    ))
      .to.eql(new BrowseCarousel({
        items: [
          new BrowseCarouselItem({
            title: 'Image 1',
            url: 'https://files.askir.me/c2d7af95-44f6-4839-82d4-eca946e75e91_Bildschirmfoto_vom_2018-07-25_22-25-23.png',
            description: 'dwa',
            image: new DialogflowImage({
              url: 'https://files.askir.me/c2d7af95-44f6-4839-82d4-eca946e75e91_Bildschirmfoto_vom_2018-07-25_22-25-23.png',
              alt: 'picture with the tags: dwa',
            }),
          }),
          new BrowseCarouselItem({
            title: 'Image 2',
            url: 'https://files.askir.me/4df920ae-5718-499d-a13d-045489d71f2e_Bildschirmfoto_vom_2018-11-04_23-36-51.png',
            description: 'dwa, dwada',
            image: new DialogflowImage({
              url: 'https://files.askir.me/4df920ae-5718-499d-a13d-045489d71f2e_Bildschirmfoto_vom_2018-11-04_23-36-51.png',
              alt: 'picture with the tags: dwa, dwada',
            }),
          }),
          new BrowseCarouselItem({
            title: 'Image 3',
            url: 'https://files.askir.me/141b360d-155a-4594-8911-b6576565a0cb_Bildschirmfoto_vom_2018-11-04_23-14-21.png',
            description: 'dwa',
            image: new DialogflowImage({
              url: 'https://files.askir.me/141b360d-155a-4594-8911-b6576565a0cb_Bildschirmfoto_vom_2018-11-04_23-14-21.png',
              alt: 'picture with the tags: dwa',
            }),
          }),
        ],
      }));
    done();
  });
});

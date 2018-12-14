import {
  GetImageresponseSingle,
} from './SampleRequests';
import { getGoodImages } from '../src/controller/DialogflowController';

describe('getGoodImages', () => {
  it('Returns correct Image Array', (done) => {
    expect(getGoodImages(GetImageresponseSingle))
      .to.eql([GetImageresponseSingle.images[0]]);
    done();
  });
});

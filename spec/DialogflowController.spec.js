import {
  GetImageresponseSingle,
} from './SampleRequests';
import { getGoodImages } from '../src/controller/DialogflowController';

describe('getGoodImages', () => {
  test('Returns correct Image Array', (done) => {
    expect(getGoodImages(GetImageresponseSingle)).toEqual([GetImageresponseSingle.images[0]]);
    done();
  });
});

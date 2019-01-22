import request from 'supertest';
import nock from 'nock';
import { fail } from 'assert';
import app from '../src/app';
import {
  GetArtifactRequest,
  GetImageResponseMultiple,
  GetImageresponseSingle,
} from './SampleRequests';

const baseUrl = process.env.API_URL || '';
function itShouldRespondOk(req) {
  it('should respond with a 200.', (done) => {
    request(app)
      .post('/')
      .send(req)
      .expect(200)
      .end(done);
  });
}
const nockImages = nock(baseUrl)
  .get('/images')
  .query({
    search: 'blue white yellow',
    start_date: '2018-04-01T18:00:00.000Z',
    end_date: '2018-04-30T18:00:00.000Z',
    author: 'Arne',
  });

function testAllCases(req) {
  context('multiple images found', () => {
    beforeEach(() => {
      nockImages
        .reply(200, GetImageResponseMultiple);
    });
    itShouldRespondOk(req);
  });
  context('one image found', () => {
    beforeEach(() => {
      nockImages
        .reply(200, GetImageresponseSingle);
    });
    itShouldRespondOk(req);
  });
  context('esra is down', () => {
    beforeEach(() => {
      nockImages
        .reply(502, 'Random answer I might get on a broken link or if the server is down.');
    });

    itShouldRespondOk(req);
  });
  context('no images match the search', () => {
    beforeEach(() => {
      nockImages
        .reply(200, {
          images: [],
        });
    });
    itShouldRespondOk(req);
  });
}

describe('GET /', () => {
  it('should respond with a 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe('Intents', () => {
  afterEach(() => {
    if (!nock.isDone()) {
      fail('Not all nock interceptors were used!');
      nock.cleanAll();
    }
  });
  describe('POST /', () => {
    context('Get Artifacts Request', () => {
      const req = GetArtifactRequest;
      testAllCases(req);
    });
  });
});

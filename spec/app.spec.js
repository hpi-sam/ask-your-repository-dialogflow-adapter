// @flow
import request from 'supertest';
import nock from 'nock';
import app from '../src/app';
import {
  GetArtifactRequest, GetImageResponseMultiple, GetImageresponseSingle,
} from './SampleRequests';
import logger from '../src/logger';

function itShouldRespondOk(req) {
  it('should respond with a 200.', (done) => {
    request(app)
      .post('/')
      .send(req)
      .expect(200)
      .end(done);
  });
}
const nockObj = nock('https://api.askir.me')
  .log(logger.info)
  .get('/images')
  .query(true);

function testAllCases(req) {
  context('multiple images found', () => {
    beforeEach(() => {
      nockObj
        .reply(200, GetImageResponseMultiple);
    });
    itShouldRespondOk(req);
  });
  context('one image found', () => {
    beforeEach(() => {
      nockObj
        .reply(200, GetImageresponseSingle);
    });
    itShouldRespondOk(req);
  });
  context('esra is down', () => {
    beforeEach(() => {
      nockObj
        .reply(502, 'Random answer I might get on a broken link or if the server is down.');
    });

    itShouldRespondOk(req);
  });
  context('no images match the search', () => {
    beforeEach(() => {
      nockObj
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
  describe('POST /', () => {
    context('Get Artifacts Request', () => {
      const req = GetArtifactRequest;
      testAllCases(req);
    });
  });
});

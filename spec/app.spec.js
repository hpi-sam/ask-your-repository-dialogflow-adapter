// @flow
import request from 'supertest';
import nock from 'nock';
import app from '../src/app';
import {
  GetArtifactRequest,
  GetImageResponseMultiple,
  GetImageresponseSingle,
  PostPresentationRequestMultiple,
  PostPresentationRequestSingle,
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
const nockImages = nock('https://api.askir.me')
  .get('/images')
  .query({
    search: 'blue white yellow',
    start_date: '2018-04-01T12:00:00-06:00',
    end_date: '2018-04-30T12:00:00-06:00',
    author: 'Arne',
  });
const nockPresentation = nock('https://api.askir.me');

function testAllCases(req) {
  context('multiple images found', () => {
    beforeEach(() => {
      nockImages
        .reply(200, GetImageResponseMultiple);
      nockPresentation
        .post('/presentations', PostPresentationRequestMultiple)
        .reply(200);
    });
    itShouldRespondOk(req);
  });
  context('one image found', () => {
    beforeEach(() => {
      nockImages
        .reply(200, GetImageresponseSingle);
      nockPresentation
        .post('/presentations', PostPresentationRequestSingle)
        .reply(200);
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
  describe('POST /', () => {
    context('Get Artifacts Request', () => {
      const req = GetArtifactRequest;
      testAllCases(req);
    });
  });
});

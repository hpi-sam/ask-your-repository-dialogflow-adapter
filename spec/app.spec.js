// @flow
import request from 'supertest';
import nock from 'nock';
import app from '../src/app';
import { GetArtifactRequest, GetLatestArtifactRequest } from './SampleRequests';

function itShouldRespondOk(req) {
  it('should respond with a 200.', (done) => {
    request(app)
      .post('/')
      .send(req)
      .expect(200)
      .end(done);
  });
}

function testAllCases(req) {
  context('best case scenario', () => {
    nock('https://api.askir.me')
      .get('/images')
      .reply(200, {
        images: [{
          id: '124',
          url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
        }],
      });
    itShouldRespondOk(req);
  });
  context('esra is down', () => {
    nock('https://api.askir.me')
      .get('/images')
      .reply(502, 'Random answer I might get on a broken link or if the server is down.');
    itShouldRespondOk(req);
  });
  context('no images match the search', () => {
    nock('https://api.askir.me')
      .get('/images')
      .reply(200, {
        images: [],
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
    context('Get latest Artifact Request', () => {
      const req = GetLatestArtifactRequest;
      testAllCases(req);
    });
  });
});

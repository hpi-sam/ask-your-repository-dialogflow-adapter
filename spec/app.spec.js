// @flow
import request from 'supertest';
import nock from 'nock';
import app from '../src/app';
import {
  GetArtifactRequest, GetLatestArtifactRequest, GetImageResponseMultiple, GetImageresponseSingle,
} from './SampleRequests';

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
  context('multiple images found', () => {
    nock('https://api.askir.me')
      .get('/images')
      .query(true)
      .reply(200, GetImageResponseMultiple);
    itShouldRespondOk(req);
  });
  context('one image found', () => {
    nock('https://api.askir.me')
      .get('/images')
      .query(true)
      .reply(200, GetImageresponseSingle);
    itShouldRespondOk(req);
  });
  context('esra is down', () => {
    nock('https://api.askir.me')
      .get('/images')
      .query(true)
      .reply(502, 'Random answer I might get on a broken link or if the server is down.');
    itShouldRespondOk(req);
  });
  context('no images match the search', () => {
    nock('https://api.askir.me')
      .get('/images')
      .query(true)
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

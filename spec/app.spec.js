// @flow
import request from 'supertest';
// import nock from 'nock';
import app from '../src/app';
import GetArtefactRequest from './SampleRequests';

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
    it('should respond with a 200', (done) => {
      request(app)
        .post('/')
        .send(GetArtefactRequest)
        .expect(200)
        .end(done);
    });
  });
});

// @flow
import request from 'supertest';
import nock from 'nock';
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
    it('should respond with a 200 to a correct request', (done) => {
      nock('http://api.askir.me')
        .get('/images')
        .reply(200, {
          images:
            [{
              id: '124',
              url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
            }],
        });
      request(app)
        .post('/')
        .send(GetArtefactRequest)
        .expect(200)
        .end(done);
    });
    it('should respond with a 200 even if the server is down.', (done) => {
      nock('http://api.askir.me')
        .get('/images')
        .reply(502, 'Random answer I might get on a broken link or if the server is down.');
      request(app)
        .post('/')
        .send(GetArtefactRequest)
        .expect(200)
        .end(done);
    });
    it('should respond with a 200 when no images match the search', (done) => {
      nock('http://api.askir.me')
        .get('/images')
        .reply(200, {
          images:
            [],
        });
      request(app)
        .post('/')
        .send(GetArtefactRequest)
        .expect(200)
        .end(done);
    });
  });
});

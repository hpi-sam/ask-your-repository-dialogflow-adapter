// @flow
import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  it('should respond with a 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

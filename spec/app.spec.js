import { EntityTypesClient } from 'dialogflow';
import request from 'supertest';
import nock from 'nock';
import { fail } from 'assert';
import app from '../src/app';
import {
  mockEntityTypesClient, mockProjectAgentPath,
  mockUpdateEntityType, mockListEntityTypes,
} from '../mocks/dialogflow';
import {
  GetArtifactRequest,
  GetImageResponseMultiple,
  GetImageresponseSingle,
} from './SampleRequests';
import logger from '../src/logger';

const baseUrl = process.env.API_URL || '';

jest.mock('dialogflow');
EntityTypesClient.mockImplementation(() => (mockEntityTypesClient));

function itShouldRespondOk(req) {
  test('should respond with a 200.', (done) => {
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
    team_id: '74680e6a-d547-4b56-8745-3a43d554ffe9',
  });

function testAllCases(req) {
  describe('multiple images found', () => {
    beforeEach(() => {
      nockImages
        .reply(200, GetImageResponseMultiple);
    });
    itShouldRespondOk(req);
  });
  describe('one image found', () => {
    beforeEach(() => {
      nockImages
        .reply(200, GetImageresponseSingle);
    });
    itShouldRespondOk(req);
  });
  describe('esra is down', () => {
    beforeEach(() => {
      nockImages
        .reply(502, 'Random answer I might get on a broken link or if the server is down.');
    });

    itShouldRespondOk(req);
  });
  describe('no images match the search', () => {
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
  test('should respond with a 200', (done) => {
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
    describe('Get Artifacts Request', () => {
      const req = GetArtifactRequest;
      testAllCases(req);
    });
  });
});

describe('POST /teams', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const teamName = 'blub';
  const teamId = '1234';
  const updateEntityTypeParams = {
    entityType: { displayName: 'Team', entities: [{ synonyms: ['teamName'], value: 'teamId' }, { synonyms: ['blub'], value: '1234' }] },
    updateMask: {
      paths: ['entities'],
    },
  };
  const listEntityTypesParams = { parent: mockProjectAgentPath(process.env.PROJECT_ID) };

  it('should respond with a 200', (done) => {
    request(app)
      .post('/teams')
      .send({
        id: teamId,
        name: teamName,
      })
      .expect(200)
      .end(done);
  });
  it('should make all necessary mock calls to dialogflow client library', (done) => {
    request(app)
      .post('/teams')
      .send({
        id: teamId,
        name: teamName,
      })
      .expect(200)
      .end(() => {
        expect(EntityTypesClient).toHaveBeenCalledTimes(1);
        expect(mockProjectAgentPath).toHaveBeenCalledTimes(1);
        expect(mockListEntityTypes).toHaveBeenCalledTimes(1);
        expect(mockUpdateEntityType).toHaveBeenCalledTimes(1);
        done();
      });
  });
  it('should call mocked dialogflow client library with the correct parameters ', (done) => {
    request(app)
      .post('/teams')
      .send({
        id: teamId,
        name: teamName,
      })
      .expect(200)
      .end(() => {
        expect(mockUpdateEntityType).toBeCalledWith(updateEntityTypeParams);
        expect(mockListEntityTypes).toBeCalledWith(listEntityTypesParams);
        done();
      });
  });
  describe('fails to update dialogflow', () => {
    beforeEach(() => {
      EntityTypesClient.mockImplementation(() => ({
        projectAgentPath: mockProjectAgentPath,
        listEntityTypes: mockListEntityTypes,
        updateEntityType: jest.fn(() => { throw Error; }),
      }));
    });
    it('should respond 500', (done) => {
      request(app)
        .post('/teams')
        .send({
          id: teamId,
          name: teamName,
        })
        .expect(500)
        .end(done);
    });
  });
});

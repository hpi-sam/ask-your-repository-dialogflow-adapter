import dialogflow, { EntityTypesClient } from 'dialogflow';
import request from 'supertest';
import nock from 'nock';
import { fail } from 'assert';
import app from '../src/app';
import {
  GetArtifactRequest,
  GetImageResponseMultiple,
  GetImageresponseSingle,
} from './SampleRequests';
import logger from '../src/logger';

const baseUrl = process.env.API_URL || '';

function projectAgentPath(id) {
  logger.info('projectAgentPath mock called');
  return `project/agent/path/ ${id}`;
}
const mockProjectAgentPath = jest.fn(projectAgentPath);

async function listEntityTypes(object) {
  return [[{ displayName: 'Team', entities: [{ synonyms: ['teamName'], value: 'teamId' }] }]];
}
const mockListEntityTypes = jest.fn(listEntityTypes);

async function updateEntityType(request) {
  return request.entityType;
}
const mockUpdateEntityType = jest.fn(updateEntityType);

const mockEntityTypesClient = jest.fn().mockImplementation(() => ({
  projectAgentPath: mockProjectAgentPath,
  listEntityTypes: mockListEntityTypes,
  updateEntityType: mockUpdateEntityType,
}));

jest.mock('dialogflow', () => ({
  __esModule: true,
  default: jest.fn(),
  EntityTypesClient: mockEntityTypesClient,
}));

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
    EntityTypesClient.mockClear();
  });
  it('should respond with a 200', (done) => {
    request(app)
      .post('/teams')
      .send({
        id: '1234',
        name: 'blub',
      })
      .expect(200)
      .end(done);
  });
  it('should call updateEntityTypes with the correct parameters ', (done) => {
    request(app)
      .post('/teams')
      .send({
        id: '1234',
        name: 'blub',
      });
    expect(EntityTypesClient).toHaveBeenCalledTimes(1);
  });
});

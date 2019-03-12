import logger from "../src/logger";

// const dialogflow = jest.genMockFromModule('dialogflow');

// export default class MockEntityTypesClient {
//   constructor(object) {
//     logger.info('used mocked constructor');
//     this.agentPath = 'project/agent/path/';
//     this.credentials = object.credentials;
//     this.entityTypes = [[{ displayName: 'Team', entities: [{ synonyms: ['teamName'], value: 'teamId' }] }]];
//   }

//   projectAgentPath(id) {
//     return this.agentPath + id;
//   }

//   async listEntityTypes(object) {
//     return this.entityTypes;
//   }

//   async updateEntityType(request) {
//     return request.entityType;
//   }
// }
console.log('halo i bims');
function projectAgentPath(id) {
  logger.info('projectAgentPath mock called');
  return `project/agent/path/ ${id}`;
}
export const projectAgentPathMock = jest.fn(projectAgentPath);

async function listEntityTypes(object) {
  return [[{ displayName: 'Team', entities: [{ synonyms: ['teamName'], value: 'teamId' }] }]];
}
export const listEntityTypesMock = jest.fn(listEntityTypes);

async function updateEntityType(request) {
  return request.entityType;
}
export const updateEntityTypeMock = jest.fn(updateEntityType);

export const EntityTypesClientMock = jest.fn().mockImplementation(() => ({
  projectAgentPath: projectAgentPathMock,
  listEntityTypes: listEntityTypesMock,
  updateEntityType: updateEntityTypeMock,
}));

export const dialogflowMock = jest.fn().mockImplementation(() => ({
  EntityTypesClient: EntityTypesClientMock,
}));

// dialogflow.EntityTypesClient = EntityTypesClient;

export default EntityTypesClientMock;

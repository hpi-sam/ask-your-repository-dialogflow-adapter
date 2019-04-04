function projectAgentPath(id) {
  return `project/agent/path/${id}`;
}
export const mockProjectAgentPath = jest.fn(projectAgentPath);

async function listEntityTypes() {
  return [[{ displayName: 'Team', entities: [{ synonyms: ['teamName'], value: 'teamId' }] }]];
}
export const mockListEntityTypes = jest.fn(listEntityTypes);

async function updateEntityType(request) {
  return [request.entityType];
}
export const mockUpdateEntityType = jest.fn(updateEntityType);

export const mockEntityTypesClient = {
  projectAgentPath: mockProjectAgentPath,
  listEntityTypes: mockListEntityTypes,
  updateEntityType: mockUpdateEntityType,
};

import { EntityTypesClient } from 'dialogflow';

export class EntityNotFoundError extends Error { }

export class DialogflowEntityClient {
  constructor(entityTypeName, projectId) {
    this.entityTypeName = entityTypeName;
    this.projectId = projectId;
  }

  async initialize() {
    if (!this.entitiesClient) {
      this.entitiesClient = await new EntityTypesClient();
    }
    if (!this.agentPath) {
      this.agentPath = await this.entitiesClient.projectAgentPath(this.projectId);
    }
  }

  async entityTypesList() {
    return this.entitiesClient.listEntityTypes({ parent: this.agentPath });
  }

  async entityTypeObject() {
    const entityTypesList = await this.entityTypesList();
    const entity = entityTypesList[0]
      .find(resource => resource.displayName === this.entityTypeName);
    if (entity) {
      return entity;
    }
    throw EntityNotFoundError;
  }

  static createRequest(entityTypeObject) {
    const request = {
      entityType: entityTypeObject,
      updateMask: {
        paths: ['entities'],
      },
    };
    return request;
  }

  async createEntity(value, synonyms) {
    await this.initialize();
    const entityType = await this.entityTypeObject();
    const newTeam = { synonyms, value };
    entityType.entities.push(newTeam);
    const request = DialogflowEntityClient.createRequest(entityType);
    return this.entitiesClient.updateEntityType(request);
  }
}

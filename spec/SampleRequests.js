export const GetArtifactRequest = {
  responseId: '50caa4a9-7017-4443-9b67-9e0190fccb9d',
  queryResult: {
    queryText: 'get me an image tagged blue white yellow',
    parameters: { DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'] },
    allRequiredParamsPresent: true,
    outputContexts: [{
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/date-period',
      lifespanCount: 5,
      parameters: {
        'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '',
      },
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/artifact',
      lifespanCount: 5,
      parameters: {
        'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '',
      },
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/tag',
      lifespanCount: 5,
      parameters: {
        'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '',
      },
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/images',
      lifespanCount: 5,
      parameters: {
        'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '',
      },
    }],
    intent: { name: 'projects/newagent-bdb60/agent/intents/8170e198-6d0e-4dc2-80b6-d6d9cc5b1e5e', displayName: 'Get Artifacts' },
    intentDetectionConfidence: 1,
    languageCode: 'en',
  },
  originalDetectIntentRequest: { payload: {} },
  session: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e',
};
export const GetLatestArtifactRequest = {
  responseId: 'd0450974-2fcd-4026-acd7-f91eb239e14d',
  queryResult: {
    queryText: 'get me the latest image',
    parameters: { Artifact: 'picture' },
    allRequiredParamsPresent: true,
    fulfillmentMessages: [{ text: { text: [''] } }],
    outputContexts: [{
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/date-period',
      lifespanCount: 4,
      parameters: {
        'Artifact.original': 'image', 'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '', Artifact: 'picture',
      },
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/artifact',
      lifespanCount: 4,
      parameters: {
        'Artifact.original': 'image', 'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '', Artifact: 'picture',
      },
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/tag',
      lifespanCount: 4,
      parameters: {
        'Artifact.original': 'image', 'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '', Artifact: 'picture',
      },
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/images',
      lifespanCount: 4,
      parameters: {
        'Artifact.original': 'image', 'Tag.original': 'blue white yellow', DatePeriod: '', Artifact: 'picture', Tag: ['blue white yellow'], 'Artifact.original': 'image', 'DatePeriod.original': '', Artifact: 'picture',
      },
    }],
    intent: { name: 'projects/newagent-bdb60/agent/intents/b3911c39-201f-42ae-9886-eb1518d2a4ae', displayName: 'Get latest Artifact' },
    intentDetectionConfidence: 0.71,
    languageCode: 'en',
  },
  originalDetectIntentRequest: { payload: {} },
  session: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e',
};
export const GetImageResponseMultiple = { images: [{ id: '312dc1a6-9a68-44a9-899d-f99a869e8d14', url: 'https://files.askir.me/1543509158763_background_steppe.jpg', tags: '' }, { id: 'b0c9c135-57ce-4999-a3d7-2ab7ce71e244', url: 'https://files.askir.me/1543508084468_background_landie.jpg', tags: ['car', 'mountains', 'grass'] }, { id: '956bcbfe-31c9-4e01-bf3f-634c8af1e316', url: 'https://files.askir.me/1543508004343_background_road.jpg', tags: ['road', 'mountain', 'forest', 'fog'] }, { id: 'b6851d11-0f3d-4df2-a329-33c99a38fc67', url: 'https://files.askir.me/1543507651006_background_sunset.jpg', tags: ['sunset', 'forest', 'farn', 'nature'] }, { id: 'e3417fbf-4927-47b9-bd44-103a59a1ce92', url: 'https://files.askir.me/1543507560629_background_ice.jpg', tags: ['ice', 'mountain', 'lake', 'fog', 'nature', 'winter'] }, { id: '20d92de1-741f-4330-bcd1-c525d3e4171b', url: 'https://files.askir.me/1543507225557_background_mountains_2.jpg', tags: ['mountain', 'nature', 'landscape', 'trees'] }, { id: 'deca8229-5d6b-47f3-b9cf-825d92aefefd', url: 'https://files.askir.me/1543506933501_background_reedsjpg.jpg', tags: '' }, { id: 'f7c2b05d-00ec-49a3-ac1b-7788911e4f45', url: 'https://files.askir.me/1543509615620_background_mountains.jpg', tags: ['mountains', 'winter', 'snow ', 'fog'] }, { id: '15a4f9f6-6ac2-4841-a81c-9129bc85b348', url: 'https://files.askir.me/1543503585852_1543503570528-931482403.jpg', tags: ['Planning', 'Meeting'] }, { id: 'f627f2f9-5742-47ae-8b99-30408678f94e', url: 'https://files.askir.me/1543495665853_IMG_0632_2.jpg', tags: ['tree', 'nature', 'green'] }] };
export const GetImageresponseSingle = { images: [{ id: 'f7c2b05d-00ec-49a3-ac1b-7788911e4f45', url: 'https://files.askir.me/1543509615620_background_mountains.jpg', tags: ['mountains', 'winter', 'snow ', 'fog'] }] };

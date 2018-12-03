/* eslint-disable*/
export const GetArtifactRequest = {
  responseId: '50caa4a9-7017-4443-9b67-9e0190fccb9d',
  queryResult: {
    queryText: 'get me an image tagged blue white yellow',
    parameters: {
      DatePeriod: { startDate: '2018-04-01T12:00:00-06:00', endDate: '2018-04-30T12:00:00-06:00' }, Artifact: 'picture', Tag: ['blue white yellow'], Author: 'Arne',
    },
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
export const GetImageResponseMultiple = {
  images: [
    {
      id: 'ae98f455-13bd-413a-8766-9e7302e70d8f',
      url: 'https://files.askir.me/1543849566445_Bildschirmfoto vom 2018-11-04 23-42-53.png',
      tags: ['upload', 'food', 'blub'],
      score: 0.6,
    },
    {
      id: 'a47e4df4-8541-4719-b848-f774bc8da713',
      url: 'https://files.askir.me/1543849543931_Bildschirmfoto vom 2018-11-04 23-36-51.png',
      tags: '',
      score: 0.5,
    },
    {
      id: '28fa0c9e-6ccc-4b6c-a672-33d333b773a3',
      url: 'https://files.askir.me/1543849180993_Bildschirmfoto vom 2018-11-04 23-42-53_cropped.png',
      tags: '',
      score: 0.3,
    },
    {
      id: 'f421dc0c-24b4-4c3f-9702-b29ce57fffb1',
      url: 'https://files.askir.me/1543848683895_Bildschirmfoto vom 2018-11-04 23-16-18.png',
      tags: '',
      score: 0.2,
    },
    {
      id: 'ef8c89f6-9c05-40ed-857b-54cd3d62a89f',
      url: 'https://files.askir.me/1543848664016_Bildschirmfoto vom 2018-11-04 23-36-51.png',
      tags: '',
      score: 0.2,
    },
    {
      id: '64f5712a-3c97-41c9-85d8-a040cdf1fab7',
      url: 'https://files.askir.me/1543848633941_Bildschirmfoto vom 2018-11-04 23-42-53_cropped.png',
      tags: '',
      score: 0.1,
    },
    {
      id: '9f7b3329-3aeb-4456-928d-58b1d95baa30',
      url: 'https://files.askir.me/1543848509614_Bildschirmfoto vom 2018-11-04 23-42-53_cropped.png',
      tags: '',
      score: 0.1,
    },
    {
      id: '367fc8c7-a038-4ed5-85f2-706541a05ad1',
      url: 'https://files.askir.me/1543847900282_Bildschirmfoto vom 2018-11-04 23-42-53.png',
      tags: ['upload', 'food'],
      score: 0.0,
    },
    {
      id: '7b88ec14-44eb-4c23-b475-3f583c026a98',
      url: 'https://files.askir.me/1543847638112_background_ice.jpg',
      tags: '',
      score: 0.0,
    },
    {
      id: 'ddff827d-7b1b-4ab0-b5d0-02606ba3d489',
      url: 'https://files.askir.me/1543847584189_background_ice.jpg',
      tags: [],
      score: 0.0,
    },
  ],
};
export const GetImageresponseSingle = {
  images: [
    {
      id: 'ae98f455-13bd-413a-8766-9e7302e70d8f',
      url: 'https://files.askir.me/1543849566445_Bildschirmfoto vom 2018-11-04 23-42-53.png',
      tags: ['upload', 'food', 'blub'],
      score: 0.6,
    },
    {
      id: 'a47e4df4-8541-4719-b848-f774bc8da713',
      url: 'https://files.askir.me/1543849543931_Bildschirmfoto vom 2018-11-04 23-36-51.png',
      tags: '',
      score: 0.0,
    },
    {
      id: '28fa0c9e-6ccc-4b6c-a672-33d333b773a3',
      url: 'https://files.askir.me/1543849180993_Bildschirmfoto vom 2018-11-04 23-42-53_cropped.png',
      tags: '',
      score: 0.0,
    },
    {
      id: 'f421dc0c-24b4-4c3f-9702-b29ce57fffb1',
      url: 'https://files.askir.me/1543848683895_Bildschirmfoto vom 2018-11-04 23-16-18.png',
      tags: '',
      score: 0.0,
    },
    {
      id: 'ef8c89f6-9c05-40ed-857b-54cd3d62a89f',
      url: 'https://files.askir.me/1543848664016_Bildschirmfoto vom 2018-11-04 23-36-51.png',
      tags: '',
      score: 0.0,
    },
    {
      id: '64f5712a-3c97-41c9-85d8-a040cdf1fab7',
      url: 'https://files.askir.me/1543848633941_Bildschirmfoto vom 2018-11-04 23-42-53_cropped.png',
      tags: '',
      score: 0.0,
    },
    {
      id: '9f7b3329-3aeb-4456-928d-58b1d95baa30',
      url: 'https://files.askir.me/1543848509614_Bildschirmfoto vom 2018-11-04 23-42-53_cropped.png',
      tags: '',
      score: 0.0,
    },
    {
      id: '367fc8c7-a038-4ed5-85f2-706541a05ad1',
      url: 'https://files.askir.me/1543847900282_Bildschirmfoto vom 2018-11-04 23-42-53.png',
      tags: '',
      score: 0.0,
    },
    {
      id: '7b88ec14-44eb-4c23-b475-3f583c026a98',
      url: 'https://files.askir.me/1543847638112_background_ice.jpg',
      tags: '',
      score: 0.0,
    },
    {
      id: 'ddff827d-7b1b-4ab0-b5d0-02606ba3d489',
      url: 'https://files.askir.me/1543847584189_background_ice.jpg',
      tags: [],
      score: 0.0,
    },
  ],
};

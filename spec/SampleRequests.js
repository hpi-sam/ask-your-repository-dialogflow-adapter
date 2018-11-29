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

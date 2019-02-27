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
    }, {
      name: 'projects/newagent-bdb60/agent/sessions/1e9ab9f5-cb25-91a3-845f-5fcb4c81474e/contexts/team',
      lifespanCount:4,
      parameters: {
        'Artifact.original': 'image', 'Author': '', 'Tag.original': 'you', 'DatePeriod': '', 'Team':'74680e6a-d547-4b56-8745-3a43d554ffe9', 'Tag': ['blue white yellow'], 'Author.original': '', 'DatePeriod.original': '', 'Team.original': "test","Artifact":"picture"}
      }
  ],
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
  images: [{
    id: '90762a51-dd48-4c27-b58a-47e58ef04ec5',
    type: 'image',
    created_at: '2018-12-06T14:40:10.436321',
    updated_at: '2018-12-06T14:40:10.436326',
    tags: ['dwa'],
    file_date: '2018-12-06T14:40:10.436074',
    score: 0.937104,
    url: 'https://files.askir.me/c2d7af95-44f6-4839-82d4-eca946e75e91_Bildschirmfoto_vom_2018-07-25_22-25-23.png',
  }, {
    id: 'be633702-4a79-4fed-914d-9df55444d7e4',
    type: 'image',
    created_at: '2018-12-06T14:37:47.375794',
    updated_at: '2018-12-06T14:37:47.375799',
    tags: ['dwa', 'dwada'],
    file_date: '2018-12-06T14:37:47.375435',
    score: 0.78019357,
    url: 'https://files.askir.me/4df920ae-5718-499d-a13d-045489d71f2e_Bildschirmfoto_vom_2018-11-04_23-36-51.png',
  }, {
    id: '69a1a540-af2b-421b-87aa-00bf8f1b224d',
    type: 'image',
    created_at: '2018-12-05T14:28:27.172226',
    updated_at: '2018-12-05T14:28:27.172231',
    tags: ['dwa'],
    file_date: '2018-12-05T14:28:27.171822',
    score: 0.52354836,
    url: 'https://files.askir.me/141b360d-155a-4594-8911-b6576565a0cb_Bildschirmfoto_vom_2018-11-04_23-14-21.png',
  }, {
    id: 'c917446f-bee7-400f-9007-2a74d730c024',
    type: 'image',
    created_at: '2018-12-03T18:03:22.397145',
    updated_at: '2018-12-03T18:03:22.397154',
    tags: ['dwa', 'dwadwa'],
    file_date: '2018-12-03T18:03:22.391716',
    score: 0.3901917,
    url: 'https://files.askir.me/fe4a552f-98ff-47fd-b4ad-3e2414ce82e5_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: '27df6cd1-cefc-4bdc-b377-96afa6c1b43d',

    type: 'image',
    created_at: '2018-12-03T17:51:11.592815',
    updated_at: '2018-12-03T17:51:11.592824',
    tags: ['dwa'],
    file_date: '2018-12-03T17:51:11.565778',
    score: 0.2876821,
    url: 'https://files.askir.me/6232b4cd-e9e9-4449-86d0-472449e409dd_carlos-grury-santos-534439-unsplash.jpg',
  }, {
    id: 'dc7e57e6-6a15-4145-bdc3-08b633dd0b3f',
    type: 'image',
    created_at: '2018-12-06T14:55:14.072653',
    updated_at: '2018-12-06T14:55:14.072658',
    tags: ['dwa'],
    file_date: '2018-12-06T14:55:14.072311',
    score: 0.18232156,
    url: 'https://files.askir.me/1d7fd37a-8cdb-4c7e-8e93-e7ff0a7662ec_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: 'cf55076d-4cdb-4fe7-a6d6-a48065549d92',
    type: 'image',
    created_at: '2018-12-03T17:51:21.399840',
    updated_at: '2018-12-03T17:51:21.399848',
    tags: ['dwa'],
    file_date: '2018-12-03T17:51:21.398536',
    score: 0.18232156,
    url: 'https://files.askir.me/02a4de65-8754-4cdf-85ee-0dc0d66ea9dc_daniel-cheung-129839-unsplash.jpg',
  }, {
    id: '598bbd2b-4270-436d-ac97-6df697241a4e',
    type: 'image',
    created_at: '2018-12-06T15:28:01.530332',
    updated_at: '2018-12-06T15:28:01.530338',
    tags: [],
    file_date: '2018-12-06T15:28:01.529952',
    score: 0.0,
    url: 'https://files.askir.me/9091b1a5-5eec-4f76-a5cc-1c7c53bd7dac_Bildschirmfoto_vom_2018-11-04_23-16-18.png',
  }, {
    id: 'd8e5ed34-170b-4394-ae7b-cf85c8313585',
    type: 'image',
    created_at: '2018-12-06T15:10:58.902477',
    updated_at: '2018-12-06T15:10:58.902483',
    tags: [],
    file_date: '2018-12-06T15:10:58.902076',
    score: 0.0,
    url: 'https://files.askir.me/99ae2647-7d08-4693-948e-aa7bd9d228ee_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: '2fe96cb6-b669-4a28-8746-c4f125e415d1',
    type: 'image',
    created_at: '2018-12-06T14:35:41.465139',
    updated_at: '2018-12-06T14:35:41.465148',
    tags: [],
    file_date: '2018-12-06T14:35:41.461544',
    score: 0.0,
    url: 'https://files.askir.me/98ec6596-5f27-4fe2-acdd-1bb5badaeabc_Bildschirmfoto_vom_2018-11-04_23-16-18.png',
  }, {
    id: '51022560-ab6b-45e9-836a-7829ac04f80b',
    type: 'image',
    created_at: '2018-12-06T14:09:33.436895',
    updated_at: '2018-12-06T14:09:33.436906',
    tags: [],
    file_date: '2018-12-06T14:09:33.428413',
    score: 0.0,
    url: 'https://files.askir.me/7a785d15-e872-4a72-b4e7-f4683a99381f_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: '827673fe-ae19-4dd3-a73e-12f3d01c097e',
    type: 'image',
    created_at: '2018-12-06T14:00:35.333293',
    updated_at: '2018-12-06T14:00:35.333298',
    tags: [],
    file_date: '2018-12-06T14:00:35.332850',
    score: 0.0,
    url: 'https://files.askir.me/87483c45-ba94-425d-be71-c38abe497c72_Bildschirmfoto_vom_2018-11-04_23-14-21.png',
  }],
};
export const GetImageresponseSingle = {
  images: [{
    id: '90762a51-dd48-4c27-b58a-47e58ef04ec5',
    type: 'image',
    created_at: '2018-12-06T14:40:10.436321',
    updated_at: '2018-12-06T14:40:10.436326',
    tags: ['dwa'],
    file_date: '2018-12-06T14:40:10.436074',
    score: 0.937104,
    url: 'https://files.askir.me/c2d7af95-44f6-4839-82d4-eca946e75e91_Bildschirmfoto_vom_2018-07-25_22-25-23.png',
  }, {
    id: 'be633702-4a79-4fed-914d-9df55444d7e4',
    type: 'image',
    created_at: '2018-12-06T14:37:47.375794',
    updated_at: '2018-12-06T14:37:47.375799',
    tags: ['dwa', 'dwada'],
    file_date: '2018-12-06T14:37:47.375435',
    score: 0.0,
    url: 'https://files.askir.me/4df920ae-5718-499d-a13d-045489d71f2e_Bildschirmfoto_vom_2018-11-04_23-36-51.png',
  }, {
    id: '69a1a540-af2b-421b-87aa-00bf8f1b224d',
    type: 'image',
    created_at: '2018-12-05T14:28:27.172226',
    updated_at: '2018-12-05T14:28:27.172231',
    tags: ['dwa'],
    file_date: '2018-12-05T14:28:27.171822',
    score: 0.0,
    url: 'https://files.askir.me/141b360d-155a-4594-8911-b6576565a0cb_Bildschirmfoto_vom_2018-11-04_23-14-21.png',
  }, {
    id: 'c917446f-bee7-400f-9007-2a74d730c024',
    type: 'image',
    created_at: '2018-12-03T18:03:22.397145',
    updated_at: '2018-12-03T18:03:22.397154',
    tags: ['dwa', 'dwadwa'],
    file_date: '2018-12-03T18:03:22.391716',
    score: 0.0,
    url: 'https://files.askir.me/fe4a552f-98ff-47fd-b4ad-3e2414ce82e5_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: '27df6cd1-cefc-4bdc-b377-96afa6c1b43d',

    type: 'image',
    created_at: '2018-12-03T17:51:11.592815',
    updated_at: '2018-12-03T17:51:11.592824',
    tags: ['dwa'],
    file_date: '2018-12-03T17:51:11.565778',
    score: 0.0,
    url: 'https://files.askir.me/6232b4cd-e9e9-4449-86d0-472449e409dd_carlos-grury-santos-534439-unsplash.jpg',
  }, {
    id: 'dc7e57e6-6a15-4145-bdc3-08b633dd0b3f',
    type: 'image',
    created_at: '2018-12-06T14:55:14.072653',
    updated_at: '2018-12-06T14:55:14.072658',
    tags: ['dwa'],
    file_date: '2018-12-06T14:55:14.072311',
    score: 0.0,
    url: 'https://files.askir.me/1d7fd37a-8cdb-4c7e-8e93-e7ff0a7662ec_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: 'cf55076d-4cdb-4fe7-a6d6-a48065549d92',
    type: 'image',
    created_at: '2018-12-03T17:51:21.399840',
    updated_at: '2018-12-03T17:51:21.399848',
    tags: ['dwa'],
    file_date: '2018-12-03T17:51:21.398536',
    score: 0.0,
    url: 'https://files.askir.me/02a4de65-8754-4cdf-85ee-0dc0d66ea9dc_daniel-cheung-129839-unsplash.jpg',
  }, {
    id: '598bbd2b-4270-436d-ac97-6df697241a4e',
    type: 'image',
    created_at: '2018-12-06T15:28:01.530332',
    updated_at: '2018-12-06T15:28:01.530338',
    tags: [],
    file_date: '2018-12-06T15:28:01.529952',
    score: 0.0,
    url: 'https://files.askir.me/9091b1a5-5eec-4f76-a5cc-1c7c53bd7dac_Bildschirmfoto_vom_2018-11-04_23-16-18.png',
  }, {
    id: 'd8e5ed34-170b-4394-ae7b-cf85c8313585',
    type: 'image',
    created_at: '2018-12-06T15:10:58.902477',
    updated_at: '2018-12-06T15:10:58.902483',
    tags: [],
    file_date: '2018-12-06T15:10:58.902076',
    score: 0.0,
    url: 'https://files.askir.me/99ae2647-7d08-4693-948e-aa7bd9d228ee_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: '2fe96cb6-b669-4a28-8746-c4f125e415d1',
    type: 'image',
    created_at: '2018-12-06T14:35:41.465139',
    updated_at: '2018-12-06T14:35:41.465148',
    tags: [],
    file_date: '2018-12-06T14:35:41.461544',
    score: 0.0,
    url: 'https://files.askir.me/98ec6596-5f27-4fe2-acdd-1bb5badaeabc_Bildschirmfoto_vom_2018-11-04_23-16-18.png',
  }, {
    id: '51022560-ab6b-45e9-836a-7829ac04f80b',
    type: 'image',
    created_at: '2018-12-06T14:09:33.436895',
    updated_at: '2018-12-06T14:09:33.436906',
    tags: [],
    file_date: '2018-12-06T14:09:33.428413',
    score: 0.0,
    url: 'https://files.askir.me/7a785d15-e872-4a72-b4e7-f4683a99381f_Bildschirmfoto_vom_2018-11-04_23-42-53.png',
  }, {
    id: '827673fe-ae19-4dd3-a73e-12f3d01c097e',
    type: 'image',
    created_at: '2018-12-06T14:00:35.333293',
    updated_at: '2018-12-06T14:00:35.333298',
    tags: [],
    file_date: '2018-12-06T14:00:35.332850',
    score: 0.0,
    url: 'https://files.askir.me/87483c45-ba94-425d-be71-c38abe497c72_Bildschirmfoto_vom_2018-11-04_23-14-21.png',
  }],
};
export const PostPresentationRequestMultiple = {
  image_ids:
    ['90762a51-dd48-4c27-b58a-47e58ef04ec5',
      'be633702-4a79-4fed-914d-9df55444d7e4',
      '69a1a540-af2b-421b-87aa-00bf8f1b224d',
      'c917446f-bee7-400f-9007-2a74d730c024',
      '27df6cd1-cefc-4bdc-b377-96afa6c1b43d',
      'dc7e57e6-6a15-4145-bdc3-08b633dd0b3f',
      'cf55076d-4cdb-4fe7-a6d6-a48065549d92'],
};
export const PostPresentationRequestSingle = {
  image_ids:
    ['90762a51-dd48-4c27-b58a-47e58ef04ec5',],
};

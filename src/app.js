// @flow
import express from 'express';
import type { $Request as Request, $Response as Response } from 'express';
import bodyParser from 'body-parser';
import { dialogflow, Image } from 'actions-on-google';
import logger from './logger';

// URLs for images used in card rich responses
const architectureimage = 'https://cdn-images-1.medium.com/max/1600/1*TYRSuON0vVxy8olllrBVEw.png';
const mindmapimage = 'https://www.zeitzuleben.de/zzlwp1892/wp-content/uploads/2001/02/Mind-Mapping-Aufbau-2.png';

const app = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const dialog = dialogflow();

// Register handlers for Dialogflow intents

dialog.intent('retrieve artifact', (conv, params) => {
  logger.info(`parameters: ${conv.parameters}`);
  logger.info(`Artifact: ${params.Artifact}`);
  if (params.Artifact === 'Mindmap') {
    conv.ask('Here is your Mindmap');
    conv.ask(new Image({
      url: mindmapimage,
      alt: 'Your Mindmap',
    }));
  } else {
    conv.ask('Here is your Architecture Sketch');
    conv.ask(new Image({
      url: architectureimage,
      alt: 'Your Architecture Sketch',
    }));
  }
});

app.post('/', dialog);
export default app;

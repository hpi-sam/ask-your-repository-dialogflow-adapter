// @flow
import express from 'express';
import type { $Request as Request, $Response as Response } from 'express';
import bodyParser from 'body-parser';
import { dialogflow, Image } from 'actions-on-google';
import ArtefactController from './controller/ArtefactController';
import logger from './logger';

const app = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is tobito. /\n There isn\'t any content on this website.');
  logger.info('received GET /');
});

const dialog = dialogflow();


// function esraRequestGetLatest(conv, params) {
//   // TODO: Request latest image from esra once an esra route is implemented for this.
// }

// Register handlers for Dialogflow intents

dialog.intent('Get Artefacts', ArtefactController.getArtefacts);
// dialog.intent('Get latest Artefact', esraRequestGetLatest);

dialog.intent(['Get latest Artefact'], (conv) => {
  conv.ask('The server can\'t do this yet but have a Cat instead!');
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }));
  logger.info('Get latest Artefact - Responded with cat image.');
});
app.post('/', dialog);
export default app;

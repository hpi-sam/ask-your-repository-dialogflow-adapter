// @flow
import express from 'express';
import type { $Request as Request, $Response as Response } from 'express';
import bodyParser from 'body-parser';
import { dialogflow } from 'actions-on-google';
import getArtifacts from './controller/DialogflowController';
import logger from './logger';

const app = express();
app.use(bodyParser.json());

const dialog = dialogflow();

dialog.intent('Get Artifacts', getArtifacts);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is tobito.\n There isn\'t any content on this website.');
  logger.info('received GET /');
});
app.post('/', dialog);
export default app;

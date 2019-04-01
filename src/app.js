// @flow
import express from 'express';
import type { $Request as Request, $Response as Response } from 'express';
import bodyParser from 'body-parser';
import { dialogflow, SignIn } from 'actions-on-google';
import { getArtifacts, startSignIn, getSignIn } from './controller/DialogflowController';
import logger from './logger';


const app = express();
app.use(bodyParser.json());

const dialog = dialogflow({ clientId: '24456970850-6t9vipqs6smjt3jmfk7db03cr8r1gqsu.apps.googleusercontent.com' });
dialog.intent('Default Welcome Intent', (conv) => {
  conv.ask(new SignIn('To get your account details'));
});
dialog.intent('Get Artifacts', getArtifacts);
dialog.intent('Sign in', getSignIn);
// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is tobito. There isn\'t any content on this website.');
  logger.info('received GET /');
});
app.post('/', dialog);
export default app;

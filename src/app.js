// @flow
import express from 'express';
import type { $Request as Request, $Response as Response } from 'express';
import bodyParser from 'body-parser';
import { dialogflow, SignIn } from 'actions-on-google';
import {
  getArtifacts, getSignIn, selectTeam, createTeam, validateTeamsParams, getArtifactsTeamFromContext,
} from './controller/DialogflowController';
import logger from './logger';


const app = express();
app.use(bodyParser.json());

const dialog = dialogflow({ clientId: '24456970850-6t9vipqs6smjt3jmfk7db03cr8r1gqsu.apps.googleusercontent.com' });
dialog.intent('Default Welcome Intent', (conv) => {
  conv.ask(new SignIn('To get your account details'));
});
dialog.intent('Signin', getSignIn);
dialog.intent('GetArtifacts', getArtifactsTeamFromContext);
dialog.intent('GetArtifactsNoTeamSelected', getArtifacts);
dialog.intent('SelectTeam', selectTeam);
dialog.intent('SelectAnotherTeam', selectTeam);
// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is tobito! There isn\'t any content on this website.');
  logger.info('received GET /');
});
app.post('/', dialog);

app.post('/teams', validateTeamsParams, createTeam);
export default app;

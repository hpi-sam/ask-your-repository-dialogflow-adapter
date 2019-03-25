require('dotenv').config();
const rimraf = require('rimraf');
const Dialogflow = require('dialogflow');
const AdmZip = require('adm-zip');

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const file = process.argv[2] || './Agent';

async function exportAgent(projectId, file = './Agent') {
  rimraf.sync(file);
  const agentClient = new Dialogflow.v2.AgentsClient({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });
  const [res] = await agentClient.exportAgent({ parent: projectId });
  const buffer = res.result.agentContent;
  const zip = new AdmZip(buffer);
  zip.extractAllTo(file);
}

exportAgent(projectId, file);

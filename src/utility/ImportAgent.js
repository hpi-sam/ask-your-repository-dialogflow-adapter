require('dotenv').config();
const Dialogflow = require('dialogflow');
const AdmZip = require('adm-zip');
const dynamic = require('./dynamicallyGeneratedEntries');

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const file = process.argv[2] || './Agent';

async function importAgent() {
  const agentClient = new Dialogflow.v2.AgentsClient({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });
  const zip = new AdmZip();
  zip.addLocalFolder(file);
  dynamic.forEach(entry => zip.deleteFile(entry));
  const buffer = zip.toBuffer();
  await agentClient.importAgent({ parent: projectId, agentContent: buffer });
}

importAgent();

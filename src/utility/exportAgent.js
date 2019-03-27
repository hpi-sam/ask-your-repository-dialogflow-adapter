require('dotenv').config();
const rimraf = require('rimraf');
const Dialogflow = require('dialogflow');
const AdmZip = require('adm-zip');
const exportExclude = require('./agentConfig');

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const file = process.argv[2] || './Agent';
const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;

async function exportAgent() {
  rimraf.sync(file);
  const agentClient = new Dialogflow.v2.AgentsClient({
    keyFilename: keyFile,
  });
  const [res] = await agentClient.exportAgent({ parent: projectId });
  const buffer = res.result.agentContent;
  const zip = new AdmZip(buffer);
  zip.getEntries().forEach(entry => (exportExclude.includes(entry.name) && zip.deleteFile(entry)));
  zip.extractAllTo(file);
}

exportAgent();

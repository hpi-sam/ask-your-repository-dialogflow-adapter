require('dotenv').config();
const argv = require('minimist')(process.argv.slice(2));
const Dialogflow = require('dialogflow');
const AdmZip = require('adm-zip');
const importExclude = require('./agentConfig');

const projectId = 'pid' in argv ? argv.pid : process.env.DIALOGFLOW_PROJECT_ID;
const file = 'dir' in argv ? argv.dir : './Agent';
const keyFile = 'key' in argv ? argv.key : process.env.GOOGLE_APPLICATION_CREDENTIALS;

async function importAgent() {
  const agentClient = new Dialogflow.v2.AgentsClient({
    keyFilename: keyFile,
  });
  const zip = new AdmZip();
  zip.addLocalFolder(file);
  zip.getEntries().forEach(entry => (importExclude.includes(entry.name) && zip.deleteFile(entry)));
  const buffer = zip.toBuffer();
  await agentClient.importAgent({ parent: projectId, agentContent: buffer });
}

importAgent();

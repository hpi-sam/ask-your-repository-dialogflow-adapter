const Dialogflow = require('dialogflow');
const AdmZip = require('adm-zip');


async function importAgent(projectId, file = './Agent') {
  const agentClient = new Dialogflow.v2.AgentsClient();
  const zip = new AdmZip();
  zip.addLocalFolder(file);
  const buffer = zip.toBuffer();
  await agentClient.importAgent({ parent: projectId, agentContent: buffer });
}

if (process.argv[3]) {
  importAgent(process.argv[2], process.argv[3]);
} else {
  importAgent(process.argv[2]);
}

const Dialogflow = require('dialogflow');
const AdmZip = require('adm-zip');


async function exportAgent(projectId, file = './Agent') {
  const agentClient = new Dialogflow.v2.AgentsClient();
  const [res] = await agentClient.exportAgent({ parent: projectId });
  const buffer = res.result.agentContent;
  const zip = new AdmZip(buffer);
  zip.extractAllTo(file);
}
if (process.argv[3]) {
  exportAgent(process.argv[2], process.argv[3]);
} else {
  exportAgent(process.argv[2]);
}

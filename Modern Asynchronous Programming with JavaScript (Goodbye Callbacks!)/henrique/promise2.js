const getInformationFromDatabase = require('./src/getInformationFromDatabasePrm');
const buildHTMLTemplate = require('./src/buildHTMLTemplatePrm');
const sendResponse = require('./src/sendResponsePrm');

getInformationFromDatabase()
  .then(buildHTMLTemplate)
  .then(sendResponse)
  .catch((err) => console.log(err));

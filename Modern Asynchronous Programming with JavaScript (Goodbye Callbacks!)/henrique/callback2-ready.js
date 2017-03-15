const getInformationFromDatabase = require('./src/getInformationFromDatabase');
const buildHTMLTemplate = require('./src/buildHTMLTemplate');
const sendResponse = require('./src/sendResponse');

getInformationFromDatabase((information) => {
  buildHTMLTemplate(information, (template) => {
    sendResponse(template);
  });
});

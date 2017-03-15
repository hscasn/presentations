const buildHTMLTemplate = require('./src/buildHTMLTemplate');
const getInformationFromDatabase = require('./src/getInformationFromDatabase');
const sendResponse = require('./src/sendResponse');

const information = getInformationFromDatabase();
const builtHTML = buildHTMLTemplate(information);
sendResponse(builtHTML);

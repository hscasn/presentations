const getInformationFromDatabase = require('./src/getInformationFromDatabasePrm');
const buildHTMLTemplate = require('./src/buildHTMLTemplatePrm');
const sendResponse = require('./src/sendResponsePrm');
const insertInDb = require('./src/insertInDb');

async function start() {
  try {
    const information = await getInformationFromDatabase();
    const template = await buildHTMLTemplate(information);
    await sendResponse(template);

    await Promise.all([ insertInDb(1), insertInDb(2), insertInDb(3) ]);
    console.log(`All done.`);
  }
  catch (e) {
    console.log(`Bug: ${e}`);
  }
}

start();

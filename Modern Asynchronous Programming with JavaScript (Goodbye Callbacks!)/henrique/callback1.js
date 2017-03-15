const getInformationFromDatabase = require('./src/getInformationFromDatabase');

const printData = function (data) {
  console.log(`The information is: ${data}`);
};

getInformationFromDatabase((data) => {
  printData(data);
});

/*
const information = getInformationFromDatabase();

printData(information);
*/

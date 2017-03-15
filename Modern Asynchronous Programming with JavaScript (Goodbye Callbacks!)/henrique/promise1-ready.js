const getRandomTime = require('./src/getRandomTime');

/**
 * Gets information from the database
 */
const getInformation = function () {
  const t = getRandomTime();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(t);
    });
  });
};


const getMoreInformation = function () {
  const t = getRandomTime();

  return new Promise((resolve, reject) => {
    if (t < 500) {
      reject(`The data received is invalid`);
    }
    else {
      resolve(`Ok`);
    }
  });
};


/**
 * Prints the information
 */
const print = function (information) {
  console.log(`Data received: ${information}`);
};


getInformation()
  .then(print)
  .then(getMoreInformation)
  .then(print)
  .catch(console.log);

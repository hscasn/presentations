const getRandomTime = require('./src/getRandomTime');

/**
 * Gets information from the database
 */
const getInformation = function () {
  const t = getRandomTime();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t < 500) { reject('Invalid number!!'); }
      resolve(t);
    }, t);
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
  .catch((err) => {
    console.log(`Bug!! ${err}`);
  });

/*
getInformation((data) => print(data));
*/

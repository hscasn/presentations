const getRandomTime = require('./src/getRandomTime');

const func1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`First function done`);
    }, getRandomTime());
  });
};


const func2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Second function done`);
    }, getRandomTime());
  });
};


// func1 and func2 are executed in PARALLEL
Promise.race([ func1(), func2() ])
  .then((results) => {
    console.log(`Done!`);
    console.log(`The results are: ${results.toString()}`);
  });

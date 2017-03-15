const co = require('co');
const getRandomTime = require('./src/getRandomTime');

const func1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomTime() < 500) {
        reject('Invalid data!!');
        return;
      }
      console.log(`Function 1 done`);
      resolve();
    }, getRandomTime());
  });
};

const func2 = (cb) => {
  const t = getRandomTime();
  setTimeout(() => {
    console.log(`Function 2 done`);
    cb();
  }, t);
}

const func3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Function 3 done`);
      resolve();
    }, getRandomTime());
  });
};

const func4 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Function 4 done`);
      resolve();
    }, getRandomTime());
  });
};

co(function* Generator() {

  try {
    yield func1();
  }
  catch (e) {
    console.log(`Bug: ${e}`);
  }

  yield func2;

  console.log(`Now running in parallel:`);

  yield [ func3(), func4() ];

  yield func2;
});

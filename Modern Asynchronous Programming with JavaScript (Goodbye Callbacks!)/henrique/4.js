const co = require('co');
const T = require('./src/getRandomTime');

const func1 = (cb) => {
  const t = T();
  return new Promise((resolve) => {
    setTimeout(() => { console.log(1); resolve(); }, t);
  });
}
const func2 = (cb) => {
  const t = T();
  return new Promise((resolve) => {
    setTimeout(() => { console.log(2); resolve(); }, t);
  });
}
const func3 = (cb) => {
  const t = T();
  return new Promise((resolve) => {
    setTimeout(() => { console.log(3); resolve(); }, t);
  });
}

co(function* () {
  try {
    yield func1();
    yield func2();
    yield func3();
  }
  catch(e) {
    console.log(e);
  }
});

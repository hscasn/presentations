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

(() => {
  func1()
    .then(func2)
    .then(func3)
    .catch(console.log);
})();

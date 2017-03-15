const T = require('./src/getRandomTime');

const func1 = (cb) => {
  const t = T();
  setTimeout(() => { console.log(1); cb(); }, t);
}
const func2 = (cb) => {
  const t = T();
  setTimeout(() => { console.log(2); cb(); }, t);
}
const func3 = (cb) => {
  const t = T();
  setTimeout(() => { console.log(3); ; }, t);
}

(() => {
  func1(() => {
    func2(() => {
      func3();
    });
  });
})();

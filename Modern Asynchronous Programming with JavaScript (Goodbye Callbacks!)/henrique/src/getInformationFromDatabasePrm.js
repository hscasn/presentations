const getRandomTime = require('./getRandomTime');

module.exports = function (cb) {
  const t = getRandomTime();

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got information from database: ${t}`);
      resolve(t);
    }, t);
  });
};

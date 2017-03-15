const getRandomTime = require('./getRandomTime');

module.exports = function (cb) {
  const t = getRandomTime();

  setTimeout(() => {
    console.log(`Got information from database: ${t}`);
    if (cb) { cb(t); }
  }, t);
};

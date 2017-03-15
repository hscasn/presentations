const getRandomTime = require('./getRandomTime');

module.exports = function (template, cb) {
  const t = getRandomTime();

  setTimeout(() => {
    console.log(`Sending response: ${template}`);
    if (cb) { cb(t); }
  }, t);
};

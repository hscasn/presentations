const getRandomTime = require('./getRandomTime');

module.exports = function (data, cb) {
  const t = getRandomTime();

  setTimeout(() => {
    const template = `<div>${data}</div>`;
    console.log(`Building html template for ${data}`);
    if (cb) { cb(template); }
  }, getRandomTime());
};

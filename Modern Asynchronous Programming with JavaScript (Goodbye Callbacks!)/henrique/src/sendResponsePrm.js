const getRandomTime = require('./getRandomTime');

module.exports = function (template) {
  const t = getRandomTime();

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sending response: ${template}`);
      resolve();
    }, t);
  });
};

const getRandomTime = require('./getRandomTime');

module.exports = function (data) {
  const t = getRandomTime();
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (data < 300) { reject(`Invalid data!`); }

      const template = `<div>${data}</div>`;
      console.log(`Building html template for ${data}`);
      resolve(template);
    }, getRandomTime());
  });
};

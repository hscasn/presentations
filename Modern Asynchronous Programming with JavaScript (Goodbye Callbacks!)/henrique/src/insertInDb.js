module.exports = function (i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Entry ${i} inserted in the database`);
      resolve();
    }, ~~(Math.random() * 1000));
  });
};

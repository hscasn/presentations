const getRandomTime = require('./src/getRandomTime');

const getInformation = function () {
  const t = getRandomTime();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(t);
    }, t);
  });
};


const addTwoNumbers = async function () {
  const n1 = await getInformation();
  const n2 = await getInformation();

  console.log(`The numbers are: ${n1} and ${n2}`);

  return n1 + n2;
}

addTwoNumbers()
  .then((result) => {
    console.log(`The result is: ${result}`);
  });

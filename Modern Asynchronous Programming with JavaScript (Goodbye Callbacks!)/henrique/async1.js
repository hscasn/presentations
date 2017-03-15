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
  const numbers = [n1, n2];
  console.log(`The numbers are: ${numbers.toString()}`);
  return numbers[0] + numbers[1];
}

addTwoNumbers()
  .then((result) => {
    console.log(`The result is: ${result}`);
  });

/*
Promise.all([ getInformation(), getInformation() ])
  .then(addTwoNumbers)
  .then((result) => {
    console.log(`The result is: ${result}`);
  });
*/

const getRandomTime = require('./src/getRandomTime');

const func1 = (cb) => {
  console.log(`First function started`);
  setTimeout(() => {
    console.log(`First function done`);
    cb();
  }, getRandomTime());
};


const func2 = (cb) => {
  console.log(`Second function started`);
  setTimeout(() => {
    console.log(`Second function done`);
    cb();
  }, getRandomTime());
};

const func3 = (cb) => {
  console.log(`Third function started`);
  setTimeout(() => {
    console.log(`Third function done`);
    cb();
  }, getRandomTime());
};


let functionsToRun = 3;

func1(whenFinished);
func2(whenFinished);
func3(whenFinished);


function whenFinished() {
  functionsToRun--;
  if (functionsToRun <= 0) { done(); }
}

function done() {
  console.log(`All done!`);
}

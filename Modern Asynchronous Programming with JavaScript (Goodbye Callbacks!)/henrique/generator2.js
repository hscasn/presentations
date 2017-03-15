const co = require('co');
const getRandomTime = require('./src/getRandomTime');

function function1(cb) {
  const t = getRandomTime();
  setTimeout(() => {
    console.log(`Function 1 done`);
    cb();
  }, t);
}

function function2(cb) {
  const t = getRandomTime();
  setTimeout(() => {
    console.log(`Function 2 done`);
    cb();
  }, t);
}

function function3(cb) {
  const t = getRandomTime();
  setTimeout(() => {
    console.log(`Function 3 done`);
  }, t);
}

co(function* () {
  yield function1;
  yield function2;
  yield function3;
});

/*
const g = Generator();

function run() {
  const result = g.next();
  result.value(() => { run(); });
}

run();
/*
function1(() => {
  function2(() => {
    function3();
  });
});
*/

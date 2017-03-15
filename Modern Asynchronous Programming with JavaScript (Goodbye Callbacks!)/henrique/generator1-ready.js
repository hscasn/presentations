function* Generator() {
  yield 1;
    console.log(`Between 1 and 2`);
  const p = yield 2;
    console.log(`Received ${p}`);
  yield 3;

  return 4;
}

const generator = Generator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next(1234));
console.log(generator.next());

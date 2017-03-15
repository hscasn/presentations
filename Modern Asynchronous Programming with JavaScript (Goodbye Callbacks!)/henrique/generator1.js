function* Generator() {
  yield 3;
  yield 2;
  return 1;
}

const g = Generator();

console.log(g.next());
console.log(g.next());
console.log(g.next());

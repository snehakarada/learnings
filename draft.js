const a = new Set([1, 2, 3, 1]);
const array = ['hi', 1, 2, 'hello'];
console.log('a', a);
console.log('array', array);

console.time('Set');
console.log(a.has(3));
console.timeEnd('Set');

console.time('Array');
console.log(array.includes('hello'));
console.timeEnd('Array');
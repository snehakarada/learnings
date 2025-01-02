=> what is Shallow copy and deep copy?

- shallow copy means if we modify reference of an object it will effect original
  object also for example => . const a = {name : 'rama', hobbies : ['dancing']};
  - const shallowCopy = {...a};
  - shallowCopy.hobbies.push('watching movies');
  - then both shallowCopy and a become {name : 'rama', hobbies : ['dancing',
    'watching movies']}

- deep copy means when we change object reference it won't effect the original
  object.

=> Array(number)

- Array() constructor is used to create an number of spaces of an array
- Array(5) => [ < 5 empty items >]
- if we give one number as argument then it creates number of empty items , or
  if you give two or more numbers then it will give an array of elements which
  we gave as arguments.
- Array(5, 4) => [5, 4];

=> Array.from(iterable)

- for this function we should give arguments that which are iterable like
  arrays,strings.
- we can also give objects like sets.
- if we give string as an argument it will give array of elements.
  Array.from('hello') => ['h', 'e', 'l', 'l', 'o'];
- we can also write map functions in Array.from(mapFn).

=> Set();

- we will create set with new keyWord.
- const a = new Set([1, 2, 3]);
- it don't allow duplicates EX:- const a = new Set([1, 2, 1, 3]) it will give

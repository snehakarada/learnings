Set

how create a set ?

- set can be created using new keyword.
- const a = new Set([1, 2, 3]);
- we should give an iterable object as a argument to a set.
- it will give Set(number of elements in the set) {elements} => Set(3) {1, 2, 3}
- set does'nt allow duplicates.
- means if we create an set with [1, 2, 3, 2, 1] with these elements it will
  except only unique elements [1, 2, 3].

methods ::--

const set = new Set([1, 2, 3])

1. add() :- add method is used to add elements to set. it will except only one
   argument if we give more than one then it will except only first value as an
   argument.

what type of arguments it will take

- it will take strings.
- it wil take arrays.
- and we can also add set to a set.
- if we add same set(same reference) again and again to a set it won't accept.
- but if we add set with same elements and same length but you created different
  times means if the references are differnet it will accept to add

- ex :- set.add(5); then our set become {1, 2, 3, 5}

2. delete() :- delete is used to delete an element from a set.it is also accept
   one argument if we give more than one it will accept firest value as an
   argument.

- it will return boolen values .
- it will give true if there is an element you gave to delete.
- it will give false if the element is not there.

3. has() :- has is used to check is if the element is there in the set or not.

- it will return boolen values
- if element is there it will give true otherwise it will give false.
- a.has(1) it will give true.

How to convert a set into an array

- we can convert using spread Operator
- const a = [...set];

How To Iterate over a set ?

- we can iterate over set through for loop and forEach
- ex:- a.forEach(element => console.log(element));

WHY?? In performance of Member checks set is faster than array

- because why checking set uses hash table
- and arrays don.t use hash table it will check linearly or by comparing other
  elements

how to check time that how much it is taking

- for example
- const set = new Set([1, 2, 3]);
- const array = [1, 2, 3, 4];

- console.time('set');
- console.log(set.has(3));
- console.timeEnd('set');

- console.time('array');
- console.log(array.includes(1));
- console.timeEnd('array')

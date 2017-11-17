/*
* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
* * * https://www.freecodecamp.org/challenges/chunky-monkey
*/


function chunkArrayInGroups(arr, size) {
  var slicedArr = [];
  var newArr = [];
  var i = 0;

  while (i < arr.length - arr.length % size) {
    slicedArr = arr.slice(i, i + size);
    newArr.push(slicedArr);
    i += size;
  }

  if (arr.length % size != 0) {
     newArr.push(arr.slice(- arr.length % size));
  }

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

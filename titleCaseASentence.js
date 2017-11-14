/*
* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
* For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  
  for(var i = 0; i < array.length; i++) {
    array[i] = array[i].split("");
    array[i][0] = array[i][0].toUpperCase();
    array[i] = array[i].join("");
  }
  array = array.join(" ");
  return array;
}

titleCase("I'm a little tea pot");

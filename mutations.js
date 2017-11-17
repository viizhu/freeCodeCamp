/*
* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
* for example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
* The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
* Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
* * * https://www.freecodecamp.org/challenges/mutations
*/


function mutation(arr) {
  var lowerCase = arr.map(function(x) {
    return x.toLowerCase(); //case doesn't matter, so convert everything to lowercase
  });

  var elementOne = lowerCase[0].toString(); //the first element as a string
  var elementTwo = lowerCase[1].toString(); //the second element as a string

  var i = 0;
  while (i < elementTwo.length) {
    if ((elementOne.indexOf(elementTwo[i]) !== -1) && (i < elementTwo.length - 1)) {
        i++;
    } else if ((elementOne.indexOf(elementTwo[i]) !== -1) && (i == elementTwo.length - 1)) {
      return true;
    } else {
      return false;
    }
  }

}

mutation(["hello", "Hey"]);

/*
* Return the length of the longest word in the provided sentence.
* Your response should be a number.
* * * https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string
*/

function findLongestWord(str) {
  var array = str.split(" ");
  var lengths = [];
  for (var i = 0; i < array.length; i++) {    
      lengths.push(array[i].length); 
   }
   lengths.sort(function(a, b) {
      return b - a;
   });
   return lengths[0];
   }
   
findLongestWord("The quick brown fox jumped over the lazy dog");

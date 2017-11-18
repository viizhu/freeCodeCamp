/*
* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
* In a shift cipher the meanings of the letters are shifted by some set amount.
* A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
* Write a function which takes a ROT13 encoded string as input and returns a decoded string.
* All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
* * * https://www.freecodecamp.org/challenges/caesars-cipher
*/


function rot13(str) { // LBH QVQ VG!
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }

  //turn everything into ascii
  var unicodeArr = arr.map.call(arr, function(char) {
    x = char.charCodeAt(0);

    if (x < 65 || x > 90) {
      return String.fromCharCode(x);
    } else if (x >= 78) {
      return String.fromCharCode(x-13);
    } else if (x < 78) {
      return String.fromCharCode(x+13);
    }
  });

  return unicodeArr.join("");

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

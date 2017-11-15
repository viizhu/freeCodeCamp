/*
* Check if a string (first argument, str) ends with the given target string (second argument, target).
* This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
* But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
* * * https://www.freecodecamp.org/challenges/confirm-the-ending
*/

function confirmEnding(str, target) {
  if (str.substr(-target.length, target.length) == target) {
    return true;
  } else {
    return false;
  }}

confirmEnding("Open sesame", "same");

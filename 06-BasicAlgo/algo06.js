/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let matchValue = str.length - target.length;
  let result = str.substring(matchValue,str.length);
  if (result == target) {
    return true;
  } else {
    return false;
  }

}

confirmEnding("Congratulation", "on");
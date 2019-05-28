/**
 * Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    let repValue = "";
    if (num < 0) {
      str = "";
    } else {    
      while (num > 0) {
        repValue += str;
        num--;
      }    
    }
    console.log(repValue);
    return repValue;
  }
  
  repeatStringNumTimes("abc", 3);
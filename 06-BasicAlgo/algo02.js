/**
 * Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function reverseString(str) {
    let arr = "";
    for (let i = str.length -1; i >= 0; i--) {
      arr = arr + str[i];
    }
    str = arr.toString();
    console.log(arr);
    return str;
  }
  
  reverseString("hello");
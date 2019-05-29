/**
 * Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.zz
    return arr.filter(Boolean);
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);
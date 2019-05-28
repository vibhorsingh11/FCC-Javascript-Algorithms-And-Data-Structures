/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        let newValue = str.substring(0,num);
        newValue += "...";
        return newValue;
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
/**
 * Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 */

function steamrollArray(arr) {
    // I'm a steamroller, baby
     var flattenedArray = [];
  
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    arr.forEach(flatten);
    return flattenedArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
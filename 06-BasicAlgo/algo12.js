/**
 * You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    var value = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      value.splice(n, 0, arr1[i]);
      n++;
    }
    console.log(value);
    return value;  
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
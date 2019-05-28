/**
 * Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function findLongestWordLength(str) {
    let count = 0, max = 0;
    for (let i = 0; i < str.length; i++)
        {
            if (str[i] != ' ')
                {
                    count++;
                    if (count > max)
                    {
                        max = count;                        
                    }                    
                }
                else
                    {
                        count = 0;
                    }
              }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
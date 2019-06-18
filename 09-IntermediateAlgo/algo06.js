/**
 * Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 */

function translatePigLatin(str) {
    var pigLatin = '';
    var regex = /[aeiou]/gi;
    
    if (str[0].match(regex)) {
      pigLatin = str + 'way';
    } else if(str.match(regex) === null) {    
      pigLatin = str + 'ay';
    } else {
      var vowelIndice = str.indexOf(str.match(regex)[0]);
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }
    return pigLatin;
  }
  
  translatePigLatin("consonant");
// Write a JavaScript function to count the number of vowels in a String argument.


function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (/[aeiou]/i.test(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  let str = "apnacollege";
  console.log(countVowels(str));
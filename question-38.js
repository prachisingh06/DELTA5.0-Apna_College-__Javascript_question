// Write a JavaScript function to extract unique characters from a string.
// Example: str=“abcdabcdefgggh” ans=“abcdefgh"

let  arr ="abviunfguaosdiancsy ";

//function to get string with all uniqe elememts

function getUniqe(str) {
    let ans = " ";
    for (let i = 0; i < arr.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar)== -1){
            ans += currChar;
        }
        
    }
    return ans;
    
}

console.log(getUniqe(arr));

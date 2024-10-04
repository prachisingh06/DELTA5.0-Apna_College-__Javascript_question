// Write a javascript program to test whether the character at the given (character) index is lower case.

let str = "Apna college";

let idx = 3;

if(str[idx] == str[idx].toLocaleLowerCase()){
    console.log("character is lowercase");
    
}else{
    console.log("character is not lowercase");
}
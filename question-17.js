// Write a program to check if 2 numbers have the same last digit.
// eg: 32 and 47852 have the same last digit i.e. 2

let num1 = 39929;
let num2 = 47852;

if((num1% 10 )==(num2%10)){
    console.log("number have the same last digit which is",num1%10);
    
}else{
    console.log("number don't have the same last digit");

}
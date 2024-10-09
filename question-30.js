// Write a JS program to find the no of digits in a number .
// Example : if number= 287152, count=6

let number = 2456789
let count =0;
let copy = number;

while (copy>0) {
    let r = count++;
    copy = Math.floor(copy/10);
   
}

console.log(count);



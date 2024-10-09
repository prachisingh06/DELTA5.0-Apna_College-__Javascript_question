// Write a JavaScript function that returns array elements larger than a number.

let arr =[8,9,10,1,2,3,4,6,];
let num = 5;

//element larger than a number num

function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>num){
            console.log(arr[i]);
            
        }
        
    }
    
}

console.log(getElement(arr, num));

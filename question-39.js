// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output .
// Example: country= ["Australia","Germany","UnitedStatesofAmerica"]  
// output:"United States of America"

let country = ["India", "Australia","United stated","Germany"]

function longestNmae(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen>ansLen) {
            ansIdx = i;
            
        }
    }
    return country[ansIdx];
}

console.log(longestNmae(country));

/* Write a function that returns the number of vowels used in a string. */

//simple iterate solution
function vowels(str){
    let vowels = 'aeiou';
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count+=1;
        }
    }
    return count;
}

function vowels2(str){
    const matches = str.match(/[aeiou]/gi); //g stands for global, i stands for insensitive

    return matches ? matches.length : 0
}

let str1 = "Hello There";
let str2 = "you are good";

console.log(vowels(str1));
console.log(vowels(str2));
console.log(vowels2(str1));
console.log(vowels2(str2));

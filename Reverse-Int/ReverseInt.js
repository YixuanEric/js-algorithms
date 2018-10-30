/* Reverse the Integer */

//1. Built in methods
function reverseInt(num){
     const reversed = num
        .toString()
        .split('')
        .reverse('')
        .join('')
    
    return parseInt(reversed) * Math.sign(num);
}

//2.Math solution
function reverseInt2(num){
    
    let reversedNum = 0;
    while(num !== 0 ){
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.trunc(num / 10);       
        //IN ES6, use Math.trunc instead of Math.floor to solve negative division problem
    }
    return reversedNum;
}

let n1 = 12;
let n2 = 5;
let n3 = -10;
let n4 = 109;
let n5 = -91;

console.log(reverseInt(n1));
console.log(reverseInt(n2));
console.log(reverseInt(n3));
console.log(reverseInt(n4));
console.log(reverseInt(n5));

console.log(reverseInt2(n1));
console.log(reverseInt2(n2));
console.log(reverseInt2(n3));
console.log(reverseInt2(n4));
console.log(reverseInt2(n5));
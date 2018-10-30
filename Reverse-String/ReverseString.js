/* Reverse the string */

//1. Built in reverse
function reverse(str){
    const arr = str.split('');
    arr.reverse();
    return arr.join("");
}

//2. For loop reverse
function reverse2(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

//3. reduce function
function reverse3(str){
    return str.split('').reduce((reversed, char)=>{
        return char + reversed;
    },'');
}

let str1 = "apple";
console.log(reverse(str1));
console.log(reverse2(str1));
console.log(reverse3(str1));
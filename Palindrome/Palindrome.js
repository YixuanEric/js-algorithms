/* Return whether the given string is a palindrome or not*/

function palindrome(str){
    const reversed = str.split('').reverse().join('');
    return reversed === str
}

function palindrome2(str){
    return str.split('').every((char,i)=>{
        return char === str[str.length - 1 - i];
    })
}


let str1 = "aba";
let str2 = "";
let str3 = "acd";

console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));

console.log(palindrome2(str1));
console.log(palindrome2(str2));
console.log(palindrome2(str3));
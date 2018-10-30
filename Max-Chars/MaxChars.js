/* Return the character that appears the most in the given string */

function maxChar(str){
    const map = {};
    str = str.replace(/\s/g, ""); //regular expression
    for(let char of str){
        if(!map[char]){
            map[char] = 1;
        }else{
            map[char]+=1;
        }
    }
    tempMax = 0;
    tempkey = ""
    for(let key in map){
        if(map[key] > tempMax){
            tempMax = map[key];
            tempkey = key;
        }
    }
    return tempkey;
}
let str1 = "Hello There";
let str2 = "111112";
let str3 = "you";

console.log(maxChar(str1));
console.log(maxChar(str2));
console.log(maxChar(str3));


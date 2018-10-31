/* Wirte a funtion that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string*/

function capitalize(str){
    const arr = str.split(' ');
    for(let index in arr){
        console.log(arr[index]);
        arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
    }
    return arr.join(' ');
}

function capitalize2(str){
    let result = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++){
        if(str[i - 1] === ' '){
            result += str[i].toUpperCase();
        }else{
            result += str[i];
        }
    }
    return result;
}

let str1 = "a little fox";
let str2 = "hello there";


console.log(capitalize(str1));
console.log(capitalize(str2));
console.log(capitalize2(str1));
console.log(capitalize2(str2));
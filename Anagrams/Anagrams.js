/* Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.       
Examples: anagrams('rail safety','fairy tales') -> True
*/

//use map
function anagram(stringA,stringB){
    const mapA = {};
    const mapB = {};
    const strA = stringA.replace(/[^\w]/g,'').toLowerCase()
    const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
    
    for(let char of strA){
        if(!mapA[char]){
            mapA[char] = 1;
        }else{
            mapA[char] += 1;
        }
    }
    for(let char of strB){
        if(!mapB[char]){
            mapB[char] = 1;
        }else{
            mapB[char] += 1;
        }
    }

    for(let key in mapA){
        //console.log(key);
        if(!mapB[key] === mapA[key]){
            return false;
        }
    }
    return true;
    
}

//built in array sort and utilize ===
function anagram2(stringA,stringB){
    const strA = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    const strB = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    return strA === strB;
}

let str1 = "fairy tales";
let str2 = "rail safety";

console.log(anagram(str1,str2));
console.log(anagram2(str1,str2));
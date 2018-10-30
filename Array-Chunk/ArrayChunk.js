/*  Split an array into multiple arrays that have the  same given size and include them in one big array 

Example: chunk([1,2,3,4],2) -> [[1,2],[3,4]]
*/

function chunk(array,size){
   const chunked = [];

   for (let element of array){
       const last = chunked[chunked.length - 1];

       if(!last || last.length === size){
           chunked.push([element]);
       }else{
           last.push(element);
       }
   }
    return chunked;
}

function chunk2(array,size){
    const chunked = [];
    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index,index + size));
        index += size;
    }
    return chunked;
}

let arr1 = [1,2,3,4];
let arr2 = [1,3,4,5,6,7,6];
let arr3 = [1,2];

console.log(chunk(arr1,2));
console.log(chunk(arr2,3));
console.log(chunk(arr3,3));

console.log(chunk2(arr1,2));
console.log(chunk2(arr2,3));
console.log(chunk2(arr3,3));
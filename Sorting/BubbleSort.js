/* Implement BubbleSort. O(n^2)*/

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i - 1); j++ ){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// let arr = [-30,1,5,2,6,8,0,-25,79];

// console.log(bubbleSort(arr));
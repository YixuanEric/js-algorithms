/* Implement SelectionSort. O(n^2) */

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }

        if(indexOfMin !== i){
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

// let arr = [-30,1,5,2,6,8,0,-25,79];

// console.log(selectionSort(arr));
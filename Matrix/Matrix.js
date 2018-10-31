/* Write a function that accepts an integer N and returns a N*N spiral matrix. 

Example: matrix(2) -> [ [1,2],
                        [4.3] ]
         matrix(3) -> [ [1,2,3],
                        [8,9,4],
                        [7,6,5] ]

*/

function matrix(n){
    const results = [];
    
    for(let i = 0; i < n; i++){
        results.push([]);
    }
    //let's use n = 3 as an example
    //after this step: [[],[],[]]

    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while(startCol <= endCol && startRow <= endRow){
        //Top row
        for(let i = startCol; i <= endCol; i++){
            results[startRow][i] = counter;
            counter++;
        }
        //[[1,2,3],[],[]]
        startRow++;

        for(let i = startRow; i <= endRow; i++){
            results[i][endCol] = counter;
            counter++;
        }//[[1,2,3],
        //      [4],
        //      [5]]
        endCol--;

        for(let i = endCol; i>= startCol; i--){
            results[endRow][i] = counter;
            counter++;
        }
        //[[1,2,3],
        //     [4],
        // [7,6,5]]
        endRow--;

        for(let i = endRow; i >= startRow; i--){
            results[i][startCol] = counter;
            counter++;
        }
        //[[1,2,3],
        // [8， 4],
        // [7,6,5]]
        startCol++;
    }
    return results;
}

console.log(matrix(3));
console.log(matrix(4));
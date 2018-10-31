/* Wirte a function that accepts a positive number N. The function should log a pyramid shape with N levels using the # character. 
Example: steps(4) ->    #
                       ###
                      #####
                     #######
*/

//for loop solution
function pyramid(n){
    let maxStair = 2 * n - 1;
    let midpoint = Math.floor(maxStair/2)
    for(let row = 0; row < n; row++){
        let stair = "";
        
        for(let col = 0; col < maxStair; col++){
            if(col >= midpoint - row && col <= midpoint + row){
                stair += "#";
            }else{
                stair += " ";
            }
        }
        console.log(stair);
    }
}

//recursive solution
function pyramid2(n, row = 0, level = ''){
    if(row === n){
        return;
    }
    if(level.length === 2 * n - 1){
        console.log(level);
        return pyramid(n,row + 1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if(level.length >= midpoint - row && level.length <= midpoint + row){
        add = '#';
    }else{
        add = ' ';
    }

    pyramid(n,row,level + add);
}

pyramid(4);
pyramid2(4);
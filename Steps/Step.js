/* Wirte a function that accepts a positive number N. The function should log a step shape with N levels using the # character. Make sure the steps has spaces on the right hand side
Example: steps(4) -> #
                     ##
                     ###
                     ####
*/

//for loop solution
function steps(n){
    for(let row = 0; row < n; row++){
        let stair = "";
        for(let col = 0; col < n; col++){
            if(col <= row){
                stair += '#';
            }else{
                stair += " ";
            }
        }

        console.log(stair);}
}

//recursive solution
function steps2(n, row = 0, stair = ''){
    if(n===row){//if n is 0 then just return 
        return;
    }
    if(n===stair.length){// if the current row is finished then log it
        console.log(stair);
        return steps(n,row + 1);
    }
    if(stair.length < row){// current row not finish. Finish it by checking current row length and which row it is
        stair += '#';
    }else{
        stair += " ";
    }
    steps(n, row, stair);
}

steps(4);
steps2(4);
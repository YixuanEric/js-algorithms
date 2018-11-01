/* {Print out the n-th fib number} */

//recursive solution O(2^n)
function fib(n){
    if(n === 0 ){
        return 0;
    }else if (n === 1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }
}

//iterate solution O(n)
function fib2(n){
    const result = [0,1];
    
    for(let i = 2; i <= n; i++){
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }
    return result[n];
}

function memoize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }else{
            cache[args] = fn.apply(this,args);
            return cache[args];
        }
        
    }
}
//fib with memoization
const fastFib = memoize(fib);


console.log(fastFib(4));
console.log(fastFib(5));
console.log(fastFib(6));
console.log(fastFib(7));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib2(4));
console.log(fib2(5));
console.log(fib2(6));
console.log(fib2(7));
/* Write a program that prints the numbers from 1 t0 100. Print "Fizz" for multiples of three and print "Buzz" for multiple of five. */


function fizzBuzz(){
    for(i=0; i<=100; i++){
        if(i%3 === 0 && i%5 === 0){//Don't forget multiples of 3 and 5
            console.log("FizzBuzz")
        }
        else if (i%3 === 0){
            console.log("Fizz")
        }else if(i%5 === 0){
            console.log("Buzz")
        }else{
            console.log(i);
        }
    }
}

fizzBuzz();
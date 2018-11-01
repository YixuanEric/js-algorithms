/* 1. Implement a 'peek' method to the queue class. Peek should return the last element from the queue without removing it
   2. Implement the 'weave' function. Weave receives two queues as arguments and combines the contents of each into a new, third queue. The new queue should contain the 'alterating' content of the two queues. The function should handle queues of different lengths without inserting 'undefined' into the new one.

   Do not access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.
*/

class Queue{
    constructor(){
        this.data = [];
    }

    add(record){
        this.data.unshift(record)
    }

    remove(){
        return this.data.pop();
    }

    peek(){
        let n = this.data.length;
        return this.data[n - 1];
    }
}

function weave(q1,q2){
    let result = new Queue();
    while(q1.peek() || q2.peek()){
        if(q1.peek()){
            result.add(q1.remove());
        }
        if(q2.peek()){
            result.add(q2.remove());
        }
    }

    return result;
}

let q1 = new Queue()
q1.add(1);
q1.add(3);
q1.add(5);

let q2 = new Queue();
q2.add(2);
q2.add(4);

console.log(weave(q1,q2));
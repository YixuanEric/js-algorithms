/* Implement a Queue data using two stacks. Do not create an array inside of the 'Queue' class.*/

const Stack = require ('../Stacks/Stack')

class Queue{
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record);
    }

    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }
        
        const record = this.second.pop();
        
        while(this.second.peek()){
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();
        
        while(this.second.peek()){
            this.first.push(this.second.pop());
        }

        return record;
    }
}

let q1 = new Queue();
q1.add(1);
q1.add(3);
q1.add(5);

console.log(q1);
q1.remove();
console.log(q1);

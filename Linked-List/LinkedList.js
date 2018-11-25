/* Implement LinkedList with the Node Class
    A new LinkedList has no head node.
*/

const Node = require('./Node.js')

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data,this.head);
        this.head = node;
    }

    size(){
        let curNode = this.head;
        let count = 0;
        while(curNode){
            count++;
            curNode = curNode.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }
    
    getLast(){
        if(!this.head){
            return null;
        }
        let curNode = this.head;
        while(curNode.next){
            curNode = curNode.next;
        }
        return curNode;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        let curNode = this.head.next;
        let prevNode = this.head;
        while(curNode.next){
            prevNode = curNode;
            curNode = curNode.next;
        }
        prevNode.next = null;
    }

    insertLast(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
        }else{
            const lastNode = this.getLast();
            lastNode.next = node;
        }
    }

    getAt(int){
        let count = 0;
        let curNode = this.head;
        while(curNode){
            if(count === int){
                return curNode;
            }else{
                curNode = curNode.next;
                count++;
            }
        }
        return null;
    }

    removeAt(int){//!many edge cases!
        if(!this.head){//list is empty
            return;
        }
        if(int === 0){//need to remove the first node
            this.head = this.head.next;
            return;
        }
        const prevNode = this.getAt(int - 1);
        if(!previous ||!previous.next){//previous node does not exist
            return;
        }
        prevNode.next = prevNode.next.next;//prevNode.next.next will be undefined when the getAt method return the last node of the LinkedList;
    }

    insertAt(data,int){//if index out of bounds then insert the node at the end of the list
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index === 0){
            this.head = new Node(data,this.head);
            return;
        }

        const prevNode = this.getAt(int - 1) || this.getLast();//if getAt return an falsey value then get the last node;
        const newNode = new Node(data,prevNode.next);
        prevNode.next = newNode;
    }

    forEach(func){//calls the provided function with every node of the chain and the index of the node
        let curNode = this.head;
        let index = 0;
        while(curNode){
            curNode.data = func(curNode, index);
            curNode = curNode.next;
            index++;
        }
    }

    *[Symbol.iterator](){//with iterator, we can use 'for of' loop
        let node = this.head;
        while(node){
            yield node;//go check ES6 generator
            node = node.next;
        }
    }
}

//initialization example
//const list = new LinkedList();
//list.head = new Node(10);
// const list = new LinkedList();
// const nodeOne = new Node(5);
// list.head = nodeOne;
// console.log(list);
// list.insertFirst(15);
// console.log(list);
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
// const list1 = new LinkedList();
// console.log(list1.getLast());
// // list.removeFirst();
// // console.log(list);

// list1.insertFirst(2);
// list1.insertFirst(4);
// list1.insertFirst(6);
// console.log(list1.head.data)
// console.log(list1);
// list1.forEach((node,index)=> node.data + 10)
// console.log(list1);
// list1.removeLast();
// console.log(list1);
// list1.insertFirst(6);
// console.log(list1.getAt(2));
// console.log(list1.getAt(5));
module.exports = LinkedList;


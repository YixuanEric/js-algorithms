/* Implement Node class 
    Node takes a 'data' argument and an optional argument 'next'*/

class Node {
    constructor(data, next = null){
        //the type of next is another node. default is null
        this.data = data;
        this.next = next;
    }
}

module.exports =  Node;

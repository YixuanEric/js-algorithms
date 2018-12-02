const Node = require('./Node.js')

class Tree{
    constructor(){
        this.root = null;
    }

    traverseBF(fn){ //take a function and apply it to each node in the tree with a breadth first approach
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();//take out the first element of the array
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        const arr =[this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);//unshift add element to the front of the array
            fn(node);
        }
    }
}


module.exports = Tree

// const n = new Node("a");
// const n1 = new Node('d');
// n1.add('e');
// console.log(n1);
// n.add(n1);
// console.log(n);

// n.add('b');
// n.add('c');



// const tr = new Tree();
// tr.root = n;
// console.log(tr);
// tr.traverseBF((node)=>console.log(node.data));
// tr.traverseDF((node)=>console.log(node.data));

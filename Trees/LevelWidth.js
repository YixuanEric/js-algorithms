const Node = require('./Node.js');

/* Return an array of level widths of a tree. Given the root node of a tree.*/

function levelWidth(root){
    const arr = [root, 's'];
    const counters = [0];
    while(arr.length > 1){
        const node = arr.shift();

        if(node === 's'){
            counters.push(0);
            arr.push('s');
        }else{
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    return counters;
}

// const n = new Node("a");
// n.add('b');
// n.add('c');
// n.children[0].add('e');

// console.log(levelWidth(n));



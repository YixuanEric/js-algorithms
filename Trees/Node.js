class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data){
        this.children = this.children.filter(child =>{
            return node.data !== data;
        })
    }
}

module.exports = Node;
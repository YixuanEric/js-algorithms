/* Return the middle node of the LinkedList without knowing the size.
If even number of nodes, then return the last node of the first half.

!Not allowed to get the size of the LinkedList!
*/

const LinkedList = require('./LinkedList.js');

function midpoint(list){
    if(!this.head){
        return null;
    }
    let slow = list.head;
    let fast = list.head;
    while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
    }
    return slow;
}

const list = new LinkedList();
list.insertFirst(6);
list.insertFirst(5);
list.insertFirst(4);
list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(1);

console.log(list);
console.log(midpoint(list));

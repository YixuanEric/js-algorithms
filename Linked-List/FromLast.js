/* Given a linked list and integer n, return the element n spaces from the last node in the list. Do not get the size of the list!*/

const LinkedList = require('./LinkedList.js');

function fromLast(list,int){
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(n > 0){
        fast = fast.next;
        n--;
    }
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}
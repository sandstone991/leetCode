/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
   if(head===null)return head
   let returned = findLength(head);
   let length = returned[0];
   k = k%(length+1);
   if(k===0)return head;
   let oldTail = returned[1];
   let tail = newTail(head,length-k);
   let newHead = tail.next;
   tail.next = null;
   oldTail.next = head;
   return newHead;
   
    
};
function findLength(head){
    let len=0;
    while(head.next){
        head = head.next
        len++;
    }
    return [len, head];
}
function newTail(head,n){
    while(n--){
        head=head.next
    }
    return head
}

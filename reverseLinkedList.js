/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return head
    }
    let prev = null
    let cur=head?head:null;
    let next=cur?head.next:null;
    let temp;
    while(true){
        cur.next=prev
        prev = cur;
        cur = next;
        if(next){
            next = next.next;
          continue;
        }
      break;
};

return prev;
}

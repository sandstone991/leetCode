/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {
    if(head===null)return head;
    let prev=head;
    let cur =head.next;
    while(cur!==null){
        if(cur.val===val){
            prev.next = cur.next;
        }else{
            prev = cur;
        }
        cur = cur.next;
    }
    return head.val===val?head.next:head
}

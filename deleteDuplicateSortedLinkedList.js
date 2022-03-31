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
var deleteDuplicates = function(head) {
    if(!head)return head
    let prev=head;
    let cur=head.next;
    while(cur!==null){
        if(cur.val===prev.val){
            prev.next = cur.next
        }
        else{
            prev = cur
        }
        cur=cur.next
    }
    return head
};

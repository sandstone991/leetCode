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
var middleNode = function(head) {
    let slow=head;
    let fast=head;
    while(true){
        if(fast!==null){
            fast = fast.next
            if(fast!==null){
                fast=fast.next
            }else{
                break;
            }
        }else{
            break;
        }
                slow= slow.next
    }
    return slow
};

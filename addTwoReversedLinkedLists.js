/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry=0;
    let l3 = {
        val:0
        ,
        next:null
    }
   let head = l3
    while(true){
        let v1=0,v2=0;
        if(l1){
            v1=l1.val;
            l1=l1.next
        }
        if(l2){
            v2=l2.val
            l2=l2.next
        }
        let sum = v1 + v2+carry
        carry = sum>=10?1:0;
        let cur = carry?sum-10:sum;
        l3.val = cur
        if(!(l1||l2)){
            if(carry!=0){
                l3.next = {
            val:carry,
            next:null
        }
            }
            break;
        }
        l3.next = {
            val:carry,
            next:null
        }
        l3 = l3.next
    }
return head
};

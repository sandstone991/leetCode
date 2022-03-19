/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while(true){
       
        if(head){
             arr.push(head.val);
            head= head.next
        }else{
            break;
        }
    }
    for(let i =0;i<Math.ceil(arr.length/2);i++){
        if(arr[i]!=arr[arr.length-i-1]){
            return false
        }
    }
    return true;
};

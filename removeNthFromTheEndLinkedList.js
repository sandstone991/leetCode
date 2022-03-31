/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head===null)return
    let p1=head;
    let p2=head;
    for(let i=0;i<n;i++){
        p2=p2.next
    }
    let prev=p1;
    while(p2!==null){ prev = p1
        p1=p1.next
        p2=p2.next
       
    }
    console.log(p1,prev)
    if(p1===prev){
        return head.next
    }
    else{
        prev.next = p1.next
    }
    return head
};
//Poorly implemented

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if(lists.length===0||!lists)return null
  while(lists.length>1){
      let merged = []
      for(let i=0;i<lists.length;i+=2){
          merged.push(mergeTwoLists(lists[i],lists[i+1]));
      }
      lists = merged
      
  }
  return lists[0];
};
var mergeTwoLists = function(list1, list2) {
    let nullHead= {next:null};
    cur = nullHead;
    let val=0;
    while(list1&&list2){
        if(list1.val<list2.val){
            val = list1.val;
            list1=list1.next;
        }else{val = list2.val;
             list2=list2.next;
             }
        cur.next = new ListNode(val);
        cur = cur.next;
        
        
    }
    cur.next=list1?list1:list2;
    return nullHead.next
};
function mustBreak(pointers) {
  for (let i = 0; i < pointers.length; i++) {
    if (pointers[i]) return false;
  }
  return true;
}

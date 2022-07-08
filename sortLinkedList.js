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
var sortList = function (head) {
  return (function sort(head) {
    if (!head||!head.next) return head;
    let mid = divideList(head);
    let left = sort(head);
    let right = sort(mid);
    return merge(left, right);
  })(head);
  function merge(list1, list2) {
    let nullHead = { next: null };
    cur = nullHead;
    let val = 0;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        val = list1.val;
        list1 = list1.next;
      } else {
        val = list2.val;
        list2 = list2.next;
      }
      cur.next = new ListNode(val);
      cur = cur.next;
    }
    cur.next = list1 ? list1 : list2;
    return nullHead.next;
  }

  function divideList(head) {
    let slowPrev = null;
    let slow = head;
    let fast = head;
    while (true) {
      if (fast !== null) {
        fast = fast.next;
        if (fast !== null) {
          fast = fast.next;
        } else {
          break;
        }
      } else {
        break;
      }
      slowPrev = slow;
      slow = slow.next;
    }
    slowPrev.next = null;
    return slow;
  }
};

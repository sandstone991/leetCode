/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fast = head
  let slow = head
  while (true) {
    if (fast && slow) {
      slow = slow.next
      fast = fast.next
      if (fast) {
        fast = fast.next
      } else {
        return false;
      }
    } else {
      return false;
    }

    if (fast === slow) {
      return true
    }

  }
};

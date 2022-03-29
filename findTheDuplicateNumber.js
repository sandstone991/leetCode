/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let p1 = nums[0];
    let p2=getCycle(nums);
    while(true){
        if(p1===p2){
            return p1
        }
        p1=nums[p1];
        p2=nums[p2]
    }
};
var getCycle = function(head) {
  let fast = head[0]
  let slow = head[0]
  while (true) {
      slow = head[slow]
      fast = head[head[fast]]
    if (fast === slow) {
      return fast
    }
  }
};
//This is called floyd's algoritihm and its not intuitive at all
//Long story short array will act like a linked list
//You find the cycle but it doesn't end there
//You must also find apply floyds algorithm which just works

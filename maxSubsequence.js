/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let pq = new MaxPriorityQueue();
    for(let i=0;i<nums.length;i++){
        pq.enqueue(i,nums[i])
    }
    let res = [];
    for(let i=0;i<k;i++){
        res.push(pq.dequeue())
    }
    res.sort((a,b)=>a.element-b.element);
    return res.map((e)=>e.priority);
};

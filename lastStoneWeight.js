/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();
    for(let stone of stones){
        pq.enqueue(stone)
    }
    while(pq.size()>1){
        let stoneY = pq.dequeue().priority;
        let stoneX = pq.dequeue().priority;
        if(stoneY===stoneX)continue;
        pq.enqueue(stoneY-stoneX);
    }
    return pq.dequeue()?.priority||0
};

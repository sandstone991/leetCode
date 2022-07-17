/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let pq = new MaxPriorityQueue();
  for (let i = 0; i < score.length; i++) {
    pq.enqueue(i, score[i]);
  }
  for (let i = 0; i < score.length; i++) {
    const item = pq.dequeue();
    let rank;
    switch (i) {
      case 0:
        rank = 'Gold Medal';
        break;
      case 1:
        rank= "Silver Medal";
        break;
      case 2:
        rank="Bronze Medal";
        break;
      default:
        rank = (i+1).toString();
    }
      score[item.element]=rank
  }
  return score;
};

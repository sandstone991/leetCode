/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let max = 0;
  let len = k + 1;
  for (let i = 1; i < cardPoints.length; i++) {
    cardPoints[i] += cardPoints[i - 1];
  }
  if(k===cardPoints.length)return cardPoints[cardPoints.length-1]
  let p1 = cardPoints.length - k - 1;
  while (len--) {
    let p2 = p1 + k,
      sum = 0;
    if (p2 > cardPoints.length - 1) {
      p2 -= cardPoints.length;
    }
    if (p2 < p1) {
      sum = cardPoints[p2] + cardPoints[cardPoints.length - 1] - cardPoints[p1];
    } else {
      sum = cardPoints[p2] - cardPoints[p1];
    }
    max = Math.max(max, sum);
    p1++;
    if (p1 > cardPoints.length - 1) p1 = 0;
  }
  return max;
};
//medium sliding window prefix sum

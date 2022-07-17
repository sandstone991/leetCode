/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  let even = [];
  let odd = [];
  let numStructure = [];
  let res = [];
  let temp = num;
  let i = 0;
  while (temp) {
    let digit = temp % 10;
    temp = Math.floor(temp / 10);
    if (digit % 2 == 0) {
      even.push(digit);
      numStructure.push(1);
    } else {
      odd.push(digit);
      numStructure.push(0);
    }
    i++;
  }
  let pqEven = new MaxPriorityQueue();
  let pqOdd = new MaxPriorityQueue();
  for (let i = 0; i < even.length; i++) {
    pqEven.enqueue(even[i]);
  }
  for (let i = 0; i < odd.length; i++) {
    pqOdd.enqueue(odd[i]);
  }
  for(let i=numStructure.length-1;i>-1;i--){
    if(numStructure[i])res.push(pqEven.dequeue().priority);
    else res.push(pqOdd.dequeue().priority);
  }
  return +res.join("");
};

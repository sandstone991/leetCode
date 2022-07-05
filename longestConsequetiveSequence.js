/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if(nums.length===0)return 0
  //***
  class UnionFind {
    id;
    components;
    constructor(N) {
      this.id = [];
      this.components = N;
      for (let i = 0; i < N; i++) {
        //Every node points to itself at the beginning
        this.id.push(i);
      }
    }
    count() {
      return this.components;
    }
    connected(p, q) {
      return this.find(p) == this.find(q);
    }
  }

  class WeightedQuickUnion extends UnionFind {
    size;
    constructor(N) {
      super(N);
      this.size = Array(N).fill(1);
    }
    find(p) {
      while (this.id[p] !== p) {
        //The root is the node that points to itself
        p = this.id[p];
      }
      return p;
    }
    union(p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if (rootP === rootQ) return;
      if (this.size[rootP] > this.size[rootQ]) {
        this.id[rootQ] = rootP;
        this.size[rootP] += this.size[rootQ];
      } else {
        this.id[rootP] = rootQ;
        this.size[rootQ] += this.size[rootP];
      }
      this.components--;
    }
    max() {
      return Math.max(...this.size);
    }
  }
  //***
  let hash = {};
  let un = new WeightedQuickUnion(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] || hash[nums[i]] === 0) continue;
    hash[nums[i]] = i;
    let next = hash[nums[i] - 1];
    let prev = hash[nums[i] + 1];
    if (next || next === 0) un.union(hash[nums[i]], next);
    if (prev || prev === 0) un.union(hash[nums[i]], prev);
  }
  return un.max();
};

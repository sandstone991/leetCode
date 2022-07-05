/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
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
  }
  let l = grid.length;
  let c = grid[0].length;
  let len = l * grid[0].length;
  let un = new WeightedQuickUnion(len);
  un.components = grid.reduce(
    (r, x) => +r + +x.reduce((s, y) => +s + +y, 0),
    0
  );
  for (let row = 0; row < l; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let elem = grid[row][col];
      if (elem === "0") continue;
      if (grid[row][col + 1] === "1")
        un.union(row * c + col, row * c + col + 1);
      if (grid[row + 1] && grid[row + 1][col] === "1")
        un.union((row + 1) * c + col, row * c + col);
    }
  }
  return un.count();
};

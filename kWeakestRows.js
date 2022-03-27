/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let reduced = mat.map((arr,index)=>{
        let sum = arr.reduce((cur,prev)=>cur+prev,0);
        return [sum,index];
    });
    reduced.sort((a,b)=>{
        if(a[0]>b[0]){
            return 1
        }
        else if(a[0]<b[0]){
            return -1
        }
        return 1
    });
    let ans = [];
    for(let i=0;i<k;i++){
        ans.push(reduced[i][1])
    }
    return ans
};
//you can use map and slice at the end it'll look a little bit cooler

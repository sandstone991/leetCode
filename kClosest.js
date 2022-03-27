/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {

      points.sort((a,b)=>{
        let aF = Math.sqrt(a[0]**2+a[1]**2);
        let bF = Math.sqrt(b[0]**2+b[1]**2);
        return aF-bF;
    })
  
  return points.slice(0,k)
  
}
//this is somehow medium difficulty 

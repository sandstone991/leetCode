/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0; 
    let right = n;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let count = Math.floor((mid*(mid+1))/2)
        if(count === n)//can the current n afford those rows
            return mid; 
        if (count < n)
            left = mid + 1;
         else
            right = mid - 1; 
    }
    //if it can't just return the closest number which is smaller
    return right;
};

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    //A standard binary search problem
    let left = 0
    let right = n
    //[left,right] is our search interval => [mid,left], [left,mid]
    while(left<=right){//if left=right+1 break
        let mid = Math.floor(left+(right-left)/2);
        if(!guess(mid)){
            return mid
        }
        else if(guess(mid)===1){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
        
    }
};

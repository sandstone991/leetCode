/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    let r = people.length-1;
    let l = 0;
    let ans=0;
    while(l<=r){
        if(people[l]+people[r]>limit){
            r--;
        }else{
            l++;
            r--;
        }
        ans++;
    }
    return ans;
};
/* [3,5,3,4], limit = 5
*  [3,3,4,5]
*  [3,3,4,5]
*   ^     ^
*   |     | 
*   L     R 
*
*  [3,3,4,5]
*   ^   ^
*   |   |
*   L   R
*
*  [3,3,4,5]
*   ^   ^
*   |   | 
*   L   R  
*
*  [3,3,4,5]
*   ^ ^
*   | | 
*   L R  
*
*  [3,3,4,5]
*   ^     
*   |     
*   L
*   R
*
*  [3,3,4,5]
* ^ ^     
* | |     
* R L       
*/

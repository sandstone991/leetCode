/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let smallerSet;
  let biggerSet;
  if(set1.size<set2.size){
      smallerSet=set1;
      biggerSet=set2;
  }else{
      smallerSet=set2;
      biggerSet=set1;
  }
 return  [...smallerSet].filter(x => biggerSet.has(x))
   //probably just normally iterating would be better because this is kinda slow
   //something like
   /*
       for(let n of smallerSet){
        if(biggerSet.has(n)){
            ans.push(n);
        }
    }
    return ans;*/
};

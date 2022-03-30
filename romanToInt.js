/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let hash= {
        I:1,
        V:5,
        X:10,
        IV:4,
        IX:9,
        L:50,
        XL:40,
        XC:90,
        CD:400,
        CM:900,
        C:100,
        D:500,
        M:1000,
    }
    let ans=0;
    for(let i=0;i<s.length;i++){
        let numeralSpecial = s[i+1]?s[i]+s[i+1]:s[i];
        if(hash[numeralSpecial]){
            ans+=hash[numeralSpecial]
               i++;
        }
        else{
            ans+=hash[s[i]];
        }
    }
    return ans
};

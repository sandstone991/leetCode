
var FreqStack = function() {
  this.stack={};
    this.freq={};
    this.highestFreq=1;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    //if this hashed address doesn't exist create with a value of 1
    if(!this.freq[val]){this.freq[val]=1;}
    else{
        //if it does just increment the value by 1
        this.freq[val]++;
        //check if it has a higher frequency
        if(this.freq[val]>this.highestFreq){
            this.highestFreq=this.freq[val]
        }
    }
    let freq = this.freq[val];
    
    if(this.stack[freq]===undefined){this.stack[freq]=[]}
    this.stack[freq].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let popped = this.stack[this.highestFreq].pop();
     this.freq[popped]--;
        if(this.stack[this.highestFreq].length===0){
            for(let i=this.highestFreq;i>0;i--){
                if(this.stack[i]!==undefined && this.stack[i].length!==0){
                    this.highestFreq=i;
                    break;
                }
            }
        }
    return popped;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

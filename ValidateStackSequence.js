/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = new Stack(pushed[0]);
    let pushedP=1;
    let poppedP=0;
    for(let i =1;i<pushed.length*2;i++){
        if(stack.peek()===popped[poppedP]){
            stack.pop()
            poppedP++;
        }
      else{
          if(pushedP===pushed.length){
              return false
          }
          else{
              stack.push(pushed[pushedP]);
              pushedP++;
          }
      }}
    return true
};
    class Stack{
   constructor(...items) 
    { 
        this.items = [...items]; 
    } 
   
    push(element) 
   { 
    this.items.push(element); 
    }
  
    pop() 
    { 
    if (this.items.length == 0) 
        return;
    return this.items.pop(); 
    } 
  
    peek() 
	{ 
    	return this.items[this.items.length - 1]; 
	} 
    isEmpty(){
        if(this.items.length===0){
            return true;
        }
        return false;
    }
    length(){
        return this.items.length;
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
if(s.length%2!==0){
    return false;
}
if(s[0]===")"||s[0]==="}"||s[0]===']'){
    return false;
}
    let myStack = new Stack()
    for(let c of s){
        if(c==='{'||c==='('||c==='['){
            myStack.push(c)
        }
        else if(!myStack.isEmpty()){
            if(c==='}'&&myStack.peek()==='{'){
                myStack.pop()
                continue;
            }
            else if(c===')'&&myStack.peek()==='('){
                myStack.pop()
                continue;
            }
             else if(c===']'&&myStack.peek()==='['){
                myStack.pop()
                 continue;
            }
            
        }else{
                myStack.push(c)
            }
    }
  return myStack.isEmpty()
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

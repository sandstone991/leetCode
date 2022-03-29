/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//Preorder (more intuitive to me)
var maxDepth = function(root) {
    let ans = 0;
    (function traverse(root, depth=1){
        if(!root)return
        ans = Math.max(depth, ans)
        traverse(root.left,depth+1);
        traverse(root.right,depth+1);
    })(root)
    return ans
};
//Post order 
var maxDepth = function(root) {
    return (function traverse(root){
        if(!root)return 0;
        return(Math.max(traverse(root.left), traverse(root.right)) + 1)
    })(root)
};

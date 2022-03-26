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
 * @return {number[]}
 */
//Recursive
var preorderTraversal = function(root) {
    let ans = [];
    (function traverse(root){
        if(!root)return
        ans.push(root.val);
        traverse(root.left);
        traverse(root.right);
    })(root)
    return ans
    
};

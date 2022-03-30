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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
  return  traverse(root, targetSum)
};
function traverse(root, target){
    if(!root)return false
    if(!root.left&&!root.right){
        if(target-root.val===0){
            return true
        }
       return false
    }
return traverse(root.left, target-root.val) || traverse(root.right, target-root.val)
}

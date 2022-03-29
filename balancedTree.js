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
 * @return {boolean}
 */
var isBalanced = function(root) {
return calcDepth(root)
};
function calcDepth(root){
    if(!root)return 1
    let left = calcDepth(root.left);
    let right = calcDepth(root.right);
    if(left===false ||right === false){
        return false
    }
    if(Math.abs(left-right)>1){
        return false
    }
    return Math.max(calcDepth(root.left), calcDepth(root.right)) +1
}

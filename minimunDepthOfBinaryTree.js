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
var minDepth = function(root) {
    if(!root)return 0
    let min = Number.MAX_SAFE_INTEGER
    let traverse = (root,depth=1)=>{
        if(!root)return
        if(root.left===null&&root.right===null){
            min = Math.min(min, depth)
            return
        }
        traverse(root.left,depth+1);
        traverse(root.right,depth+1);
    }
    traverse(root)
    return min
};

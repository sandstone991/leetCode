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
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
        let ans = [];
    (function traverse(root){
        if(!root)return
        traverse(root.left,root);
        ans.push(root.val)
        traverse(root.right,root);
    })(root)
    return ans
};
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
            let ans = [];
    (function traverse(root){
        if(!root)return
        traverse(root.left,root);
        traverse(root.right,root);
        ans.push(root.val)
    })(root)
    return ans
};

//Framework thinking works.
//The whole idea is when you return if you want to finish all the left node first then return all the left and right nodes ... etc

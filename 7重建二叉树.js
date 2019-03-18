//重建二叉树
/*
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的谦虚遍历和中序遍历的结果中都不含重复的数字。例如输入
前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6},
则重建出如下二叉树并输出它的头节点。
        1
       / \
      2   3
     /   / \
    4   5  6
     \    /
      7  8
 */
/*
思路：前序遍历中的第一个数字就是 根节点，于是根据中序遍历的特点，就可以根据再前序遍历中找出的 根节点，进而根节点左边的是左子树，右边的是右子树。
于是我们可以用同样的方法再分别在 已经找出的左子树和右子树中继续构造左右子树。可以采用递归的方法去完成。
*/
function reConstructBinaryTree(pre, vin)
{
    function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
     if(pre.length === 0) return null;
    var root = new TreeNode(pre[0]);
    var index = vin.indexOf(pre[0]);
    root.left = reConstructBinaryTree(pre.slice(1,index + 1), vin.slice(0,index));
    root.right = reConstructBinaryTree(pre.slice(index + 1), vin.slice(index + 1));
    return root;
}
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root) -> int:
        res=[root.val]
        def dfs(root):
            if not root:
                return 0
            leftMax=dfs(root.left)
            rightMax=dfs(root.right)
            leftMax=max(0,leftMax)
            rightMax=max(0,rightMax)
            res[0]=max(res[0],leftMax+rightMax+root.val)
            return max(root.val+leftMax,root.val+rightMax)
        dfs(root)
        return res[0]

        
        
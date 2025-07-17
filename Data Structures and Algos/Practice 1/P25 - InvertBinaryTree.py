# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root):
        if root==None:
            return None
        if root.left == None and root.right==None:
            return root
        a1=self.invertTree(root.left)
        a2=self.invertTree(root.right)
        root.right=a1
        root.left=a2
        return root
        

        
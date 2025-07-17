# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p, q) -> bool:
        if p==None and q==None:
            return True
        if p==None:
            return False
        if q==None:
            return False
        if p.val!=q.val:
            return False
        l1=self.isSameTree(p.left,q.left)
        l2=self.isSameTree(p.right,q.right)

        return l1 and l2
        
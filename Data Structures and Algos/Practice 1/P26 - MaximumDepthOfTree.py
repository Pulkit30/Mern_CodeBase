class Solution:
    def maxDepth(self, root) -> int:
        if root==None:
            return 0
        l1= 1+self.maxDepth(root.left)
        l2= 1+self.maxDepth(root.right)
        return max(l1,l2)
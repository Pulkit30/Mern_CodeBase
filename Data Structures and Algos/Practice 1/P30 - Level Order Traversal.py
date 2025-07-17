# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root):
        q1=[]
        l2=[]
        if root==None:
            return l2
        q1.append(root)
        l1=[root.val]
        l2.append(l1)
        while q1:
            k=len(q1)
            l1=[]
            while k>0:
                r=q1.pop(0)
                if(r.left):
                    q1.append(r.left)
                    l1.append(r.left.val)
                if(r.right):
                    q1.append(r.right)
                    l1.append(r.right.val)
                k-=1
            if(len(l1)>0):
                l2.append(l1)
            
        return l2
                




        
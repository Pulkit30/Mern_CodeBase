# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:
    def serialize(self, root):
        self.res = []
        def dfs(root):
            if root==None:
                tokens.append('N')
                return
            tokens.append(str(root.val))
            dfs(root.left)
            dfs(root.right)
        tokens=[]
        dfs(root)
        return ','.join(tokens)

    def deserialize(self, data):
        vals=data.split(',')
        self.i=0
        print(vals)
        def dfs():
            if vals[self.i]=='N':
                return None
            root=TreeNode(int(vals[self.i]))
            self.i+=1
            root.left=dfs()
            self.i+=1
            root.right=dfs()
            return root
        return dfs()

             
        print(data)
        return None
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
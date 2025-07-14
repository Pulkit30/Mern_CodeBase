class Solution:
    def encode(self, strs):
        encoded=''
        for i in strs:
            l=len(i)
            s1=str(l)+'#'+i
            encoded+=s1
        return encoded
            
    def decode(self, s: str):
        res,i=[],0
        while i<len(s):
            j=i
            while s[j] != '#':
                j+=1
            length=int(s[i:j])
            res.append(s[j+1:j+1+length])
            i=j+1+length
        return res






class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s)==0:
            return 0
        l=0
        h1=set()
        h1.add(s[0])
        maxi=1
        for i in range(1,len(s)):
            while s[i] in h1:
                h1.remove(s[l])
                l+=1
            maxi=max(maxi,i-l+1)
            h1.add(s[i])
        return maxi
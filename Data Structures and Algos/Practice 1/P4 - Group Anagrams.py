from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: any):
        k1 = defaultdict(list)
        for i in strs:
            char=[0]*26
            for ch in i:
                char[ord(ch) - ord('a')] += 1
            k1[tuple(char)].append(i)    
        return list(k1.values())
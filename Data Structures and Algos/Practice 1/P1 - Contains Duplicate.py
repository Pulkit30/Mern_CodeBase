class Solution:
    def containsDuplicate(self, nums) -> bool:
        h1=set()
        for i in nums:
            if i in h1:
                return True
            h1.add(i)
        return False

s1=Solution()
print(s1.containsDuplicate([1,7,9,8]))
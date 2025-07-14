class Solution:
    def twoSum(self, nums, target: int):
        h1={}
        for i in range(0,len(nums)):
            if target-nums[i] not in h1:
                h1[nums[i]]=i
            else:
                return [i,h1[target-nums[i]]]
        return []
s1=Solution()
print(s1.twoSum([2,7,8,19],9))

        
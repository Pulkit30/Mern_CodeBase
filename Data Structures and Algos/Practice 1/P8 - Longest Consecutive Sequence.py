class Solution:
    def longestConsecutive(self, nums) -> int:
        s1=set(nums)
        maxi=0
        for i in s1:
            if i-1 not in s1:
                count=1
                number=i
                while number+1 in s1:
                    number+=1
                    count+=1
                maxi=max(count,maxi)
        return maxi
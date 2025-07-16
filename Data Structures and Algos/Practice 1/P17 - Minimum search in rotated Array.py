class Solution:
    def findMin(self, nums) -> int:
        mini=nums[0]
        l,h=0,len(nums)-1
        while l<=h:
            if nums[l]<=nums[h]:
                mini=min(nums[l],mini)
                break
            m=(l+h)//2
            mini=min(nums[m],mini)
            if nums[l]<=nums[m]:
                l=m+1
            else:
                h=m-1
        return mini
        

        
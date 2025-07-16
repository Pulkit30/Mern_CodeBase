class Solution:
    def search(self, nums, target: int) -> int:
        l,h=0,len(nums)-1
        while l<=h:
            m=(l+h)//2
            if nums[m]==target:
                return m
            elif nums[m]>=nums[l]:
                if nums[l]<=target and target<nums[m]:
                    h=m-1
                else:
                    l=m+1
            else:
                if nums[m]<target and target<=nums[h]:
                    l=m+1
                else:
                    h=m-1
        return -1




        
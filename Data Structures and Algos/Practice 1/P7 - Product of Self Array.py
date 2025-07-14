class Solution:
    def productExceptSelf(self, nums):
        leftProduct=[]
        rightProduct=[0]*len(nums)
        final=[]
        leftProduct=[1]
        for i in range(1,len(nums)):
            leftProduct.append(nums[i-1]*leftProduct[i-1])
        rightProduct[len(nums)-1]=1
        for i in range(len(nums)-2,-1,-1):
            rightProduct[i]=rightProduct[i+1]*nums[i+1]
        for i in range(0,len(nums)):
            final.append(leftProduct[i]*rightProduct[i])
        return final
        

        
class Solution:
    def maxProfit(self, prices) -> int:
        l=0
        maxi=0
        for i in range(1,len(prices)):
            if prices[i]<prices[l]:
                l=i
            else:
                size=prices[i]-prices[l]
                maxi=max(size,maxi)
        return maxi
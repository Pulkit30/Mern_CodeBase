class Solution:
    def maxArea(self, height) -> int:
        l=0
        r=len(height)-1
        maxi=0
        while l<r:
            area=(r-l)*min(height[l],height[r])
            maxi=max(area,maxi)
            if height[l]<height[r]:
                l=l+1
            else:
                r=r-1
        return maxi
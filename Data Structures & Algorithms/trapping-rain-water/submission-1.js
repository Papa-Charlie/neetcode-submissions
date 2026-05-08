class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let maxLeft = height[left], maxRight = height[right];
        let result = 0;
    
        while (left < right) {
            if (maxLeft < maxRight) {
                ++left;
                maxLeft = Math.max(maxLeft, height[left])
                result += maxLeft - height[left];
            } else {
                --right;
                maxRight = Math.max(maxRight, height[right])
                result += maxRight - height[right];
            }
        }
        return result;
    }
}

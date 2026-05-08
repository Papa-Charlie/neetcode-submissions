class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
        // for (let i = 0; i < nums.length; ++i) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num)
        }
        return false;
    }
}

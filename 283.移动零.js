/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (64.04%)
 * Likes:    1365
 * Dislikes: 0
 * Total Accepted:    580.3K
 * Total Submissions: 906K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 遍历,记录已遍历过的第一个0位置,俩值交换,第一个0位置++
    let firstZero = -1;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element !== 0 && firstZero > -1){
            nums[firstZero] = element;
            nums[index] = 0;
            firstZero++;
        } else if(element === 0 && firstZero === -1){
            firstZero = index;
        }
    }
};
// @lc code=end


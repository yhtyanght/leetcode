/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.17%)
 * Likes:    4161
 * Dislikes: 0
 * Total Accepted:    753.6K
 * Total Submissions: 2.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 暴力 O(n^3) a+b=-c 错误 无法去重
/* var threeSum = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length - 2; i++){
        let target = nums[i];
        for(let j = i+1; j < nums.length - 1; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[j]+nums[k] === -target){
                    result.push([target,nums[j],nums[k]]);
                }
            }
        }
    }
    return result;
}; */
// 排序加双指针夹逼
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    let len = nums.length;
    for(let i = 0; i < len; i++){
        if(nums[i]>0){
            return result;
        }
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }
        let L = i+1;
        let R = len-1;
        while(L<R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                result.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            } else if(sum<0){
                L++
            } else {
                R--
            }
        }
    }
    return result;
};
// @lc code=end


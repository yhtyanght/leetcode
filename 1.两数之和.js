/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力:两遍循环
// TODO: hash表
var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length;j++){
            if(nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
};
// TODO:进阶相关题目
// 数组API find(target-nums[i])
// 两数之和Ⅱ - 输入有序数组

// 两数之和Ⅲ - 数据结构设计

// 两数之和Ⅳ - 输入 BST

// 三数之和

// 四数之和
// @lc code=end


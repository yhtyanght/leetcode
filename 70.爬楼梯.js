/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (53.27%)
 * Likes:    2098
 * Dislikes: 0
 * Total Accepted:    657.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 当前楼梯走法等于前俩楼梯走法之和 找最近重复子问题
// 斐波那契
// for循环
/* var climbStairs = function(n) {
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    let temp1 = 1;
    let temp2 = 2;
    for(let i=3; i<=n; i++){
        let temp = temp1 + temp2;
        temp1 = temp2;
        temp2 = temp;
    }
    return temp2
}; */
let fbnqList = [0,1,2];
var climbStairs = function(n) {
    if(!fbnqList[n] && n !== 1 && n !== 0){
        fbnqList[n] = climbStairs(n-1) + climbStairs(n-2)   
    }
    return fbnqList[n];
};
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
// @lc code=end


//Day22: LeetCode Medium

//Activity: Add Two Numbers
//Task: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);
    }

    return dummy.next;
};

//Activity: Longest Substring Without Repeating Characters
//Task: Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let count = new Array(256).fill(0);
    for (let i = 0, j = 0; i < s.length; i++) {
        count[s.charCodeAt(i)]++;
        while (count[s.charCodeAt(i)] > 1) {
            count[s.charCodeAt(j++)]--;
        }
        ans = Math.max(ans, i - j + 1);
    }
    return ans;
};

//Activity: Container With Most Water
//Task: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together with the x-axis form a container, such that the container contains the most water.Return the maximum amount of water a container can store.Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1
    let maxArea = 0
    while(left<right){
        let area =Math.min(height[left],height[right]) * (right-left)
        maxArea = Math.max(maxArea,area)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
};

//Activity: 3Sum
//Task: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
        let result = [];
    
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
    
            let left = i + 1, right = nums.length - 1;
    
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
    
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    
        return result;
    };

//Activity: Group Anagrams
//Task: Given an array of strings strs, group the anagrams together. You can return the answer in any order.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map(), anagrams = []
    
    for(let str of strs){

        let char = str.split('').sort().join('')
        
        if(!map.get(char)){
            map.set(char,[])
        }

        let arr = map.get(char)
        arr.push(str)
        map.set(char,arr)
        
    }

    return [...map.values()]
};
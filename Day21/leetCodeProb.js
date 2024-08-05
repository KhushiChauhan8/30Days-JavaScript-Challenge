//Activitiy: Two sum
//Task 1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
               return [i, j]
            }
        }
    }
    return [0, 1];
};

//Activity: Reverse Integer
//Task2: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let res = 0;
    x = Math.abs(x);
    while(x != 0) {
        let d = x % 10;
        if(res > (2147483647 - d) / 10) return 0;
        res = res * 10 + d;
        x = Math.floor(x / 10);
    }
    return sign * res;
};

//Activity: Palindrome Number
//Task3: Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    str = x+'';
    let p1 = 0;
    let p2= str.length-1;

    while(p1<p2){
        if(str[p1] != str[p2]){
            return false;
        }
        p1++;
        p2--;
    }
    return true;
};

//Activity: Merge Two Sorted Lists
//Task4: You are given the heads of two sorted linked lists list1 and list2.Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.Return the head of the merged linked list.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {


    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//Activity: Valid Parentheses
//Task5: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.An input string is valid if:Open brackets must be closed by the same type of brackets.Open brackets must be closed in the correct order.Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let stack = []
    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else {
            if (!stack.length ||
                (c === ')' && stack[stack.length - 1] !== '(') ||
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false
            }
            stack.pop()
        }
    }
    return !stack.length
}
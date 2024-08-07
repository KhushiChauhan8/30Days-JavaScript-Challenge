//Day23: LeetCode Hard

//Activity: Median of Two Sorted Arrays
//Task: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums2.length + nums1.length
    let i1 = 0 
    let i2 = 0
    let ans = []
    for (let i = 0; i<a; i++){
        if(nums1[i1] <= nums2[i2] || nums2.length<=i2){
            ans.push(nums1[i1])
            i1 = i1 + 1
        }
        else{
            ans.push(nums2[i2])
            i2 = i2 + 1
        }
    }
    if((ans.length % 2) == 0){
        return (ans[(ans.length/2)-1] + ans[ans.length/2])/2
    }
    else{
        return (ans[(ans.length-1)/2])
    }
};

//Activity: Merge k Sorted Lists
//Task: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var mergeKLists = function(lists) {
    let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;
};

//Activity: Trapping Rain Water
//Task: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let left_max = height[0];
    let sum = 0;
    let j = height.length - 1;
    let right_max = height[j];
    while (i < j) {
        if (left_max <= right_max) {
            sum += left_max - height[i];
            i++;
            left_max = Math.max(left_max, height[i]);
        } else {
            sum += right_max - height[j];
            j--;
            right_max = Math.max(right_max, height[j]);
        }
    }
    return sum;
}

//Activity: N-Queens
//Task: The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    if (n === 1) {
        return [["Q"]];
    }
    if (n == 2 || n === 3) {
        return [];
    }
    let results = [];
    let solution = Array(n).fill(-1);
    solveNQueensRec(n, solution, 0, results);
    return results;
};

// Recursive worker function
function solveNQueensRec(n, solution, row, results) {
    if (row == n) {
        const solutionStr = constructSolutionString(solution);
        results.push(solutionStr);
        return;
    }

    for (let i = 0; i < n; i++) {
        let valid = isValidMove(row, i, solution);
        if (valid) {
            solution[row] = i;
            solveNQueensRec(n, solution, row + 1, results);
        }
    }
}


// this method determines if a queen can be placed at
// proposedRow, proposedCol with current solution i.e.
// this move is valid only if no queen in current
// solution may attack the square at proposedRow and
// proposedCol
function isValidMove(proposedRow, proposedCol, solution) {
    for (let i = 0; i < proposedRow; i++) {
        let oldRow = i,
            oldCol = solution[i],
            diagonalOffset = proposedRow - oldRow;

        if (
            oldCol == proposedCol ||
            oldCol == proposedCol - diagonalOffset ||
            oldCol == proposedCol + diagonalOffset
        ) {
            return false;
        }
    }
    return true;
}

function constructSolutionString(solution) {
    const returnArr = [];
    for (i = 0; i < solution.length; i++) {
        const returnStr = Array(solution.length).fill('.');
        returnStr[solution[i]] = "Q";
        returnArr.push(returnStr.join(''));
    }
    return returnArr;
}

//Activity: Word Ladder
//Task: A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:Every adjacent pair of words differs by a single letter.Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.sk == endWordGiven two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

function ladderLength(beginWord, endWord, wordList) {
    const dict = new Set(wordList);
    let step = 1;
    let q = [beginWord];
  
    while (q.length) {
      const next = [];
      for (let w of q) {
        if (w === endWord) return step;
  
        for (let i = 0; i < w.length; i++) {
          for (let j = 0; j < 26; j++) {
            const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1);  // 97 -> 'a'
  
            if (dict.has(w2)) {
              next.push(w2);
              dict.delete(w2);
            }
          }
        }
      }
      q = next;
      step++;
    }
  
    return 0;
  }
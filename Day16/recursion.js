// Day 16: Recursion

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test cases for Task 1
console.log(`Factorial of 5: ${factorial(5)}`); // 120
console.log(`Factorial of 7: ${factorial(7)}`); // 5040
console.log(`Factorial of 0: ${factorial(0)}`); // 1

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases for Task 2
console.log(`Fibonacci of 5: ${fibonacci(5)}`); // 5
console.log(`Fibonacci of 7: ${fibonacci(7)}`); // 13
console.log(`Fibonacci of 10: ${fibonacci(10)}`); // 55

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

// Test cases for Task 3
console.log(`Sum of [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`); // 15
console.log(`Sum of [10, 20, 30]: ${sumArray([10, 20, 30])}`); // 60
console.log(`Sum of []: ${sumArray([])}`); // 0

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = maxArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

// Test cases for Task 4
console.log(`Max of [1, 2, 3, 4, 5]: ${maxArray([1, 2, 3, 4, 5])}`); // 5
console.log(`Max of [10, 20, 5]: ${maxArray([10, 20, 5])}`); // 20
console.log(`Max of [7, 7, 7]: ${maxArray([7, 7, 7])}`); // 7

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Test cases for Task 5
console.log(`Reverse of "hello": ${reverseString("hello")}`); // "olleh"
console.log(`Reverse of "world": ${reverseString("world")}`); // "dlrow"
console.log(`Reverse of "abc": ${reverseString("abc")}`); // "cba"

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

// Test cases for Task 6
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`); // true
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`); // false
console.log(`Is "madam" a palindrome? ${isPalindrome("madam")}`); // true

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, end);
}

// Test cases for Task 7
console.log(`Binary search for 3 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 3)}`); // 2
console.log(`Binary search for 6 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 6)}`); // -1
console.log(`Binary search for 1 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 1)}`); // 0

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

// Test cases for Task 8
console.log(`Count of 3 in [1, 3, 3, 4, 3]: ${countOccurrences([1, 3, 3, 4, 3], 3)}`); // 3
console.log(`Count of 2 in [1, 2, 2, 2, 5]: ${countOccurrences([1, 2, 2, 2, 5], 2)}`); // 3
console.log(`Count of 7 in [1, 2, 3, 4, 5]: ${countOccurrences([1, 2, 3, 4, 5], 7)}`); // 0

// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

// Example tree and test case for Task 9
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // 4 2 5 1 3

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example tree and test case for Task 10
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

console.log(`Depth of tree: ${treeDepth(root2)}`); // 3

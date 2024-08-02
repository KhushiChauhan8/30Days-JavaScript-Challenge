// Activity 1: Sorting Algorithms

// Task 1: Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log('Bubble Sort:', arr);
}

// Task 2: Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    console.log('Selection Sort:', arr);
}

// Task 3: Quicksort
function quicksort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    return quicksort(left).concat(middle, quicksort(right));
}

// Test Sorting Algorithms
let array1 = [64, 34, 25, 12, 22, 11, 90];
let array2 = [...array1];
let array3 = [...array1];
bubbleSort(array1);
selectionSort(array2);
console.log('Quicksort:', quicksort(array3));

// Activity 2: Searching Algorithms

// Task 4: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log('Linear Search: Index of', target, 'is', i);
            return i;
        }
    }
    console.log('Linear Search: Target not found');
    return -1;
}

// Task 5: Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log('Binary Search: Index of', target, 'is', mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log('Binary Search: Target not found');
    return -1;
}

// Test Searching Algorithms
let searchArray = [2, 3, 4, 10, 40];
linearSearch(searchArray, 10);
binarySearch(searchArray, 10);

// Activity 3: String Algorithms

// Task 6: Count Character Occurrences
function countCharacterOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    console.log('Character Counts:', counts);
}

// Task 7: Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeatingCharacters(str) {
    let n = str.length;
    let result = 0;
    let indexMap = new Map();
    for (let j = 0, i = 0; j < n; j++) {
        if (indexMap.has(str[j])) {
            i = Math.max(indexMap.get(str[j]), i);
        }
        result = Math.max(result, j - i + 1);
        indexMap.set(str[j], j + 1);
    }
    console.log('Longest Substring Length:', result);
    return result;
}

// Test String Algorithms
let testString = 'abcabcbb';
countCharacterOccurrences(testString);
longestSubstringWithoutRepeatingCharacters(testString);

// Activity 4: Array Algorithms

// Task 8: Rotate Array
function rotateArray(arr, positions) {
    positions = positions % arr.length;
    let rotatedArray = arr.slice(-positions).concat(arr.slice(0, -positions));
    console.log('Rotated Array:', rotatedArray);
    return rotatedArray;
}

// Task 9: Merge Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Test Array Algorithms
let arrayA = [1, 2, 3, 4, 5];
let arrayB = [6, 7, 8, 9, 10];
rotateArray(arrayA, 2);
console.log('Merged Sorted Arrays:', mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Activity 5: Dynamic Programming (Optional)

// Task 10: Fibonacci Sequence
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Task 11: Knapsack Problem
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.log('Knapsack Maximum Value:', dp[n][capacity]);
    return dp[n][capacity];
}

// Test Dynamic Programming Algorithms
console.log('Fibonacci (10th number):', fibonacci(10));
let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
knapsack(values, weights, capacity);

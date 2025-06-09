/**
 * LeetCode Problem: Two Sum
 * URL: https://leetcode.com/problems/two-sum/
 */

/** Shared content used in all solutions */
const messageError = "No two sum solution found.";

/**
 * Brute-force solution
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error(messageError);
}

/**
 * Solution using object as a hash map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function twoSumObject(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  throw new Error(messageError);
}

/**
 * Modern solution built-in Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function twoSumMap(nums: number[], target: number): [number, number] {
  const numToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numToIndex.has(num)) {
      return [numToIndex.get(num)!, i];
    }

    const complement = target - num;
    numToIndex.set(complement, i);
  }

  throw new Error(messageError);
}

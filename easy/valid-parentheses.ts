/**
 * LeetCode Problem: Valid Parentheses
 * URL: https://leetcode.com/problems/valid-parentheses
 */

/**
 * Solution built-in Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;

    const pairBrackets  = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);

    const stack: string[] = [];

    for (const char of s) {
        if (pairBrackets.has(char)) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || pairBrackets.get(top) !== char) return false;
        }
    }
    return stack.length === 0;
}
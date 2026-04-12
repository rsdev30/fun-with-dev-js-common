/**
 * Finds two indices in the array such that the numbers at those indices add up to the target.
 * Uses a hashmap for O(n) time complexity.
 * 
 * Time Complexity: O(N) - Single pass through the array. For each element, 
 * we perform constant-time operations: calculate complement, check map.has(), 
 * and map.set(). Map operations (insertion and lookup) are O(1) on average.
 * 
 * Space Complexity: O(N) - In the worst case, we store almost all array elements
 * in the hash map if no pair is found early. The map can contain up to N entries.
 * 
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the two indices, or an empty array if no solution.
 */
function twoSumHashMap(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

export default twoSumHashMap;
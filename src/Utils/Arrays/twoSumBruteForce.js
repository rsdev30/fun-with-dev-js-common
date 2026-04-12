/**
 * Time Complexity: O(N^2) - Nested loops iterate through all pairs of elements.
 * For each element at index i, we check all elements after it (j = i+1 to n).
 * In the worst case, all pairs must be compared.
 * 
 * Space Complexity: O(K) where K is the number of valid pairs found.
 * We store each pair of indices in the result array.
 * The algorithm doesn't use additional space proportional to the input size.
 */
/**
 * Finds all pairs of indices in the array whose values sum to the target.
 * @param {number[]} array - The array of integers to search through
 * @param {number} targetSum - The target sum that two elements should add up to
 * @returns {number[][]} - An array of index pairs [i, j] where array[i] + array[j] === targetSum
 */
function findTwoSum(array, targetSum) { 
	let arrayList = [];
	//O(N^2) since we have two loops
	if(array === null)
		return [];
	let n = array.length;
	
	for(let i=0; i < n; i++) {
		//let array = [2,3,4]
		//i+1 is the next element in the array, if i=0 with 2, then j=1 with value 3 as an example
		for(let j=i+1; j < n; j++) {
			if(array[i] + array[j] === targetSum){
				let pair = [i, j];
				arrayList = [...arrayList,pair];
			}
		}
	}
	
	return arrayList;
}

export default findTwoSum;
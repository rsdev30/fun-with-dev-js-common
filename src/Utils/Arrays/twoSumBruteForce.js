//Time: O(N^2) since we have two loops
//Space: O(1) since we are not using any extra space
function findTwoSum(array, targetSum) { 
	let arrayList = [];
	//O(N^2) since we have two loops
	if(array === null)
		return [];
	let n = array.length;
	
	for(let i=0; i < n; i++) {
		
		//let array = [2,3,4]
		//i+1 is the next element in the array, if i=0 with 2, then j=1 with value 3 as an example
		for(let j=i+1; j < n; i++) {
			if(array[i] + array[j] === targetSum){
				arrayList = [...arrayList,i,j];
				return arrayList;
			}
		}
	}
	
	return arrayList;
}

export { findTwoSum };
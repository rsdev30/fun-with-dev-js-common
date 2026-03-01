function insertionSortInPlace(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
  
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && compare(arr[j], key) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}

function insertionSort(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  return insertionSortInPlace(Array.from(arr), compare);
}

function insertionSortStep(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = Array.from(arr);
  let swapped = false;
  
  // Perform one iteration (insert first unsorted element)
  if (a.length > 1) {
    const i = 1;
    const key = a[i];
    let j = i - 1;
    
    while (j >= 0 && compare(a[j], key) > 0) {
      a[j + 1] = a[j];
      j--;
      swapped = true;
    }
    
    a[j + 1] = key;
    if (j < i - 1) swapped = true;
  }
  
  return { array: a, swapped };
}

const insertionSortUtils = { insertionSortInPlace, insertionSort, insertionSortStep };
export default insertionSortUtils;

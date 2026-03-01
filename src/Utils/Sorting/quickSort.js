function partition(arr, low, high, compare) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (compare(arr[j], pivot) < 0) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  
  return i + 1;
}

function quickSortHelper(arr, low, high, compare) {
  if (low < high) {
    const pi = partition(arr, low, high, compare);
    quickSortHelper(arr, low, pi - 1, compare);
    quickSortHelper(arr, pi + 1, high, compare);
  }
}

function quickSortInPlace(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
  if (arr.length > 1) {
    quickSortHelper(arr, 0, arr.length - 1, compare);
  }
  return arr;
}

function quickSort(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  return quickSortInPlace(Array.from(arr), compare);
}

function quickSortStep(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = Array.from(arr);
  quickSortInPlace(a, compare);
  return { array: a, swapped: true };
}

const quickSortUtils = { partition, quickSortInPlace, quickSort, quickSortStep };
export default quickSortUtils;

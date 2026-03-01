function merge(arr, left, mid, right, compare) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  
  let i = 0, j = 0, k = left;
  
  while (i < leftArr.length && j < rightArr.length) {
    if (compare(leftArr[i], rightArr[j]) <= 0) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }
  
  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }
  
  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }
}

function mergeSortHelper(arr, left, right, compare) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(arr, left, mid, compare);
    mergeSortHelper(arr, mid + 1, right, compare);
    merge(arr, left, mid, right, compare);
  }
}

function mergeSortInPlace(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
  if (arr.length > 1) {
    mergeSortHelper(arr, 0, arr.length - 1, compare);
  }
  return arr;
}

function mergeSort(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  return mergeSortInPlace(Array.from(arr), compare);
}

function mergeSortStep(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = Array.from(arr);
  mergeSortInPlace(a, compare);
  return { array: a, swapped: true };
}

const mergeSortUtils = { merge, mergeSortInPlace, mergeSort, mergeSortStep };
export default mergeSortUtils;

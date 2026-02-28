function swap(arr, i, j) { const t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

function selectionSortInPlace(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (compare(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

function selectionSort(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  return selectionSortInPlace(Array.from(arr), compare);
}

function selectionSortStep(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = Array.from(arr);
  let minIndex = 0;
  let swapped = false;
  for (let j = 1; j < a.length; j++) {
    if (compare(a[j], a[minIndex]) < 0) {
      minIndex = j;
    }
  }
  if (minIndex !== 0) {
    swap(a, 0, minIndex);
    swapped = true;
  }
  return { array: a, swapped };
}

//export default { swap, selectionSortInPlace, selectionSort, selectionSortStep };
const selectionSortUtils = { swap, selectionSortInPlace, selectionSort, selectionSortStep };
export default selectionSortUtils;
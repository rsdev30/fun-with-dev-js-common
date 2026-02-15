/* JavaScript bubble sort utilities */
const swap = (arr, i, j) => { const t = arr[i]; arr[i] = arr[j]; arr[j] = t; };

function bubbleSortInPlace(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

function bubbleSort(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  return bubbleSortInPlace(Array.from(arr), compare);
}

function bubbleSortStep(arr, compare = (a,b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = Array.from(arr);
  let swapped = false;
  for (let j = 0; j < a.length - 1; j++) {
    if (compare(a[j], a[j + 1]) > 0) {
      swap(a, j, j + 1);
      swapped = true;
    }
  }
  return { array: a, swapped };
}

export default { swap, bubbleSortInPlace, bubbleSort, bubbleSortStep };

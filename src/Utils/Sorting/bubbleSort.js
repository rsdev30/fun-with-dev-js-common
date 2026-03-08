function swap(arr, i, j) { const t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

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

//Generator version for visualization purposes
export function* bubbleSortGen(array) {
  const arr = array.slice();
  const n = arr.length;
  
  //out loop with an upper bound of N - 1
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    //inner loop with an upper bound of N - i - 1}
    for (let j = 0; j < n - i - 1; j++) {
        //Since this is a generator function we want to show the comparison 
        yield { array: [...arr], comparing: [j, j + 1]};

        //Compare the adjacent elements,  example: 5, 4, 1   a[0]=5, a[1]=4 
        if(arr[j] > arr[j + 1]) {
            //Swap because the current element is greater than the next element
            [arr[j], arr[j +1]] = [arr[j + 1], arr[j]];
            swapped = true;

            //Show the swap which would show, 4,5,1 just as an example
            yield { array: [...arr], swapped: [j, j+1] };
        }
    }
    
    if(swapped === false)break;

  }
  yield { array: [...arr], done: true};
}

const bubbleSortUtils = { swap, bubbleSortInPlace, bubbleSort, bubbleSortStep, bubbleSortGen };
export default bubbleSortUtils;
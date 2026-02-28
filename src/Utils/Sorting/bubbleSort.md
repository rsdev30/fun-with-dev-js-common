# Bubble Sort

## Overview

Bubble Sort is a simple sorting algorithm that repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm continues until no more swaps are needed, indicating the array is sorted.

### How It Works

The algorithm works by making multiple passes through the array:
- In each pass, it compares adjacent pair of elements
- If the pair is in the wrong order, it swaps them
- After each complete pass, the largest unsorted element "bubbles up" to its correct position at the end
- The algorithm stops when a complete pass occurs with no swaps

### Key Characteristics

- **Time Complexity**: O(n²) average and worst case, O(n) best case (already sorted)
- **Space Complexity**: O(1) - sorts in place with minimal extra space
- **Stable**: Yes (equal elements retain their relative order)
- **In-place**: Yes
- **Adaptive**: Yes (efficient for nearly sorted data)

---

## Visual Step-by-Step Flow

### Example: Sorting [64, 34, 25, 12, 22, 11, 90]

#### Pass 1: Compare and swap adjacent elements
```
[64, 34, 25, 12, 22, 11, 90]
 ↓
Compare 64 and 34 → swap
[34, 64, 25, 12, 22, 11, 90]
     ↓
Compare 64 and 25 → swap
[34, 25, 64, 12, 22, 11, 90]
         ↓
Compare 64 and 12 → swap
[34, 25, 12, 64, 22, 11, 90]
             ↓
Compare 64 and 22 → swap
[34, 25, 12, 22, 64, 11, 90]
                 ↓
Compare 64 and 11 → swap
[34, 25, 12, 22, 11, 64, 90]
                     ↓
Compare 64 and 90 → no swap (90 is larger)
[34, 25, 12, 22, 11, 64, 90]
                              ↑ largest element now at end
```

#### Pass 2: The second-largest bubbles up
```
[34, 25, 12, 22, 11, 64, 90]
 ↓
Multiple comparisons and swaps...
[25, 12, 22, 11, 34, 64, 90]
                     ↑ second-largest now in place
```

#### Pass 3: Continue until sorted
```
[25, 12, 22, 11, 34, 64, 90]
 ↓
Continue comparisons...
[12, 22, 11, 25, 34, 64, 90]
                 ↑
```

#### Pass 4: More passes needed
```
[12, 22, 11, 25, 34, 64, 90]
 ↓
[12, 11, 22, 25, 34, 64, 90]
             ↑
```

#### Pass 5: More passes needed
```
[12, 11, 22, 25, 34, 64, 90]
 ↓
[11, 12, 22, 25, 34, 64, 90]
     ↑ No swaps needed after this point - array is sorted!
```

#### Final Result
```
[11, 12, 22, 25, 34, 64, 90]
 ↑↑↑↑↑↑↑ sorted (complete)
```

---

## Algorithm Pseudocode

```
bubbleSort(arr):
  n = length(arr)
  for i from 0 to n-2:
    swapped = false
    for j from 0 to n-2-i:
      if arr[j] > arr[j+1]:
        swap(arr[j], arr[j+1])
        swapped = true
    if not swapped:
      break  // array is already sorted
  return arr
```

---

## Why It's Called "Bubble" Sort

The algorithm is called "Bubble Sort" because smaller elements gradually "bubble" towards the beginning of the array with each pass, while larger elements "bubble" towards the end. After each complete pass, the largest element "floats up" to its correct position at the end, like bubbles rising to the surface.

---

## Usage

```javascript
import bubbleSort from './bubbleSort.js';

// Sort an array
const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(arr);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]

// Sort in place
bubbleSort.bubbleSortInPlace(arr);

// Single step for visualization
const { array, swapped } = bubbleSort.bubbleSortStep(arr);

// Custom comparator
const objects = [{id: 2}, {id: 1}, {id: 3}];
const sorted = bubbleSort.bubbleSort(objects, (a, b) => a.id - b.id);
```

---

## Advantages & Disadvantages

### Advantages
- Simple to understand and implement
- No extra space required (in-place sorting)
- Stable sorting algorithm
- Can detect if list is already sorted

### Disadvantages
- Poor performance on large datasets (O(n²))
- Much slower than advanced algorithms (quicksort, mergesort)
- Not practical for real-world applications with large data

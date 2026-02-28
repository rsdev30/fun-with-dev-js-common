# Selection Sort

## Overview

Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted portion of the array and placing it at the beginning of the sorted portion.

### How It Works

The algorithm divides the array into two regions:
- **Sorted Region** (left side) - elements that have been placed in their final sorted position
- **Unsorted Region** (right side) - elements that still need to be sorted

In each iteration, the algorithm:
1. Finds the minimum element in the unsorted region
2. Swaps it with the first element of the unsorted region
3. Expands the sorted region by one element

### Key Characteristics

- **Time Complexity**: O(n²) in all cases (best, average, and worst)
- **Space Complexity**: O(1) - sorts in place with minimal extra space
- **Stable**: No (equal elements may not retain their relative order)
- **In-place**: Yes
- **Adaptive**: No (performance doesn't improve with partially sorted data)

---

## Visual Step-by-Step Flow

### Example: Sorting [64, 34, 25, 12, 22, 11, 90]

#### Step 1: Find minimum (11) in entire array, swap with position 0
```
[64, 34, 25, 12, 22, 11, 90]
                       ↑ min
              ↓ swap
[11, 34, 25, 12, 22, 64, 90]
 ↑ sorted
```

#### Step 2: Find minimum (12) in unsorted portion, swap with position 1
```
[11, 34, 25, 12, 22, 64, 90]
              ↑ min
     ↓ swap
[11, 12, 25, 34, 22, 64, 90]
 ↑↑ sorted
```

#### Step 3: Find minimum (22) in unsorted portion, swap with position 2
```
[11, 12, 25, 34, 22, 64, 90]
                 ↑ min
        ↓ swap
[11, 12, 22, 34, 25, 64, 90]
 ↑↑↑ sorted
```

#### Step 4: Find minimum (25) in unsorted portion, swap with position 3
```
[11, 12, 22, 34, 25, 64, 90]
                    ↑ min
           ↓ swap
[11, 12, 22, 25, 34, 64, 90]
 ↑↑↑↑ sorted
```

#### Step 5: Find minimum (34) in unsorted portion, swap with position 4
```
[11, 12, 22, 25, 34, 64, 90]
                    ↑ min
              ↓ already in place
[11, 12, 22, 25, 34, 64, 90]
 ↑↑↑↑↑ sorted
```

#### Step 6: Find minimum (64) in unsorted portion, swap with position 5
```
[11, 12, 22, 25, 34, 64, 90]
                       ↑ min
                 ↓ already in place
[11, 12, 22, 25, 34, 64, 90]
 ↑↑↑↑↑↑ sorted
```

#### Step 7: Only one element left (90), array is sorted
```
[11, 12, 22, 25, 34, 64, 90]
 ↑↑↑↑↑↑↑ sorted (complete)
```

---

## Algorithm Pseudocode

```
selectionSort(arr):
  for i from 0 to n-2:
    minIndex = i
    for j from i+1 to n-1:
      if arr[j] < arr[minIndex]:
        minIndex = j
    if minIndex ≠ i:
      swap(arr[i], arr[minIndex])
  return arr
```

---

## Usage

```javascript
import selectionSort from './selectionSort.js';

// Sort an array
const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = selectionSort(arr);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]

// Sort in place
selectionSort.selectionSortInPlace(arr);

// Single step for visualization
const { array, swapped } = selectionSort.selectionSortStep(arr);

// Custom comparator
const objects = [{id: 2}, {id: 1}, {id: 3}];
const sorted = selectionSort.selectionSort(objects, (a, b) => a.id - b.id);
```

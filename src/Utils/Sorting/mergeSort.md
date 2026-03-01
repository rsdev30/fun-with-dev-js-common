# Merge Sort

## Overview

Merge Sort is a divide-and-conquer sorting algorithm that divides the array into smaller subarrays, recursively sorts them, and then merges the sorted subarrays back together into the final sorted array.

### How It Works

The algorithm follows a two-phase approach:

**Divide Phase:**
1. Divide the unsorted array into two halves
2. Recursively divide each half until subarrays of size 1 are reached (a single element is considered sorted)

**Merge Phase:**
1. Merge pairs of sorted subarrays into larger sorted arrays
2. Continue merging until the entire array is sorted

### Key Characteristics

- **Time Complexity**: O(n log n) in all cases (best, average, and worst)
- **Space Complexity**: O(n) - requires additional space for merging
- **Stable**: Yes (equal elements retain their relative order)
- **In-place**: No (requires auxiliary space)
- **Adaptive**: No (performance doesn't improve with partially sorted data)

---

## Visual Step-by-Step Flow

### Example: Sorting [38, 27, 43, 3, 9, 82, 10]

#### Step 1: Divide Phase - Split into halves recursively

```
Original Array:
[38, 27, 43, 3, 9, 82, 10]

First Division:
[38, 27, 43, 3]     [9, 82, 10]

Second Division:
[38, 27]     [43, 3]     [9, 82]     [10]

Third Division:
[38]  [27]  [43]  [3]  [9]  [82]  [10]
↑ All subarrays of size 1 - base case reached
```

#### Step 2: Merge Phase - Merge sorted subarrays

```
Merge pairs of size 1:
[38]  [27]        →  [27, 38]
[43]  [3]         →  [3, 43]
[9]  [82]         →  [9, 82]
[10]              →  [10]

Current state:
[27, 38]     [3, 43]     [9, 82]     [10]

Merge pairs of size 2:
Compare: 27 vs 3
  3 < 27 → place 3
  27 vs 43
  27 < 43 → place 27, continue with 43
  43 < 43 (comparing with next 43)
Result: [3, 27, 38, 43]

Compare: 9 vs 10
  9 < 10 → place 9
  82 vs 10
  10 < 82 → place 10
Result: [9, 10, 82]

Current state:
[3, 27, 38, 43]     [9, 10, 82]

Final Merge - Merge size 4 and size 3:
Compare pairs and insert in order:
3 < 9   → 3
27 < 9  → 27
38 < 9  → 38
43 > 9  → 9
43 > 10 → 10
43 < 82 → 43
(remaining 82)

Result:
[3, 9, 10, 27, 38, 43, 82]
↑ Completely sorted!
```

#### Visual Tree Representation

```
                    [38, 27, 43, 3, 9, 82, 10]
                           ↓ divide
            ┌──────────────┴──────────────┐
        [38, 27, 43, 3]              [9, 82, 10]
             ↓ divide                   ↓ divide
        ┌───┴───┐                   ┌───┴──┐
    [38,27]   [43,3]           [9,82]   [10]
      ↓ divide  ↓ divide         ↓ divide
    ┌─┴─┐    ┌──┴──┐          ┌──┴─┐
  [38] [27] [43] [3]        [9] [82]
    ↓ merge   ↓ merge        ↓ merge
  [27,38]   [3,43]         [9,82]
      ↓ merge (2 arrays)      ↓ include [10]
    [3,27,38,43]          [9,10,82]
           ↓ merge (final)
    [3, 9, 10, 27, 38, 43, 82]
```

---

## Algorithm Pseudocode

```
mergeSort(arr, left, right):
  if left < right:
    mid = floor((left + right) / 2)
    mergeSort(arr, left, mid)           // Sort left half
    mergeSort(arr, mid + 1, right)      // Sort right half
    merge(arr, left, mid, right)        // Merge sorted halves

merge(arr, left, mid, right):
  leftArr = copy arr[left...mid]
  rightArr = copy arr[mid+1...right]
  
  i = 0, j = 0, k = left
  
  while i < leftArr.length AND j < rightArr.length:
    if leftArr[i] <= rightArr[j]:
      arr[k++] = leftArr[i++]
    else:
      arr[k++] = rightArr[j++]
  
  // Copy remaining elements
  while i < leftArr.length:
    arr[k++] = leftArr[i++]
  while j < rightArr.length:
    arr[k++] = rightArr[j++]
```

---

## Usage

```javascript
import mergeSort from './mergeSort.js';

// Sort an array
const arr = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSort(arr);
console.log(sorted); // [3, 9, 10, 27, 38, 43, 82]

// Sort in place
mergeSort.mergeSortInPlace(arr);

// Full sort with step function
const { array, swapped } = mergeSort.mergeSortStep(arr);

// Custom comparator
const objects = [{id: 3}, {id: 1}, {id: 2}];
const sorted = mergeSort.mergeSort(objects, (a, b) => a.id - b.id);
```

---

## Advantages & Disadvantages

### Advantages
- Consistent O(n log n) performance in all cases
- Stable sort - maintains relative order of equal elements
- Predictable behavior - no worst-case scenarios
- Excellent for linked lists and large datasets
- Suitable for external sorting (data too large for memory)

### Disadvantages
- Requires O(n) extra space for merging
- Slower than quicksort for small arrays
- Not adaptive - same time complexity for sorted/unsorted data
- More complex implementation than simpler algorithms
- Uses more memory due to auxiliary arrays

---

## When to Use Merge Sort

- ✓ When guaranteed O(n log n) is required
- ✓ Sorting linked lists
- ✓ Large datasets that don't fit in memory (external sorting)
- ✓ When stability is important
- ✓ Parallel sorting scenarios
- ✗ When memory is limited
- ✗ For small internal arrays (quicksort is faster)

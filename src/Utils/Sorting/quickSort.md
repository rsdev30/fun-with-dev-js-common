# Quick Sort

## Overview

Quick Sort is a divide-and-conquer sorting algorithm that selects a "pivot" element and partitions the array into two subarrays: elements smaller than the pivot and elements greater than the pivot. It recursively sorts both subarrays.

### How It Works

The algorithm works by:

1. **Select a Pivot**: Choose an element from the array as the pivot
2. **Partition**: Rearrange the array so that:
   - All elements smaller than the pivot are on the left
   - All elements greater than the pivot are on the right
   - The pivot is now in its correct sorted position
3. **Recurse**: Recursively apply quicksort to the left and right subarrays

### Key Characteristics

- **Time Complexity**: O(n log n) average case, O(n²) worst case
- **Space Complexity**: O(log n) - due to recursion stack
- **Stable**: No (equal elements may not retain their relative order)
- **In-place**: Yes (minimal extra space)
- **Adaptive**: No (not faster for partially sorted data)

---

## Visual Step-by-Step Flow

### Example: Sorting [64, 34, 25, 12, 22, 11, 90]

#### Step 1: Initial Array and Pivot Selection
```
Array: [64, 34, 25, 12, 22, 11, 90]
                                  ↑ pivot = 90 (last element)

Partition around pivot 90:
Elements < 90: [64, 34, 25, 12, 22, 11]
Elements = 90: [90]
Elements > 90: []

After partitioning:
[64, 34, 25, 12, 22, 11] | [90]
 ↑ needs sorting          ↑ in correct position
```

#### Step 2: Recursively Sort Left Partition [64, 34, 25, 12, 22, 11]
```
Pivot = 11 (last element)

Compare each element with 11:
64 > 11 → right
34 > 11 → right
25 > 11 → right
12 > 11 → right
22 > 11 → right
11 = 11 → pivot position

After partitioning:
[11] | [64, 34, 25, 12, 22]
 ↑ sorted     ↑ needs sorting
```

#### Step 3: Recursively Sort [64, 34, 25, 12, 22]
```
Pivot = 22

Compare each element with 22:
64 > 22 → right
34 > 22 → right
25 > 22 → right
12 < 22 → left

Partitioning process:
Start: [64, 34, 25, 12, 22]
After swap/arrange:
[12] | [22] | [64, 34, 25]
 ↑ left  ↑ pivot  ↑ right
```

#### Step 4: Continue Recursive Partitioning
```
Sort [12]: Already sorted (single element)

Sort [64, 34, 25]:
Pivot = 25
34 > 25 → right
64 > 25 → right
Result: [25] | [34, 64]

Sort [34, 64]:
Pivot = 64
34 < 64
Result: [34] | [64]

Combine all sorted parts:
[11] [12] [22] [25] [34] [64] [90]
```

#### Final Result
```
[11, 12, 22, 25, 34, 64, 90]
↑ Completely sorted!
```

#### Visual Recursion Tree
```
                    [64, 34, 25, 12, 22, 11, 90]
                            ↓ pivot=90
                [64, 34, 25, 12, 22, 11] → [90]
                        ↓ pivot=11
            [11] → [64, 34, 25, 12, 22]
                        ↓ pivot=22
            [12] → [22] → [64, 34, 25]
                             ↓ pivot=25
                      [25] → [34, 64]
                              ↓ pivot=64
                          [34] → [64]
                          
        Combine: [11, 12, 22, 25, 34, 64, 90]
```

---

## Algorithm Pseudocode

```
quickSort(arr, low, high):
  if low < high:
    pi = partition(arr, low, high)
    quickSort(arr, low, pi - 1)        // Sort left partition
    quickSort(arr, pi + 1, high)       // Sort right partition

partition(arr, low, high):
  pivot = arr[high]
  i = low - 1
  
  for j from low to high - 1:
    if arr[j] < pivot:
      i = i + 1
      swap(arr[i], arr[j])
  
  swap(arr[i + 1], arr[high])
  return i + 1
```

---

## Usage

```javascript
import quickSort from './quickSort.js';

// Sort an array
const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = quickSort(arr);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]

// Sort in place
quickSort.quickSortInPlace(arr);

// Full sort with step function
const { array, swapped } = quickSort.quickSortStep(arr);

// Custom comparator (descending order)
const descending = quickSort.quickSort([3, 1, 4, 1, 5], (a, b) => b - a);
console.log(descending); // [5, 4, 3, 1, 1]

// Custom comparator (objects)
const objects = [{id: 3}, {id: 1}, {id: 2}];
const sorted = quickSort.quickSort(objects, (a, b) => a.id - b.id);
```

---

## Advantages & Disadvantages

### Advantages
- Very fast in practice - often faster than merge sort for real datasets
- In-place sorting - requires O(log n) extra space
- Cache-friendly - better locality of reference
- Average case O(n log n) with low overhead
- Widely used in standard libraries (Java, C++, Python)

### Disadvantages
- Worst-case O(n²) if pivot is always smallest/largest element
- Not stable - equal elements may change relative order
- Recursive - can cause stack overflow for very large datasets
- Performance depends heavily on pivot selection
- Not adaptive - no performance improvement for partially sorted data

---

## Pivot Selection Strategies

Quick Sort's performance depends heavily on pivot selection:

| Strategy | Best For | Worst Case |
|----------|----------|-----------|
| **Last Element** | Random data | Already sorted data |
| **First Element** | Random data | Already sorted data |
| **Random Element** | Most cases | Rare |
| **Median-of-Three** | Better average | Slightly more overhead |
| **Median-of-Medians** | Guaranteed O(n log n) | More complex |

---

## When to Use Quick Sort

- ✓ General-purpose sorting for most datasets
- ✓ When average O(n log n) performance is sufficient
- ✓ When in-place sorting is preferred
- ✓ When cache efficiency is important
- ✓ Large datasets in memory
- ✗ When guaranteed O(n log n) is required (use merge sort)
- ✗ When stability is critical
- ✗ Real-time systems requiring predictable performance
- ✗ Nearly sorted data (bubble sort may be better)

---

## Comparison with Other Sorting Algorithms

| Algorithm | Best Case | Average | Worst Case | Space | Stable |
|-----------|-----------|---------|-----------|-------|--------|
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

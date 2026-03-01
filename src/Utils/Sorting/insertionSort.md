# Insertion Sort

## Overview

Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It iterates through an array, and for each element, it finds the correct position in the already-sorted portion of the array and inserts it there.

### How It Works

The algorithm divides the array into two regions:
- **Sorted Region** (left side) - elements already in correct order
- **Unsorted Region** (right side) - elements yet to be sorted

For each element in the unsorted region:
1. Pop the element (key)
2. Scan through the sorted region from right to left
3. Shift all elements greater than the key one position to the right
4. Insert the key in its correct position

### Key Characteristics

- **Time Complexity**: O(n²) average and worst case, O(n) best case (already sorted)
- **Space Complexity**: O(1) - sorts in place with no extra space
- **Stable**: Yes (equal elements retain their relative order)
- **In-place**: Yes
- **Adaptive**: Yes (very efficient for nearly sorted data)
- **Online**: Yes (can sort data as it receives it)

---

## Visual Step-by-Step Flow

### Example: Sorting [64, 34, 25, 12, 22, 11, 90]

#### Step 1: Start with first two elements
```
Sorted: [64]  |  Unsorted: [34, 25, 12, 22, 11, 90]

Key = 34
Compare with 64: 34 < 64 → shift 64 right
Insert 34 at position 0

Result: [34, 64] | [25, 12, 22, 11, 90]
         ↑ sorted
```

#### Step 2: Insert 25
```
Sorted: [34, 64]  |  Unsorted: [25, 12, 22, 11, 90]

Key = 25
Compare 64: 25 < 64 → shift 64 right
Compare 34: 25 < 34 → shift 34 right
Insert 25 at position 0

Result: [25, 34, 64] | [12, 22, 11, 90]
         ↑ sorted (3 elements)
```

#### Step 3: Insert 12
```
Sorted: [25, 34, 64]  |  Unsorted: [12, 22, 11, 90]

Key = 12
Compare 64: 12 < 64 → shift 64 right
Compare 34: 12 < 34 → shift 34 right
Compare 25: 12 < 25 → shift 25 right
Insert 12 at position 0

Result: [12, 25, 34, 64] | [22, 11, 90]
         ↑ sorted (4 elements)
```

#### Step 4: Insert 22
```
Sorted: [12, 25, 34, 64]  |  Unsorted: [22, 11, 90]

Key = 22
Compare 64: 22 < 64 → shift 64 right
Compare 34: 22 < 34 → shift 34 right
Compare 25: 22 < 25 → shift 25 right
Compare 12: 22 > 12 → stop shifting
Insert 22 at position 1

Result: [12, 22, 25, 34, 64] | [11, 90]
         ↑ sorted (5 elements)
```

#### Step 5: Insert 11
```
Sorted: [12, 22, 25, 34, 64]  |  Unsorted: [11, 90]

Key = 11
Compare all elements and shift right
Insert 11 at position 0

Result: [11, 12, 22, 25, 34, 64] | [90]
         ↑ sorted (6 elements)
```

#### Step 6: Insert 90
```
Sorted: [11, 12, 22, 25, 34, 64]  |  Unsorted: [90]

Key = 90
Compare 64: 90 > 64 → no shift needed
Insert 90 at position 6

Final Result: [11, 12, 22, 25, 34, 64, 90]
              ↑ sorted (complete)
```

#### Detailed Insertion Mechanics
```
Array: [5, 2, 8, 1, 9]

Initial (i=1): [5, 2, 8, 1, 9]
               ↑ sorted

Step 1 - Insert 2 (i=1):
  j=0: arr[0]=5, 5>2? Yes → shift
  arr = [5, 5, 8, 1, 9]
  j=-1: Insert at position 0
  arr = [2, 5, 8, 1, 9]
  ↑ sorted

Step 2 - Insert 8 (i=2):
  j=1: arr[1]=5, 5>8? No → stop
  Insert at position 2
  arr = [2, 5, 8, 1, 9]
  ↑ sorted

Step 3 - Insert 1 (i=3):
  j=2: arr[2]=8, 8>1? Yes → shift
  arr = [2, 5, 8, 8, 9]
  j=1: arr[1]=5, 5>1? Yes → shift
  arr = [2, 5, 5, 8, 9]
  j=0: arr[0]=2, 2>1? Yes → shift
  arr = [2, 2, 5, 8, 9]
  j=-1: Insert at position 0
  arr = [1, 2, 5, 8, 9]
  ↑ sorted

Step 4 - Insert 9 (i=4):
  j=3: arr[3]=8, 8>9? No → stop
  Insert at position 4
  arr = [1, 2, 5, 8, 9]
  ↑ sorted (complete)
```

---

## Algorithm Pseudocode

```
insertionSort(arr):
  for i from 1 to length(arr) - 1:
    key = arr[i]
    j = i - 1
    
    while j >= 0 AND arr[j] > key:
      arr[j + 1] = arr[j]
      j = j - 1
    
    arr[j + 1] = key
  
  return arr
```

---

## Usage

```javascript
import insertionSort from './insertionSort.js';

// Sort an array
const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = insertionSort(arr);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]

// Sort in place
insertionSort.insertionSortInPlace(arr);

// Single step for visualization
const { array, swapped } = insertionSort.insertionSortStep(arr);

// Custom comparator (descending)
const descending = insertionSort.insertionSort([3, 1, 4, 1, 5], (a, b) => b - a);
console.log(descending); // [5, 4, 3, 1, 1]

// Custom comparator (objects)
const objects = [{id: 2}, {id: 1}, {id: 3}];
const sorted = insertionSort.insertionSort(objects, (a, b) => a.id - b.id);
```

---

## Advantages & Disadvantages

### Advantages
- This is an excellent sort for small datasets
- Efficient for nearly sorted data - O(n) when array is mostly sorted
- Adaptive algorithm - performs better with partially sorted input
- Stable sort - maintains relative order of equal elements
- Online sorting - can sort as data arrives
- Simple implementation - easy to understand and code
- In-place sorting - requires minimal extra space
- Low overhead - fewer operations than more complex algorithms

### Disadvantages
- O(n²) performance on random data makes it slow for large datasets
- Too slow for real-world applications with large data
- Many element shifts can be inefficient (cache misses)
- Not suitable for external sorting

---

## When to Use Insertion Sort

- ✓ Sorting small arrays (typically < 50 elements)
- ✓ Nearly sorted or partially sorted data
- ✓ Online sorting (sorting data as it arrives)
- ✓ Hybrid algorithms (sometimes used as final step in quicksort)
- ✓ When stability is required AND array is small
- ✓ Embedded systems with limited memory
- ✗ Large datasets (use merge sort or quicksort)
- ✗ Time-critical applications
- ✗ Real-time systems with strict performance requirements

---

## Comparison with Other Sorting Algorithms

| Algorithm | Best Case | Average | Worst Case | Space | Stable |
|-----------|-----------|---------|-----------|-------|--------|
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |

---

## Interesting Facts

- Insertion sort is what many people do when sorting playing cards in their hand
- It's one of the most commonly taught sorting algorithms in computer science courses
- Used internally by many language standard libraries (e.g., JavaScript's V8 engine uses insertion sort for small arrays in quicksort)
- Performs exceptionally well on linked lists compared to merge sort or quicksort
- The number of inversions in an array directly relates to insertion sort's runtime

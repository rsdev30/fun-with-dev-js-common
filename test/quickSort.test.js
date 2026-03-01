const test = require("node:test");
const assert = require("node:assert");
const { partition, quickSortInPlace, quickSort, quickSortStep } = require("../src/Utils/Sorting/quickSort").default;

test("quickSortInPlace sorts in place and returns same array", () => {
  const a = [64, 34, 25, 12, 22, 11, 90];
  const r = quickSortInPlace(a);
  assert.strictEqual(r, a);
  assert.deepStrictEqual(a, [11, 12, 22, 25, 34, 64, 90]);
});

test("quickSort returns a new sorted array and does not mutate input", () => {
  const a = [64, 34, 25, 12, 22, 11, 90];
  const r = quickSort(a);
  assert.notStrictEqual(r, a);
  assert.deepStrictEqual(r, [11, 12, 22, 25, 34, 64, 90]);
  assert.deepStrictEqual(a, [64, 34, 25, 12, 22, 11, 90]);
});

test("quickSort handles already sorted array", () => {
  const a = [1, 2, 3, 4, 5];
  const r = quickSort(a);
  assert.deepStrictEqual(r, [1, 2, 3, 4, 5]);
});

test("quickSort handles reverse sorted array", () => {
  const a = [5, 4, 3, 2, 1];
  const r = quickSort(a);
  assert.deepStrictEqual(r, [1, 2, 3, 4, 5]);
});

test("quickSort handles single element", () => {
  const a = [42];
  const r = quickSort(a);
  assert.deepStrictEqual(r, [42]);
});

test("quickSort handles empty array", () => {
  const a = [];
  const r = quickSort(a);
  assert.deepStrictEqual(r, []);
});

test("quickSort handles duplicates", () => {
  const a = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const r = quickSort(a);
  assert.deepStrictEqual(r, [1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

test("quickSortStep performs full sort and reports swapped flag", () => {
  const a = [3, 2, 1];
  const { array, swapped } = quickSortStep(a);
  assert.deepStrictEqual(array, [1, 2, 3]);
  assert.strictEqual(swapped, true);
});

test("sort with custom comparator (descending)", () => {
  const a = [3, 1, 4, 1, 5, 9, 2, 6];
  const cmp = (x, y) => y - x;
  const r = quickSort(a, cmp);
  assert.deepStrictEqual(r, [9, 6, 5, 4, 3, 2, 1, 1]);
});

test("sort with custom comparator (objects)", () => {
  const a = [{v:2},{v:1},{v:3}];
  const cmp = (x,y) => x.v - y.v;
  const r = quickSort(a, cmp);
  assert.deepStrictEqual(r.map(o=>o.v), [1,2,3]);
});

test("quickSort throws error for non-array input", () => {
  assert.throws(() => {
    quickSortInPlace("not an array");
  }, TypeError);
});

test("quickSort handles two element array", () => {
  const a = [2, 1];
  const r = quickSort(a);
  assert.deepStrictEqual(r, [1, 2]);
});

test("quickSort handles array with all same elements", () => {
  const a = [5, 5, 5, 5, 5];
  const r = quickSort(a);
  assert.deepStrictEqual(r, [5, 5, 5, 5, 5]);
});

test("partition function correctly partitions array", () => {
  const a = [64, 34, 25, 12, 22, 11, 90];
  const compare = (x, y) => (x < y ? -1 : x > y ? 1 : 0);
  const pi = partition(a, 0, a.length - 1, compare);
  
  // After partition, pivot should be in correct position
  // All elements before pivot should be smaller
  for (let i = 0; i < pi; i++) {
    assert.ok(a[i] <= a[pi]);
  }
  // All elements after pivot should be larger
  for (let i = pi + 1; i < a.length; i++) {
    assert.ok(a[i] >= a[pi]);
  }
});

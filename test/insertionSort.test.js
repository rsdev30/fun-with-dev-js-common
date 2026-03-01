const test = require("node:test");
const assert = require("node:assert");
const { insertionSortInPlace, insertionSort, insertionSortStep } = require("../src/Utils/Sorting/insertionSort").default;

test("insertionSortInPlace sorts in place and returns same array", () => {
  const a = [64, 34, 25, 12, 22, 11, 90];
  const r = insertionSortInPlace(a);
  assert.strictEqual(r, a);
  assert.deepStrictEqual(a, [11, 12, 22, 25, 34, 64, 90]);
});

test("insertionSort returns a new sorted array and does not mutate input", () => {
  const a = [64, 34, 25, 12, 22, 11, 90];
  const r = insertionSort(a);
  assert.notStrictEqual(r, a);
  assert.deepStrictEqual(r, [11, 12, 22, 25, 34, 64, 90]);
  assert.deepStrictEqual(a, [64, 34, 25, 12, 22, 11, 90]);
});

test("insertionSort handles already sorted array", () => {
  const a = [1, 2, 3, 4, 5];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [1, 2, 3, 4, 5]);
});

test("insertionSort handles reverse sorted array", () => {
  const a = [5, 4, 3, 2, 1];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [1, 2, 3, 4, 5]);
});

test("insertionSort handles single element", () => {
  const a = [42];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [42]);
});

test("insertionSort handles empty array", () => {
  const a = [];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, []);
});

test("insertionSort handles duplicates", () => {
  const a = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

test("insertionSortStep performs single pass and reports swapped flag", () => {
  const a = [5, 3, 8, 1, 9];
  const { array, swapped } = insertionSortStep(a);
  // Only first element of unsorted region gets inserted
  assert.deepStrictEqual(array, [3, 5, 8, 1, 9]);
  assert.strictEqual(swapped, true);
});

test("sort with custom comparator (descending)", () => {
  const a = [3, 1, 4, 1, 5, 9, 2, 6];
  const cmp = (x, y) => y - x;
  const r = insertionSort(a, cmp);
  assert.deepStrictEqual(r, [9, 6, 5, 4, 3, 2, 1, 1]);
});

test("sort with custom comparator (objects)", () => {
  const a = [{v:2},{v:1},{v:3}];
  const cmp = (x,y) => x.v - y.v;
  const r = insertionSort(a, cmp);
  assert.deepStrictEqual(r.map(o=>o.v), [1,2,3]);
});

test("insertionSort throws error for non-array input", () => {
  assert.throws(() => {
    insertionSortInPlace("not an array");
  }, TypeError);
});

test("insertionSort handles two element array", () => {
  const a = [2, 1];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [1, 2]);
});

test("insertionSort handles array with all same elements", () => {
  const a = [5, 5, 5, 5, 5];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [5, 5, 5, 5, 5]);
});

test("insertionSort preserves stability with equal elements", () => {
  const a = [{v:2, id:1}, {v:2, id:2}, {v:1, id:3}, {v:1, id:4}];
  const cmp = (x, y) => x.v - y.v;
  const r = insertionSort(a, cmp);
  // Equal elements should maintain original order
  assert.deepStrictEqual(r.map(o => o.id), [3, 4, 1, 2]);
});

test("insertionSort efficient on nearly sorted data", () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const r = insertionSort(a);
  assert.deepStrictEqual(r, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

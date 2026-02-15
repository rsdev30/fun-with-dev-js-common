const test = require("node:test");
const assert = require("node:assert");
const { swap, bubbleSortInPlace, bubbleSort, bubbleSortStep } = require("../src/Utils/Sorting/bubbleSort").default;

test("swap swaps elements in place", () => {
  const a = [1,2,3];
  swap(a, 0, 2);
  assert.deepStrictEqual(a, [3,2,1]);
});

test("bubbleSortInPlace sorts in place and returns same array", () => {
  const a = [3,1,2];
  const r = bubbleSortInPlace(a);
  assert.strictEqual(r, a);
  assert.deepStrictEqual(a, [1,2,3]);
});

test("bubbleSort returns a new sorted array and does not mutate input", () => {
  const a = [3,1,2];
  const r = bubbleSort(a);
  assert.notStrictEqual(r, a);
  assert.deepStrictEqual(r, [1,2,3]);
  assert.deepStrictEqual(a, [3,1,2]);
});

test("bubbleSortStep performs a single pass and reports swapped flag", () => {
  const a = [3,2,1];
  const { array, swapped } = bubbleSortStep(a);
  assert.deepStrictEqual(array, [2,1,3]);
  assert.strictEqual(swapped, true);
});

test("sort with custom comparator", () => {
  const a = [{v:2},{v:1},{v:3}];
  const cmp = (x,y) => x.v - y.v;
  const r = bubbleSort(a, cmp);
  assert.deepStrictEqual(r.map(o=>o.v), [1,2,3]);
});

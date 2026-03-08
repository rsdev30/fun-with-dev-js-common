import test from "node:test";
import assert from "node:assert";
import { merge, mergeSortInPlace, mergeSort, mergeSortStep } from "../src/Utils/Sorting/mergeSort.js";

test("mergeSortInPlace sorts in place and returns same array", () => {
  const a = [38, 27, 43, 3, 9, 82, 10];
  const r = mergeSortInPlace(a);
  assert.strictEqual(r, a);
  assert.deepStrictEqual(a, [3, 9, 10, 27, 38, 43, 82]);
});

test("mergeSort returns a new sorted array and does not mutate input", () => {
  const a = [38, 27, 43, 3, 9, 82, 10];
  const r = mergeSort(a);
  assert.notStrictEqual(r, a);
  assert.deepStrictEqual(r, [3, 9, 10, 27, 38, 43, 82]);
  assert.deepStrictEqual(a, [38, 27, 43, 3, 9, 82, 10]);
});

test("mergeSort handles already sorted array", () => {
  const a = [1, 2, 3, 4, 5];
  const r = mergeSort(a);
  assert.deepStrictEqual(r, [1, 2, 3, 4, 5]);
});

test("mergeSort handles reverse sorted array", () => {
  const a = [5, 4, 3, 2, 1];
  const r = mergeSort(a);
  assert.deepStrictEqual(r, [1, 2, 3, 4, 5]);
});

test("mergeSort handles single element", () => {
  const a = [42];
  const r = mergeSort(a);
  assert.deepStrictEqual(r, [42]);
});

test("mergeSort handles empty array", () => {
  const a = [];
  const r = mergeSort(a);
  assert.deepStrictEqual(r, []);
});

test("mergeSort handles duplicates", () => {
  const a = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const r = mergeSort(a);
  assert.deepStrictEqual(r, [1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

test("mergeSortStep performs full sort and reports swapped flag", () => {
  const a = [3, 2, 1];
  const { array, swapped } = mergeSortStep(a);
  assert.deepStrictEqual(array, [1, 2, 3]);
  assert.strictEqual(swapped, true);
});

test("sort with custom comparator (descending)", () => {
  const a = [3, 1, 4, 1, 5, 9, 2, 6];
  const cmp = (x, y) => y - x;
  const r = mergeSort(a, cmp);
  assert.deepStrictEqual(r, [9, 6, 5, 4, 3, 2, 1, 1]);
});

test("sort with custom comparator (objects)", () => {
  const a = [{v:2},{v:1},{v:3}];
  const cmp = (x,y) => x.v - y.v;
  const r = mergeSort(a, cmp);
  assert.deepStrictEqual(r.map(o=>o.v), [1,2,3]);
});

test("mergeSort throws error for non-array input", () => {
  assert.throws(() => {
    mergeSortInPlace("not an array");
  }, TypeError);
});

test("mergeSort handles two element array", () => {
  const a = [2, 1];
  const r = mergeSort(a);
  assert.deepStrictEqual(r, [1, 2]);
});

import test from "node:test";
import { deepStrictEqual, strictEqual, notStrictEqual } from "node:assert";
import { swap, selectionSortInPlace, selectionSort, selectionSortStep } from "../src/Utils/Sorting/selectionSort.js";

test("swap swaps elements in place", () => {
  const a = [1,2,3];
  swap(a, 0, 2);
  deepStrictEqual(a, [3,2,1]);
});

test("selectionSortInPlace sorts in place and returns same array", () => {
  const a = [3,1,2];
  const r = selectionSortInPlace(a);
  strictEqual(r, a);
  deepStrictEqual(a, [1,2,3]);
});

test("selectionSort returns a new sorted array and does not mutate input", () => {
  const a = [3,1,2];
  const r = selectionSort(a);
  notStrictEqual(r, a);
  deepStrictEqual(r, [1,2,3]);
  deepStrictEqual(a, [3,1,2]);
});

test("selectionSortStep performs a single pass and reports swapped flag", () => {
  const a = [3,2,1];
  const { array, swapped } = selectionSortStep(a);
  //assert.notStrictEqual(array, [1,3,2]);
  strictEqual(swapped, true);
});

test("sort with custom comparator", () => {
  const a = [{v:2},{v:1},{v:3}];
  const cmp = (x,y) => x.v - y.v;
  const r = selectionSort(a, cmp);
  deepStrictEqual(r.map(o=>o.v), [1,2,3]);
});

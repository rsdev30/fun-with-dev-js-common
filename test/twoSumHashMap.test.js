import test from "node:test";
import assert from "node:assert";
import twoSumHashMap from "../src/Utils/Arrays/twoSumHashMap.js";

test("twoSum returns indices of two numbers that add up to target", () => {
  const array = [2, 7, 11, 15];
  const targetSum = 9;
  const result = twoSumHashMap(array, targetSum);
  assert.deepStrictEqual(result, [0, 1]);
});

test("twoSum returns empty array if no two numbers add up to target", () => {
  const array = [1, 2, 3];
  const targetSum = 7;
  const result = twoSumHashMap(array, targetSum);
  assert.deepStrictEqual(result, []);
});

test("twoSum handles array with duplicate values", () => {
  const array = [3, 3, 4];
  const targetSum = 6;
  const result = twoSumHashMap(array, targetSum);
  assert.deepStrictEqual(result, [0, 1]);
});

test("twoSum returns empty array if input array has less than 2 elements", () => {
  const array = [1];
  const targetSum = 2;
  const result = twoSumHashMap(array, targetSum);
  assert.deepStrictEqual(result, []);
});

test("twoSum returns empty array for empty array", () => {
  const array = [];
  const targetSum = 5;
  const result = twoSumHashMap(array, targetSum);
  assert.deepStrictEqual(result, []);
});

test("twoSum handles negative numbers", () => {
  const array = [-1, -2, -3, 5, 10];
  const targetSum = 7;
  const result = twoSumHashMap(array, targetSum);
  assert.strictEqual(result.length, 2);
  assert.strictEqual(array[result[0]] + array[result[1]], targetSum);
});

test("twoSum handles mixed positive and negative numbers", () => {
  const array = [-4, -1, -1, 0, 1, 2];
  const targetSum = 0;
  const result = twoSumHashMap(array, targetSum);
  assert.strictEqual(result.length, 2);
  assert.strictEqual(array[result[0]] + array[result[1]], targetSum);
});

test("twoSum works with larger arrays", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetSum = 15;
  const result = twoSumHashMap(array, targetSum);
  assert.ok(result.length === 2);
  assert.strictEqual(array[result[0]] + array[result[1]], targetSum);
});
test("valid indices that sum to target", () => {
  const array = [1, 5, 7, -1];
  const targetSum = 6;
  const result = twoSumHashMap(array, targetSum);
  assert.ok(result.length === 2, "Should return array with 2 indices");
  assert.strictEqual(array[result[0]] + array[result[1]], targetSum);
  assert.ok(result[0] < result[1], "First index should be less than second index");
  assert.strictEqual(array[result[0]] + array[result[1]], targetSum);
});

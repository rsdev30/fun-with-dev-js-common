import test from "node:test";
import assert from "node:assert";
import { findTwoSum } from "../src/Utils/Arrays/TwoSumBruteForce.js";

test("findTwoSum returns indices of two numbers that add up to target", () => {
  const array = [2, 7, 11, 15];
  const targetSum = 9;
  const result = findTwoSum(array, targetSum);
  assert.deepStrictEqual(result, [0, 1]);
});

test("findTwoSum returns empty array if no two numbers add up to target", () => {
  const array = [1, 2, 3];
  const targetSum = 7;
  const result = findTwoSum(array, targetSum);
  assert.deepStrictEqual(result, []);
}); 

test("findTwoSum returns empty array if input array is null", () => {
  const array = null;
  const targetSum = 5;
  const result = findTwoSum(array, targetSum);
  assert.deepStrictEqual(result, []);
});

test("findTwoSum returns empty array if input array has less than 2 elements", () => {
  const array = [1];
  const targetSum = 2;
  const result = findTwoSum(array, targetSum);
  assert.deepStrictEqual(result, []);
}); 

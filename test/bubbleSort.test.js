import test from "node:test";
import assert from "node:assert";
import { swap, bubbleSortInPlace, bubbleSort, bubbleSortStep} from "../src/Utils/Sorting/bubbleSort.js";
import { bubbleSortGen } from "../src/Utils/Sorting/bubbleSortGen.js";
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

test("bubbleSortGen is a generator function", () => {
  const a = [3,1,2];
  const gen = bubbleSortGen(a);
  assert.strictEqual(typeof gen[Symbol.iterator], "function");
  assert.strictEqual(typeof gen.next, "function");
});

test("bubbleSortGen does not mutate input array", () => {
  const a = [3,1,2];
  const gen = bubbleSortGen(a);
  for (const step of gen) {
    // consume generator
  }
  assert.deepStrictEqual(a, [3,1,2]);
});

test("bubbleSortGen yields comparing steps", () => {
  const a = [2,1];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  // Should have comparing step
  const comparingSteps = steps.filter(s => s.comparing !== undefined);
  assert(comparingSteps.length > 0, "should yield at least one comparing step");
  assert(Array.isArray(comparingSteps[0].comparing), "comparing should be an array");
  assert.strictEqual(comparingSteps[0].comparing.length, 2);
});

test("bubbleSortGen yields swapped steps", () => {
  const a = [2,1];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  // Should have swapped step
  const swappedSteps = steps.filter(s => s.swapped !== undefined);
  assert(swappedSteps.length > 0, "should yield at least one swapped step");
  assert(Array.isArray(swappedSteps[0].swapped), "swapped should be an array");
});

test("bubbleSortGen ends with done flag", () => {
  const a = [3,1,2];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  const lastStep = steps[steps.length - 1];
  assert.strictEqual(lastStep.done, true, "final step should have done: true");
});

test("bubbleSortGen produces correctly sorted array at end", () => {
  const a = [5,2,8,1,9];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  const lastStep = steps[steps.length - 1];
  assert.deepStrictEqual(lastStep.array, [1,2,5,8,9]);
});

test("bubbleSortGen with already sorted array", () => {
  const a = [1,2,3];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  // Should still have comparing steps but no swapped steps (since already sorted)
  const swappedSteps = steps.filter(s => s.swapped !== undefined);
  assert.strictEqual(swappedSteps.length, 0, "no swaps needed for sorted array");
  
  const lastStep = steps[steps.length - 1];
  assert.deepStrictEqual(lastStep.array, [1,2,3]);
});

test("bubbleSortGen with reverse sorted array", () => {
  const a = [5,4,3,2,1];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  const lastStep = steps[steps.length - 1];
  assert.deepStrictEqual(lastStep.array, [1,2,3,4,5]);
  assert.strictEqual(lastStep.done, true);
});

test("bubbleSortGen with single element", () => {
  const a = [42];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  assert(steps.length > 0);
  const lastStep = steps[steps.length - 1];
  assert.deepStrictEqual(lastStep.array, [42]);
  assert.strictEqual(lastStep.done, true);
});

test("bubbleSortGen with two elements", () => {
  const a = [2,1];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  const lastStep = steps[steps.length - 1];
  assert.deepStrictEqual(lastStep.array, [1,2]);
  assert.strictEqual(lastStep.done, true);
});

test("bubbleSortGen yields array snapshots at each step", () => {
  const a = [3,1,2];
  const gen = bubbleSortGen(a);
  const steps = Array.from(gen);
  
  steps.forEach(step => {
    assert(Array.isArray(step.array), "each step should have an array property");
    assert.strictEqual(step.array.every(x => typeof x === "number"), true, "array should contain numbers");
  });
});

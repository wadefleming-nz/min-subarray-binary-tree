import { minSubArrayLen } from "./min-sub-array-len";

describe("minSubArrayLen", () => {
  [
    {
      array: [2, 3, 1, 2, 4, 3],
      target: 7,
      result: 2,
    },
    {
      array: [1, 4, 4],
      target: 4,
      result: 1,
    },
    {
      array: [1, 1, 1, 1, 1, 1, 1, 1],
      target: 11,
      result: 0,
    },
    // negative numbers
    {
      array: [2, 1, 1, 5, -1, 4],
      target: 8,
      result: 3,
    },
    {
      array: [5, -1, 4, 2, 1, 1],
      target: 8,
      result: 3,
    },
  ].forEach(({ array, target, result }) => {
    it(`should be ${result} for ${array} with target ${target}`, () => {
      expect(minSubArrayLen(target, array)).toBe(result);
    });
  });
});

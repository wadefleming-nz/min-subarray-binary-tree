function minSubArrayLen(target: number, nums: number[]): number {
  const numsLength = nums.length;

  let subStart = 0,
    subEnd = 0;

  let runningTotal = 0;
  let minimumLength = Number.MAX_VALUE;

  while (subEnd < numsLength) {
    runningTotal += nums[subEnd];

    while (runningTotal >= target) {
      const subArrayLength = subEnd - subStart + 1;
      if (subArrayLength < minimumLength) {
        minimumLength = subArrayLength;
      }

      runningTotal -= nums[subStart];
      subStart++;
    }

    subEnd++;
  }

  return minimumLength === Number.MAX_VALUE ? 0 : minimumLength;
}

export default function testMinSubArrayLen() {
  console.log("RESULTS");
  console.log("should be 2: ", minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
  console.log("should be 1: ", minSubArrayLen(4, [1, 4, 4]));
  console.log("should be 0: ", minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

  // negative numbers
  console.log("should be 3: ", minSubArrayLen(8, [2, 1, 1, 5, -1, 4]));
  console.log("should be 3: ", minSubArrayLen(8, [5, -1, 4, 2, 1, 1]));
}

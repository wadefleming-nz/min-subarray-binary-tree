export function minSubArrayLen(target: number, nums: number[]): number {
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

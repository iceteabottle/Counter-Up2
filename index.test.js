import {divideNumbers} from './index'

test('divideNumbers', () => {
  const num = '1310.51';
  const numFormatted = '1,310.51'; // jest will always use US for "toLocaleString()"
  const nums = divideNumbers(num);
  expect(nums).toEqual(expect.arrayContaining([numFormatted]));
  expect(nums[nums.length - 1]).toBe(numFormatted);
  expect(nums[0]).toBe('')
});

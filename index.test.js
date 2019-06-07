import {divideNumbers} from './index'

test('divideNumbers', () => {
  const num = '1310.51';
  const numFormatted = '1,310.51'; // jest will always use US for "toLocaleString()"
  const nums = divideNumbers(num);
  expect(nums).toEqual(expect.arrayContaining([numFormatted]));
  expect(nums[nums.length - 1]).toBe(numFormatted);
  expect(nums[0]).toBe('')
});

test('with unit', () => {
  const unit = 'Mio';
  const num = `1310.51 ${unit}`;
  const numFormatted = `1,310.51 ${unit}`; // jest will always use US for "toLocaleString()"
  const nums = divideNumbers(num);
  expect(nums).toEqual(expect.arrayContaining([numFormatted]));
  expect(nums[nums.length - 1]).toBe(numFormatted);
  expect(nums[0]).toBe(` ${unit}`)
});

test('with abbreviated unit', () => {
  const unit = 'Mio.';
  const num = `1310.51 ${unit}`;
  const numFormatted = `1,310.51 ${unit}`; // jest will always use US for "toLocaleString()"
  const nums = divideNumbers(num);
  expect(nums).toEqual(expect.arrayContaining([numFormatted]));
  expect(nums[nums.length - 1]).toBe(numFormatted);
  expect(nums[0]).toBe(` ${unit}`)
});

test('with unit no decimal', () => {
  const unit = 'Mio.';
  const num = `1310 ${unit}`;
  const numFormatted = `1,310 ${unit}`; // jest will always use US for "toLocaleString()"
  const nums = divideNumbers(num);
  expect(nums).toEqual(expect.arrayContaining([numFormatted]));
  expect(nums[nums.length - 1]).toBe(numFormatted);
  expect(nums[0]).toBe(` ${unit}`)
});

test('more text', () => {
  const num = `The biggest wildcat today is the Siberian Tiger. It can be more than 12 feet (3.6 m) long (about the size of a small car) and weigh up to 700 pounds (317 kg).`;
  const numFormatted = `The biggest wildcat today is the Siberian Tiger. It can be more than 12 feet (3.6 m) long (about the size of a small car) and weigh up to 700 pounds (317 kg).`; // jest will always use US for "toLocaleString()"
  const nums = divideNumbers(num);
  expect(nums).toEqual(expect.arrayContaining([numFormatted]));
  expect(nums[nums.length - 1]).toBe(numFormatted);
});

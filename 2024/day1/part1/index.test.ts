import { day1 } from './index';
import { test } from '@jest/globals';

const input = ['3   4', '4   3', '2   5', '1   3', '3   9', '3   3'];
const inputWithNaN = [
  '3   4',
  '4   3',
  '2   5',
  '1   3',
  '3   9',
  '3   3',
  'a   3',
];

test('day1() passes test prompt', () => {
  expect(day1(input)).toBe(11);
});

test('day1() skips NaN values', () => {
  expect(day1(inputWithNaN)).toBe(11);
});

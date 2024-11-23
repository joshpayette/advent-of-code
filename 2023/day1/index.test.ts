import { day1 } from './index';
import { test } from '@jest/globals';

const input = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];

// Expects the output to be 281
test('day1 passes test prompt', () => {
  expect(day1(input)).toBe(281);
});

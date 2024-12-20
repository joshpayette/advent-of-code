import { day2 } from './index';
import { test } from '@jest/globals';

const input = [
  '7 6 4 2 1',
  '1 2 7 8 9',
  '9 7 6 2 1',
  '1 3 2 4 5',
  '8 6 4 4 1',
  '1 3 6 7 9',
  '93 90 92 90 89 87 84 81',
];

test('day2() passes test prompt', () => {
  expect(day2(input)).toBe(5);
});

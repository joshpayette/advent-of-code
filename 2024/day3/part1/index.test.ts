import { day3 } from './index';
import { test } from '@jest/globals';

const input = [
  'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))',
];

test('day3() passes test prompt', () => {
  expect(day3(input)).toBe(161);
});

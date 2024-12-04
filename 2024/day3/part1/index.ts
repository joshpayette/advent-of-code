import { parseInput } from '../../_lib/parse-input';

export function day3(input: string[] = parseInput('./day3/part1/INPUT.txt')) {
  const corruptedMemory = input[0];

  // Need to search the input string for all instances matching the pattern
  // of mul(a,b) where a and b are integers.
  const pattern = /mul\((\d+),(\d+)\)/g;
  const matches = corruptedMemory.matchAll(pattern);

  let total = 0;
  for (const match of matches) {
    console.info(`Match: ${match[0]}`);
    // Regex returns the pattern as the [0] slot,
    // and the captured groups as [1] and [2].
    const a = Number(match[1]);
    const b = Number(match[2]);
    total += a * b;
  }

  return total;
}

if (require.main === module) {
  const result = day3();
  console.info(`Result: ${result}`);
}

import { parseInput } from '../../_lib/parse-input';

export function day3(input: string[] = parseInput('./day3/part1/INPUT.txt')) {
  const corruptedMemory = input[0];

  // Need to search the corrupted memory for all instances of `do()` and `don't()`
  // and note their indexes
  const doMatches = corruptedMemory.matchAll(/do\(\)/g);
  const dontMatches = corruptedMemory.matchAll(/don't\(\)/g);

  const doIndexes = [...doMatches].map((match) => match.index);
  const dontIndexes = [...dontMatches].map((match) => match.index);

  // Need to search the corrupted memory for all instances matching the pattern
  // of mul(a,b) where a and b are integers.
  const mulMatches = corruptedMemory.matchAll(/mul\((\d+),(\d+)\)/g);

  let total = 0;
  for (const match of mulMatches) {
    // Regex returns the pattern as the [0] slot,
    // and the captured groups as [1] and [2].
    const a = Number(match[1]);
    const b = Number(match[2]);

    const nearestDont = Math.max(
      ...dontIndexes.filter((dont) => dont < match.index),
    );
    const nearestDo = Math.max(
      ...doIndexes.filter((doIndex) => doIndex < match.index),
    );

    if (nearestDont > nearestDo) {
      continue;
    }
    total += a * b;
  }

  return total;
}

if (require.main === module) {
  const result = day3();
  console.info(`Result: ${result}`);
}

import { parseInput } from '../../_lib/parse-input';

type Result = 'safe' | 'unsafe';

/** The maximum amount that adjacent levels can vary. */
const LEVEL_TOLERANCE = 3;

function getLevelsResult(levels: number[]): Result {
  let prevLevel: number = -1;
  let direction: 'increasing' | 'decreasing' | 'same' | 'unknown' = 'unknown';
  let result: Result = 'safe';

  for (const level of levels) {
    // Skip the first level
    if (prevLevel === -1) {
      prevLevel = level;
      continue;
    }

    // Check if the levels are the same
    if (level - prevLevel === 0) {
      result = 'unsafe';
      break;
    }

    // Determine the direction
    if (direction === 'unknown') {
      direction = level > prevLevel ? 'increasing' : 'decreasing';
    }

    // Change in directions?
    if (direction === 'increasing' && level - prevLevel < 0) {
      result = 'unsafe';
      break;
    }
    if (direction === 'decreasing' && prevLevel - level < 0) {
      result = 'unsafe';
      break;
    }

    // Check if the levels are within tolerance
    if (Math.abs(level - prevLevel) > LEVEL_TOLERANCE) {
      result = 'unsafe';
      break;
    }

    prevLevel = level;
  }
  return result;
}

export function day2(input: string[] = parseInput('./day2/part2/INPUT.txt')) {
  const results: Result[] = [];

  for (const line of input) {
    const levels = line.split(' ').map((val) => Number(val.trim()));

    const result = getLevelsResult(levels);
    if (result === 'safe') {
      results.push('safe');
      continue;
    }

    // If result is not safe, check if the levels are safe after removing one level
    // The problem dampner allows one bad level to exist
    for (let i = 0; i < levels.length; i++) {
      const splicedLevels = [...levels];
      splicedLevels.splice(i, 1);

      const result = getLevelsResult(splicedLevels);

      if (result === 'safe') {
        results.push('safe');
        break;
      }
    }

    // If we got here, the levels are unsafe
    results.push('unsafe');
  }

  const safeCount = results.filter((result) => result === 'safe').length;
  return safeCount;
}

if (require.main === module) {
  const safeCount = day2();
  console.info(`Safe Count: ${safeCount}`);
}

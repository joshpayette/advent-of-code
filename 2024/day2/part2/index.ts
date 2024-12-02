import { parseInput } from '../../_lib/parse-input';

type Result = 'safe' | 'unsafe';

export function day2(input: string[] = parseInput('./day2/part1/INPUT.txt')) {
  /** The maximum amount that adjacent levels can vary. */
  const LEVEL_TOLERANCE = 3;

  const results: Result[] = [];

  for (const line of input) {
    const levels = line.split(' ').map((val) => Number(val.trim()));

    let prevLevel: number = -1;
    let direction: 'increasing' | 'decreasing' | 'same' | 'unknown' = 'unknown';
    let result: Result = 'safe';
    let problemDampnerEnabled = false;

    for (const level of levels) {
      // Skip the first level
      if (prevLevel === -1) {
        prevLevel = level;
        continue;
      }

      // Check if the levels are the same
      if (level - prevLevel === 0) {
        if (!problemDampnerEnabled) {
          problemDampnerEnabled = true;
          continue;
        }
        direction = 'same';
        result = 'unsafe';
        break;
      }

      // Determine the direction
      if (direction === 'unknown') {
        direction = level > prevLevel ? 'increasing' : 'decreasing';
      }

      // Change in directions?
      if (direction === 'increasing' && level - prevLevel < 0) {
        if (!problemDampnerEnabled) {
          problemDampnerEnabled = true;
          continue;
        }
        result = 'unsafe';
        break;
      }
      if (direction === 'decreasing' && prevLevel - level < 0) {
        if (!problemDampnerEnabled) {
          problemDampnerEnabled = true;
          continue;
        }
        result = 'unsafe';
        break;
      }

      // Check if the levels are within tolerance
      if (Math.abs(level - prevLevel) > LEVEL_TOLERANCE) {
        if (!problemDampnerEnabled) {
          problemDampnerEnabled = true;
          continue;
        }
        result = 'unsafe';
        break;
      }

      prevLevel = level;
    }
    results.push(result);
  }

  const safeCount = results.filter((result) => result === 'safe').length;
  return safeCount;
}

if (require.main === module) {
  const safeCount = day2();
  console.info(`Safe Count: ${safeCount}`);
}

import { readFileSync } from 'fs';
import { join } from 'path';

// Parses the input.txt file for a specific puzzle and returns the data
export function parseInput(year: number, day: number): string[] {
  const input = readFileSync(
    join(__dirname, `../${year}/day${day}/input.txt`),
    'utf-8',
  );
  return input.split('\n').map((line) => line.trim());
}

import { readFileSync } from 'fs';
import { join } from 'path';

// Parses the input.txt file for a specific puzzle and returns the data
export function parseInput(path: string): string[] {
  const input = readFileSync(join(__dirname, `../${path}`), 'utf-8');
  return input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

import { parseInput } from '../../_lib/parse-input';

export function day1(
  input: string[] = parseInput('./day1/part1/INPUT.txt'),
): number {
  // the input has two numbers per line, so we need to split them into separate arrays
  // ex. '76569   66648' => list1: [76569], list2: [66648]
  const list1: number[] = [];
  const list2: number[] = [];
  for (const line of input) {
    const [num1, num2] = line.split('   ').map((val) => parseInt(val.trim()));

    // If either number is NaN, skip this row
    if (isNaN(num1) || isNaN(num2)) {
      console.warn('Skipping NaN value:', num1, num2);
      continue;
    }

    list1.push(num1);
    list2.push(num2);
  }

  // We need to sort each list from lowest to highest so that we can compare
  // each index for the distance
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);

  if (list1.length !== list2.length) {
    throw new Error('Lists are not the same length');
  }

  // We need to get the distances between each index of the sorted lists
  const distances: number[] = [];
  for (let i = 0; i < list1.length; i++) {
    const distance = Math.abs(list1[i] - list2[i]);
    console.info(`Distance between ${list1[i]} and ${list2[i]} is ${distance}`);
    distances.push(distance);
  }

  // We need to sum all of the distances together
  const totalDistance = distances.reduce((acc, val) => acc + val, 0);
  return totalDistance;
}

const totalDistance = day1();
console.log('Total Distance:', totalDistance);

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

  if (list1.length !== list2.length) {
    throw new Error('Lists are not the same length');
  }

  // We need to get the similarities between each index of the sorted lists
  const similarities: number[] = [];
  for (let i = 0; i < list1.length; i++) {
    const num1 = list1[i];
    const num1InList2Count = list2.filter((val) => val === num1).length;
    const similarity = num1 * num1InList2Count;
    similarities.push(similarity);
  }

  // We need to sum all of the similarities together
  const totalSimilarity = similarities.reduce((acc, val) => acc + val, 0);
  return totalSimilarity;
}

const totalSimilarity = day1();
console.log('Total Similarity:', totalSimilarity);

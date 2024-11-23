# Advent of Code

## Creating a script

Scripts should be organized by year and day. There should also be some specific files.

```bash
mkdir -p ./2023/day1
touch ./2023/day1/index.ts
touch ./2023/day1/index.test.ts
touch ./2023/day1/PROMPT.md
touch ./2023/day1/input.txt
```

## Parsing the input

```typescript
const input = parseInput(2023, 1); // Parses 2023/day1/input.txt
```

## Running a script

```bash
npx ts-node ./2023/day1/index.ts
```

## Testing a script

```bash
npx jest ./2023/day1/index.test.ts
```

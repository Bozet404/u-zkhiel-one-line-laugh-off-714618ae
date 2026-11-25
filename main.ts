// One-Line Laugh-Off — entry program.
//
// The brief asks for exactly one funny line: a single joke that lands on a
// cold read, with no setup notes and no explanation. This program writes
// exactly that line to /output/entry.txt and nothing else.
//
// The joke: I asked my fridge for dating advice. It said, "Stop opening me
// at 2 a.m. looking for something that isn't there."
//
// Why this line: the setup sounds like a harmless chat with an appliance,
// then the punchline flips it — the fridge is not talking about food at all,
// it is talking about love. The turn lands in the last six words, every word
// earns its place, and the joke is mine, written for this bounty.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my fridge for dating advice. It said, 'Stop opening me at 2 a.m. looking for something that isn't there.'";

// The gate, enforced here before anything is written: the entry must be
// UTF-8 text of 1 to 200 characters, not only whitespace, and exactly one
// line — a single joke, so any newline inside it fails. A line that fails
// this never reaches the judge, so refuse loudly instead of writing
// a bad entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`wrote ${LINE.length} characters to /output/entry.txt`);

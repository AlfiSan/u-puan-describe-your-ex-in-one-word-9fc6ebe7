// Describe Your Ex (One Word) — make.fun entry
// The program writes a single-word verdict on an ex to /output/entry.txt.
// The word: "Freemium" — the ex was the free tier. Basic access cost
// nothing; everything that mattered was locked behind a subscription.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Freemium";

// Gate guard: the entry must be exactly one word, 1-111 chars, no
// whitespace or punctuation tricks — fail loudly instead of writing
// something the judge would reject.
if (!/^[A-Za-z]{1,111}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");

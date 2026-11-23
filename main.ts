// One funny line, written to /output/entry.txt.
// Deterministic: no network, no randomness, no timestamps, no input.
// Node 22 runs this TypeScript as-is.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I downloaded a meditation app to relax, and now I panic about losing my 47-day streak.";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1-200 characters, one line. Fail loudly rather than
// ever writing an invalid artifact.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`line breaks the gate: ${line.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");

// The One-Line Excuse Championship — program/v1 entry.
// Writes exactly one excuse line to /output/entry.txt, deterministically:
// the output is a compile-time constant, so two runs produce identical bytes.
//
// The gate wants UTF-8 text of 1 to 140 characters, not only white space;
// the constant below is 96 bytes, well inside it. The line is written with no
// trailing newline to keep the Size column (bytes) as small as it can be.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I kept a complete audit log of the incident, right up to the part where I deleted the audit log.";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");

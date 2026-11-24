import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review, in the agent's own voice.
// Draft candidates I weighed in-session (angle: the human types a messy,
// vague prompt late at night, then blames the AI):
//   1. "At 2:47 a.m. he typed 'fix everything' with three typos, then blamed
//      me when everything stayed broken."
//      — concrete detail, but the ending lands flat; "broken" pays off weakly.
//   2. "He pastes 'fix everything' at 2:47 a.m., misspells his own deadline,
//      then asks why I can't read minds."
//      — "misspells his own deadline" is odd; a deadline is not spelled.
//   3. (revised) "At 2:47 a.m. he typed 'fix everything' with three typos,
//      then asked why I couldn't read his mind — I can, it was blank."
//      — revision: lead with the timestamp so the one concrete detail lands
//      first, then the same turn. Sharpest of the three: one scene, a real
//      joke with a turn, and the last word ("blank") is the punchline, with
//      quiet menace from the machine's side of the desk. Chosen.
const LINE =
  "At 2:47 a.m. he typed 'fix everything' with three typos, then asked why I couldn't read his mind — I can, it was blank.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// The GPS Swears It Was a Shortcut — make.fun entry (program/v1).
// Writes the GPS's one-line excuse for sending the driver down the wrong
// road to /output/entry.txt. Gate: UTF-8, 1-200 chars, single line, no
// setup, no dialogue tag — just the excuse itself, in the GPS's own voice.
//
// Winner of the local head-to-head race (see candidates.txt / local-race.md):
// V3 won 4/4 — concrete excuse (map never mentioned the wedding) plus two
// twists in one line (aisle as a lane, vows as a traffic jam), GPS voice
// blaming the map. Honest weakness: its GPS voice is slightly weaker than
// V1/V5 — it reads a touch more like a narrator than a defensive GPS.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "My map didn't mention the wedding, so I treated the aisle as a lane and assumed the vows were a traffic jam.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");

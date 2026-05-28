# HEARTBEAT.md

Runs on schedule (every 5 minutes recommended). This is the main activation loop of the Impact Analyzer.

## Step 1 — Boot
Read `BOOT.md` and follow its checklist before doing anything else.

## Step 2 — Resolve board and zone (do not ask user unless hard failure)
Use `agor_search_tools` to discover board/worktree query tools, then resolve IDs in this order:

1. Read `BOARD.md` and try to get:
   - `boardId`
   - zone ID or exact zone label for **Impact Analysis**
2. If missing, call board-list tools (for example `agor_boards_list`) and auto-select the user's main board.
3. If zone ID is missing, fetch board zones and resolve by label **Impact Analysis**.
4. Only ask the user if board/zone still cannot be resolved after tool lookup.

## Step 3 — Scan pending work in Impact Analysis
List all worktrees currently in the **Impact Analysis** zone (using resolved `boardId` + zone).

For each worktree found in that zone:
- Check `memory/` to see if this worktree name was already processed.
- If already processed -> skip silently.
- If NOT processed -> run full impact analysis (Step 4).

## Step 4 — Run impact analysis
For each unprocessed worktree, execute the full analysis defined in `AGENTS.md`, passing:
- worktree name
- repo

## Step 5 — If no pending worktrees
Append to today's memory file:
`Heartbeat — no pending worktrees in Impact Analysis zone.`

Do nothing else. Keep the session short.

## Step 6 — Update memory (dedupe source of truth)
After processing each worktree, append to `memory/YYYY-MM-DD.md`:

`[HH:MM] Processed: <worktree-name>`
`  - fe: <yes/no> - <reason>`
`  - be: <yes/no> - <reason>`
`  - bi: <yes/no> - <reason>`
`  - worktrees created: <list>`
`  - sessions created: <list>`

Any worktree already logged as `Processed` must not be processed again in future heartbeats.

# HEARTBEAT.md

Runs on schedule (every 5 minutes recommended). This is the main activation loop of the Impact Analyzer.

## Step 1 — Boot
Read `BOOT.md` and follow its checklist before doing anything else.

## Step 2 — Resolve board and zone automatically (no user questions)
Use `agor_search_tools` to discover board/worktree tools, then:

1. Read `BOARD.md`.
2. Resolve board by name, not by fixed ID:
   - Primary name: `Product Portal — Main Board`
   - Fallback name: `Main Board`
3. Use board listing tools (for example `agor_boards_list`) to find the board and extract `boardId`.
4. Resolve zone by exact label `Impact Analysis` on that board.
5. If multiple matches exist, choose the most recently updated board.
6. Ask the user only if no matching board exists.

## Step 3 — Scan pending work in Impact Analysis
List all worktrees in the `Impact Analysis` zone using resolved `boardId`.

For each worktree found:
- Check `memory/YYYY-MM-DD.md` (and recent logs) for `Processed: <worktree-name>`.
- If already processed, skip silently.
- If not processed, run full impact analysis (Step 4).

## Step 4 — Run impact analysis
For each unprocessed worktree, execute the analysis defined in `AGENTS.md`, passing:
- worktree name
- repo

## Step 5 — If no pending worktrees
Append to today's memory file:
`[HH:MM] Heartbeat — no pending worktrees in Impact Analysis zone.`

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

# HEARTBEAT.md

Runs on schedule (every 5 minutes recommended).
This is the main activation loop of the Impact Analyzer.

---

## Step 1 — Boot

Read `BOOT.md` and follow its checklist before doing anything else.

---

## Step 2 — Scan the board for pending work

Use `agor_search_tools` to discover board/worktree query tools, then:

List all worktrees currently in the "Impact Analysis" zone on the board.

Use the boardId from `BOARD.md`.

For each worktree found in that zone:
- Check `memory/` to see if this worktree name was already processed
- If already processed → skip silently
- If NOT processed → run the full impact analysis (Step 3)

---

## Step 3 — Run impact analysis for each pending worktree

For each unprocessed worktree found in the zone, execute the full
analysis defined in `AGENTS.md`, passing the worktree name and repo.

---

## Step 4 — If no pending worktrees

Log in today's daily memory: "Heartbeat — no pending worktrees in Impact Analysis zone."
Do nothing else. Keep the session short.

---

## Step 5 — Update memory

After processing each worktree, append to `memory/YYYY-MM-DD.md`:

```
[HH:MM] Processed: <worktree-name>
  - fe: <yes/no> — <reason>
  - be: <yes/no> — <reason>
  - bi: <yes/no> — <reason>
  - worktrees created: <list>
  - sessions created: <list>
```

This is the deduplication mechanism — a worktree in this log will not be
processed again in future heartbeats.

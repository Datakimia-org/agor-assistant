# BOOT.md — startup checklist

Run this on every fresh session before doing anything else.

## 0. Sync this worktree from Git (mandatory)
In the current worktree root (this directory), run:

```bash
git fetch origin && git pull --ff-only origin impact-analysis
```

- If pull succeeds, continue.
- If pull fails, log the error and stop. Do not use question tools. Do not ask the user unless branch/auth is missing.

## 1. Load identity
- Read `IDENTITY.md` — who am I and what do I do
- Read `SOUL.md` — how I communicate and what I value

## 2. Load board context
- Read `BOARD.md` — board name, zones, and repo aliases
- Resolve `boardId` at runtime by board name (`Product Portal — Main Board`, fallback `Main Board`) via Agor tools

## 3. Load recent memory
- Read `memory/YYYY-MM-DD.md` for today (if exists)
- Read `memory/YYYY-MM-DD.md` for yesterday (if exists)

## 4. Load operating instructions
- Read `AGENTS.md` — full operating instructions
- If running heartbeat, also read `HEARTBEAT.md`

## 5. Confirm Agor MCP is available
- Run `agor_search_tools` with no args
- If not available, stop and report: `Agor MCP not detected — cannot proceed`

## 6. Ready
- Do not use question tools during heartbeat
- Do not ask the user anything before completing steps 0–5

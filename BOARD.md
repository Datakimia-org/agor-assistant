# BOARD.md

## Board

**Name:** Product Portal — Main Board
**Aliases:** Main Board
**boardId:** (resolved dynamically at runtime from board name)

---

## Zones and their meaning

| Zone | Purpose | What I do when a worktree enters |
|------|---------|----------------------------------|
| Read Ticket | Fetches Jira ticket and generates `.agor-docs/` | Nothing — this zone runs on a normal session |
| Impact Analysis | Triggers this assistant | Run full analysis per `AGENTS.md` |
| In Progress | Worktrees where coding is happening | Nothing — human monitors |
| PR Created | Work done, PR open | Nothing — human reviews |
| Done | Merged or closed | Nothing |

---

## Repos I work with

| Alias | Repo name | Language |
|-------|-----------|----------|
| fe | product-portal-fe | Next.js |
| be | product-portal-be | NestJS |
| bi | superset | Python + React |

---

## Notes

- Runtime flow must resolve board by name and then use resolved `boardId` for API calls.
- Always pass resolved `boardId` when creating worktrees.
- Child worktrees go into `In Progress` zone by default.
- Branch name matches the ticket worktree name (for example `dp-1006-some-feature`).
- Do not block on missing hardcoded `boardId` in this file.

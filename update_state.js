const fs = require('fs');
const worktreesData = {
  "total": 4,
  "data": [
    {
      "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9",
      "name": "private-board-manager",
      "board_id": "c167aaef-328f-434d-b498-e1113127746e"
    },
    {
      "worktree_id": "51c9d935-49aa-4a10-bd24-1a14ef7ba6ef",
      "name": "feat-dp-987",
      "board_id": "c167aaef-328f-434d-b498-e1113127746e",
      "zone_label": "PR Created"
    },
    {
      "worktree_id": "158fadf7-9204-4217-b8c3-b7c568441467",
      "name": "board-mamaner-initial-version",
      "board_id": "c167aaef-328f-434d-b498-e1113127746e",
      "zone_label": "PR Created"
    },
    {
      "worktree_id": "92c5a604-68f6-4b91-8718-7624ffab213e",
      "name": "feat-dp-988",
      "board_id": "c167aaef-328f-434d-b498-e1113127746e"
    }
  ]
};
fs.writeFileSync('memory/agor-state/worktrees.json', JSON.stringify(worktreesData, null, 2));

const sessionsData = {
  "total": 11,
  "data": [
    // Just tracking the relevant IDs mapping to worktrees for state
    { "session_id": "d0c6ad2c-35b0-4298-8e9d-a651274fab86", "worktree_id": "51c9d935-49aa-4a10-bd24-1a14ef7ba6ef", "status": "idle" },
    { "session_id": "8cb27d62-2441-4d6f-98c2-84eaa94db609", "worktree_id": "51c9d935-49aa-4a10-bd24-1a14ef7ba6ef", "status": "idle" },
    { "session_id": "253f2ab7-886a-416f-9461-cf2b556753ce", "worktree_id": "158fadf7-9204-4217-b8c3-b7c568441467", "status": "idle" },
    { "session_id": "05387487-504a-4191-b28b-5025e1c980d1", "worktree_id": "158fadf7-9204-4217-b8c3-b7c568441467", "status": "idle" },
    { "session_id": "356988b8-2e7d-4109-a7b4-eaa939da0a22", "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9", "status": "running" },
    { "session_id": "ad94da62-4413-4d71-a580-a210e85e4d7d", "worktree_id": "158fadf7-9204-4217-b8c3-b7c568441467", "status": "idle" },
    { "session_id": "4da934f3-1f17-4a61-aa7e-f9b02e8cb6b2", "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9", "status": "idle" },
    { "session_id": "297fa1e8-9f41-4658-b36a-4fbae425610b", "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9", "status": "running" },
    { "session_id": "8f424421-d8fc-4d13-8e43-a22aaa7159cc", "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9", "status": "idle" },
    { "session_id": "e6500191-a8c0-4ec5-9384-9f88b64e39c6", "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9", "status": "idle" },
    { "session_id": "fa70afaa-7ded-41f7-87d3-8145c7907274", "worktree_id": "3f430625-bc87-452f-b046-61b00b90d1c9", "status": "idle" }
  ]
};
fs.writeFileSync('memory/agor-state/sessions.json', JSON.stringify(sessionsData, null, 2));

const logEntry = `
## ${new Date().toISOString().substring(11, 19)} - Heartbeat Run
- Checked Main Board for worktrees in 'In Progress' zone.
- Found 0 worktrees currently in 'In Progress'.
- No zone promotion needed.
- Synced agor-state/worktrees.json and sessions.json.
`;
fs.appendFileSync('memory/2026-04-23.md', logEntry);

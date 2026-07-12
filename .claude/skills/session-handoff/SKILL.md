---
name: session-handoff
description: Produce a compact session summary ready to paste into a new Claude Code session to resume work without context loss
user-invocable: true
---

# session-handoff

Run this mid-session when context is getting full and you want to start fresh without losing the thread. Produces a compact handoff block — copy it, open a new session, paste it as your first message.

## What this is NOT

Not a commit or a memory write. No git operations, no memory-file updates. Pure synthesis for context transfer.

## What gets included

Only the session delta — things that happened in this conversation that aren't already captured in:
- `CLAUDE.md` (project instructions, brand/design rules, workflow)
- The auto-memory index and its files (`.../memory/MEMORY.md` and the memory files it points to — preferences, project status, references)
- Git history (recent commits)

## Steps

1. Synthesize the current session into a handoff block covering:
   - **Date** — today's date
   - **Session focus** — 1 line: what this session was about
   - **What changed** — bullet list: files created/edited, skills built, decisions made, anything committed
   - **Current state** — where things stand right now (what's done, what's in progress, what's untested)
   - **Open threads** — anything mid-thought, unresolved, or deferred
   - **Next step** — the single most logical next action

2. Format as a fenced block ready to copy-paste.

## Output Format

````
## Session Handoff — YYYY-MM-DD

**Focus:** [one-line description of what this session was about]

**What changed:**
- [file or skill created/edited]
- [decision made]
- [thing committed or shipped]

**Current state:** [1–2 sentences on where things stand]

**Open threads:**
- [anything mid-thought or deferred]

**Next step:** [single most logical action to take next]
````

## Notes

- Keep it under 20 lines. If it's longer, you're including too much.
- Don't repeat context that's already in CLAUDE.md or the memory files — new sessions load those automatically.
- The recipient of this handoff is a fresh Claude Code instance that has full access to the repo and auto-memory, but zero knowledge of this conversation.

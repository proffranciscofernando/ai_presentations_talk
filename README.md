# Stop Making Slides — Start Creating Presentations

A complete, self-contained **30-minute talk** built exactly as the talk itself recommends: not a PPTX, but an **HTML presentation experience** with live polls, an idea wall, a before/after comparison and built-in speaker notes.

Line of argument based on InvestNews BR's video *"Chega de slides: A revolução dos assistentes de IA para criar apresentações"* (July 2026). All materials in British English.

**Live:** [talk.franciscofernando-ai.workers.dev](https://talk.franciscofernando-ai.workers.dev/) — presenter deck and live poll API deployed together as a single Cloudflare Worker. Audience voting page: `.../?vote`.

## Contents

| File | What it is |
|---|---|
| [index.html](index.html) | The presentation itself — 25 slides, presenter view **and** audience voting view in one file |
| [SPEAKER_GUIDE.md](SPEAKER_GUIDE.md) | Minute-by-minute run sheet, full speaking notes per slide, poll rationale, Q&A prep |
| [worker.js](worker.js) | Optional Cloudflare Worker backend for real cross-device live polling |

## Quick start (rehearsal)

1. Open `index.html` in a browser (or serve it: `python3 -m http.server 8000`).
2. Navigate with **→ / ← / Space**; **F** for full screen; **N** for speaker notes.
3. On poll slides, press **S** to simulate incoming votes and ideas.
4. **T** starts the idea-wall timer; **Shift+R** resets all poll data.

Without a backend, polls run in *local mode*: the presenter deck and any audience tabs (`index.html?vote`) on the **same machine/browser** stay in sync via localStorage — ideal for rehearsal and demos.

## Presenting to a real room

For votes from the audience's own phones:

1. Deploy `worker.js` to Cloudflare Workers (instructions in the file's header comment) — free tier is ample.
2. Set `POLL_API` at the top of the `<script>` in `index.html` to the worker URL.
3. Host `index.html` anywhere (Cloudflare Pages, GitHub Pages, any static host).
4. The QR codes on poll slides are generated automatically from the deck's own URL (`…?vote`).
5. Before the audience arrives, clear old data: `curl -X POST https://<your-worker>/reset`.

> The deck itself works fully offline from a laptop — only the audience-phone features need connectivity.

## Making it yours

- **Name/branding:** edit slide 1 and the CSS variables at the top of `index.html` (ink blue + aged-paper yellow by default).
- **Poll questions:** edit the `POLLS` object in `index.html` *and* the matching slide markup.
- **QR codes:** generated via `api.qrserver.com`; when opened as a local `file://`, they hide automatically and the URL text is shown instead.

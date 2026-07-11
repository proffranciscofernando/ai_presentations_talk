# Speaker's Guide — *Stop Making Slides. Start Creating Presentations.*

**Format:** 30-minute talk (≈26 min speaking + ≈4 min built-in audience interaction)
**Deck:** `index.html` — an HTML presentation experience (which is itself the argument of the talk)
**Language:** British English throughout
**Source of the line of argument:** InvestNews BR, *"Chega de slides: A revolução dos assistentes de IA para criar apresentações"* (July 2026)

---

## 1. The argument in one paragraph

Using AI to make slides is one of its most common and most frustrating uses. The reason is structural: AI tools compose presentations in HTML — their native medium — and then squeeze the result into PPTX, which constrains the AI *and* the presenter. The fix is to stop asking for slides and start asking for **presentation experiences**: websites that behave like decks. The method has three steps — teach the AI your style (a custom skill), give it a proper brief (a dictated, iterated script), and let it generate, self-check and deploy. Once the deck is software, things PowerPoint cannot dream of become trivial: branded live polls, before/after comparisons, companion content on phones, idea walls, animations. The wider lesson mirrors the history of electricity: thirty years of flat productivity while factories merely swapped steam engines for motors, then a revolution when they redesigned around the new power. We are at that moment with AI — don't do the old job the old way; rethink the job.

---

## 2. Minute-by-minute run sheet

| Time | Slides | Section | What happens |
|---|---|---|---|
| 0:00–2:00 | 1–2 | **Opening hook** | Show-of-hands warm-up; promise of the talk |
| 2:00–4:00 | 3 | **The crowded promise** | Gamma, Beautiful.ai, Copilot, Claude — and the disappointment |
| 4:00–6:30 | 4 | **★ Live poll 1 (baseline)** | "Could an AI produce a deck you'd deliver unedited?" |
| 6:30–9:30 | 5–6 | **The diagnosis** | HTML → PPTX export; the double constraint |
| 9:30–11:00 | 7–8 | **The thesis** | *Stop making slides; start creating presentations.* Build websites; reveal this deck is one |
| 11:00–14:00 | 9–10 | **Step 1 — Teach it your style** | Custom skill, brand assets, house-style illustrations |
| 14:00–17:00 | 11–12 | **Step 2 — A proper brief** | Scripts not prompts; the dictation workflow |
| 17:00–19:30 | 13–14 | **Step 3 — Generate & deploy** | Agent self-checks in a browser; Cloudflare gives a free URL |
| 19:30–20:30 | 15 | **The pivot** | Concede "it's just PowerPoint online" — then flip it |
| 20:30–23:00 | 16–17 | **★ Live poll 2 (quiz) + companion mode** | Electricity quiz (answer withheld); phones as second screen |
| 23:00–25:00 | 18–19 | **★ Idea wall + animations** | Sticky-note wall with 90-second timer; prompt animation |
| 25:00–26:30 | 20–21 | **★ Re-poll + before/after** | Same question again; live comparison of both rounds |
| 26:30–28:30 | 22–23 | **The electricity story** | Quiz answer revealed (~30 years); motors vs production lines |
| 28:30–30:00 | 24–25 | **Lesson + close** | Rethink the job; three take-aways; questions |

Interactive moments are marked ★. If you are running short, compress slides 9–10 and 17; never cut the re-poll (slides 20–21) — it is the emotional payoff.

---

## 3. Full speaking notes, slide by slide

*(These same notes are embedded in the deck — press **N** while presenting.)*

### Slide 1 — Title *(0:00)*
Settle the room. One promise: *"In the next thirty minutes I'll try to change how you think about the most boring artefact in professional life: the slide deck."* Do not reveal the method yet.

### Slide 2 — The hook *(0:45)*
Show of hands: *"Who has asked an AI to make slides for them?"* Then: *"Keep your hand up if you were happy with the result."* Watch the hands drop. That gap — between how often we try and how rarely it works — is the subject of the talk.

### Slide 3 — The crowded promise *(2:00)*
Name the tools: specialised services such as **Gamma** and **Beautiful.ai**, and general assistants — **Copilot**, **Claude**, **ChatGPT** — all promising to sort out your PowerPoint. Establish credibility: you present constantly (lectures, talks, training) and have tested them all. Tease the conclusion: *"You only become happy with AI doing your presentations when you let go of one idea. We'll get there."*

### Slide 4 — ★ Live poll 1 *(4:00 — allow 2–2½ min)*
The baseline question: *"Could an AI, today, produce a presentation you would deliver without editing a single slide?"* Audience scans the QR code (note: **your** branding, **your** page — no third-party polling app). Watch the bars fill live. Comment on the room's mood. **Crucial line:** *"Remember your answer — we'll return to this exact question at the end."*

### Slide 5 — Under the bonnet *(6:30)*
The technical diagnosis. When these services "make slides", what they actually do is build an **HTML page** — the language of websites — and then **export it to PPTX**. The export is where everything breaks: fonts shift, boxes overflow. Then you open it in PowerPoint, Slides or Canva and spend the evening repairing the barbarities.

### Slide 6 — The double constraint *(8:00)*
Spell out why the workflow fails on both ends: the AI **loses freedom** to think differently (everything must fit rectangles PowerPoint understands), and **you stay limited** to what PowerPoint can do — essentially unchanged since the 1990s. Rhetorical beat: *"What if we simply skipped the export?"*

### Slide 7 — The thesis *(9:30)*
Pause. Read it slowly: **"Stop trying to make slides. Start creating presentations."** A presentation must be conceived as the act of *presenting something* — supporting a story, a lesson, a decision — not as clicking "next" on rectangles. Everything that follows is the practical consequence of this sentence.

### Slide 8 — Build it as a website *(10:15)*
The alternative: keep the AI in its native medium and build the presentation **as HTML** — a small web experience that happens to advance like slides. Tools: prompt-to-site services (**Lovable**, **Google AI Studio**) or coding agents (**OpenAI Codex** — desktop app at chatgpt.com/codex — and **Claude Code**, which arguably produces prettier decks by default). Then the meta-reveal: *"What you are watching right now is one HTML file. No PowerPoint was harmed."*

### Slide 9 — Step 1: teach it your style *(11:00)*
Create a custom **skill** — a reusable set of instructions the agent follows every time. Use the skill-creator; feed it your website, your brand PDF, your colours and fonts; ask for test presentations and critique them. Be honest about cost: **hours, perhaps days** — like training a new colleague on your house standard. You do it once and reuse it forever. Non-negotiable instruction inside the skill: *produce HTML, a website — never a PPTX.*

### Slide 10 — Step 1 payoff: house-style illustrations *(12:30)*
Pair the presentation skill with an **image-generation skill**. Describe your palette (this deck borrows the source's: ink blue, aged-paper yellow) and your preferred illustration style; every image in every future deck comes out matching. Consistency reads as **personality**. Iterate with the agent until slides, illustrations, fonts and transitions all please you — that closes Step 1.

### Slide 11 — Step 2: a proper brief *(14:00)*
The most common mistake: dumping a document on the AI and saying *"turn this into slides"*, or *"make a presentation about X"*. Generic input, generic output. What the AI needs is a **script** — detail, context, intent, slide by slide.

### Slide 12 — The script workflow *(15:00)*
The concrete routine: **pick up your phone and dictate**. Tell the AI it's a script for a talk and ask it to organise your rambling into slide-by-slide ideas. Then work on that script in an ordinary document, chatting with the AI for better examples, until you're satisfied. Only then does any slide get built. *You think out loud; the AI structures.*

### Slide 13 — Step 3: generate and self-check *(17:00)*
Almost anticlimactic — one sentence: *"Use our skill to build this presentation from this script."* The agent works for **30–60+ minutes** depending on size, because it doesn't just write code: it **opens a browser and inspects its own slides**, fixing what looks wrong. That self-checking is what separates agents from chatbots.

### Slide 14 — Deploy *(18:15)*
Ask the agent to deploy via **Cloudflare** (there's a skill for it): you get a live address immediately, **free**. Nothing to carry, nothing to email — *"when it's my turn, just open this address."* Password-protect it if you wish; presenter clicker and full screen work exactly as with PowerPoint.

### Slide 15 — The pivot *(19:30)*
Voice the objection before the audience does: *"So far, this is just PowerPoint online."* Concede it — with less faff, since AI is fluent in HTML. Beat. *"But your presentation is now a piece of **software**. And software can do things rectangles cannot."* Everything from here is the demonstration.

### Slide 16 — ★ Live poll 2: the quiz *(20:30 — allow 2 min)*
A live quiz **inside the deck**: *"After electricity reached factories, how long until productivity meaningfully rose?"* Point at the mechanics while votes arrive: the QR carries your brand, the voting page matches your style, and it's synced with this very slide — results update in real time, and the deck can compute the percentage who got it right. **Withhold the answer:** *"Hold that thought — the answer is the closing story of this talk."*

### Slide 17 — Companion mode *(22:00)*
Because deck and phone view are one synced website, the audience scans **once** and follows along. Design in two layers: the big screen stays clean and bold; the handset carries depth — links, sources, extra examples. The projector shows less; the phone shows more.

### Slide 18 — ★ The idea wall *(23:00 — allow 2 min)*
Open participation: *"If your presentation were software, what would you make it do?"* Free-text answers land as sticky notes, live. Press **T** for the 90-second timer. Read two or three aloud. Mention the advanced version: the presenter can pick one idea **on their own phone and that choice changes the next slide** — the deck reacts to the room. *PowerPoint doesn't even dream of this.*

### Slide 19 — Animations *(24:15)*
In a talk about AI, a slide about prompts can simply **run prompts** — the typing animation on screen was built by the agent with no special effort. Anything a web page can do, a slide can now do: charts that draw themselves, small simulations, live data. No plug-ins, no embedded videos — it's just the web.

### Slide 20 — ★ The re-poll *(25:00)*
The callback. Same question as slide 4, word for word: *"Vote again — honestly."* Let the bars fill. Don't comment yet — the punchline is the next slide.

### Slide 21 — Before vs after *(25:45)*
The payoff: this slide queries **both rounds** of the poll and computes the shift live — red bars for the start of the talk, yellow for just now, with the change in points. Narrate whatever happened (movement or stubbornness both make good material). Land the line: *"a comparison PowerPoint cannot even dream of."* Let it breathe before the closing story.

### Slide 22 — Electricity, part I *(26:30)*
Reveal the quiz answer: **about thirty years** of nearly flat productivity after electricity reached factories — announce how many in the room got it right (the deck computed it). Why so long? Factories kept the old architecture: one giant central steam engine, belts and shafts everywhere. They unbolted the engine, bolted an electric motor into the same spot, and nothing much happened — same energy, same layout, slightly cheaper. **Substitution, not rethinking.**

### Slide 23 — Electricity, part II *(27:30)*
The transformation came when people saw electricity's real advantage: power could be delivered **anywhere** — sockets moved, machines spread across the floor. That freedom enabled the **production line**, and manufacturing was revolutionised. Land the parallel firmly: *"We are at precisely that moment with AI. Using AI to make PowerPoints faster is bolting a motor where the steam engine stood."*

### Slide 24 — The lesson *(28:30)*
Generalise: most people use AI to do exactly what they already did, the same way, with the same tools — in the long run, probably a waste of time. Don't use AI for better dashboards, better spreadsheets, better PowerPoint. Rethink the job itself: *"You don't actually want a PPTX. You want a **succession of screens in service of your story** — your lesson, your information."* Presentations are one of the first places you can feel this revolution first-hand — and we are at the very beginning.

### Slide 25 — Close *(29:15)*
Three take-aways, 45 seconds: **(1)** build a skill — invest the hours once; **(2)** write scripts, not prompts — dictate, structure, iterate; **(3)** ask for HTML, never PPTX — and make one slide do something PowerPoint can't. Sign off: *"Enjoy making your colleagues thoroughly envious in the next meeting room. Thank you — questions welcome."*

---

## 4. The polls: questions and rationale

| # | Slide | Type | Question | Purpose |
|---|---|---|---|---|
| 1 | 4 | 3 options | Could an AI, today, produce a presentation you'd deliver without editing a single slide? | Baseline belief — measured again at the end |
| 2 | 16 | 4 options (quiz) | After electricity reached factories, how long until productivity meaningfully rose? | Demonstrates a live quiz **and** plants the closing story (answer: ~30 years) |
| 3 | 18 | Free text | If your presentation were software, what would you make it do? | Idea wall — open participation, sticky notes, timer |
| 4 | 20 | 3 options | *Identical to poll 1* | The before/after comparison on slide 21 — the demo's emotional peak |

---

## 5. Controls & rehearsal

| Key | Action |
|---|---|
| → / Space / click | Next slide |
| ← | Previous slide |
| **F** | Full screen |
| **N** | Toggle speaker notes panel |
| **S** | **Simulate votes/ideas** on the current poll slide (rehearsal) |
| **T** | Start/stop the 90-second idea-wall timer |
| **Shift+R** | Reset all poll data (asks for confirmation) |

**Rehearsal:** open `index.html` locally, press **S** a few times on each poll slide to fill the bars, and run the full talk against the clock at least twice. Time yourself with the run sheet in §2.

**On the day:** deploy the deck (see `README.md`), open the live URL, and reset poll data with **Shift+R** (local mode) or the worker's `/reset` endpoint before the audience arrives.

---

## 6. Anticipated questions (with suggested answers)

- **"Isn't this a lot of effort compared with PowerPoint?"** — Up front, yes: the skill takes hours or days. But it's a one-off investment; afterwards each talk costs a script and one instruction. And the effort buys capabilities PowerPoint doesn't have at any price.
- **"What if the venue's Wi-Fi fails?"** — The deck is a static file: it presents perfectly offline from a laptop. Only the audience-phone features need connectivity; carry them as an enhancement, not a dependency.
- **"Can I still export a PDF/PPTX for the archive?"** — Yes — print-to-PDF works, or ask the agent for an export. The point is that the *artefact* is a by-product, not the medium you design in.
- **"Which agent should I start with?"** — Whichever you already pay for. Codex if you have ChatGPT (strong image-generation skills); Claude Code if you have Claude (arguably prettier defaults). The method is identical.
- **"Is the audience data private?"** — Votes are anonymous counts; ideas are free text. Self-host the worker and the data never touches a third party.

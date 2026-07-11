/**
 * Cloudflare Worker — live poll backend for the presentation.
 *
 * Endpoints (all JSON, CORS-open):
 *   GET  /state            -> { votes: {pollId: {optionIdx: n}}, ideas: [..], active: "p1" }
 *   POST /vote   {poll, option}
 *   POST /idea   {text}
 *   POST /active {poll}     (called by the presenter deck on slide change)
 *   POST /reset             (clear everything before the talk)
 *
 * Uses a Durable Object so counts are consistent in real time
 * (Workers KV is eventually consistent — unsuitable for live polls).
 *
 * Deploy:
 *   npm create cloudflare@latest talk-polls -- --type hello-world
 *   # replace src/index.js with this file, then in wrangler.toml add:
 *   #   [[durable_objects.bindings]]
 *   #   name = "POLL"
 *   #   class_name = "PollRoom"
 *   #   [[migrations]]
 *   #   tag = "v1"
 *   #   new_sqlite_classes = ["PollRoom"]
 *   npx wrangler deploy
 *
 * Then set POLL_API in index.html to the deployed URL.
 */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    // A single room for the talk; extend the name if you run parallel sessions.
    const id = env.POLL.idFromName("main-room");
    return env.POLL.get(id).fetch(request);
  },
};

export class PollRoom {
  constructor(state) {
    this.state = state;
  }

  async data() {
    return (await this.state.storage.get("data")) || { votes: {}, ideas: [], active: null };
  }

  async fetch(request) {
    const url = new URL(request.url);
    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json", ...CORS },
      });

    const d = await this.data();

    if (request.method === "GET" && url.pathname === "/state") return json(d);

    if (request.method === "POST") {
      let body = {};
      try { body = await request.json(); } catch {}

      switch (url.pathname) {
        case "/vote": {
          const { poll, option } = body;
          if (typeof poll !== "string" || !Number.isInteger(option) || option < 0 || option > 9)
            return json({ error: "bad vote" }, 400);
          d.votes[poll] = d.votes[poll] || {};
          d.votes[poll][option] = (d.votes[poll][option] || 0) + 1;
          break;
        }
        case "/idea": {
          const text = String(body.text || "").trim().slice(0, 140);
          if (!text) return json({ error: "empty idea" }, 400);
          if (d.ideas.length < 500) d.ideas.push(text);
          break;
        }
        case "/active": {
          d.active = typeof body.poll === "string" ? body.poll : null;
          break;
        }
        case "/reset": {
          await this.state.storage.put("data", { votes: {}, ideas: [], active: null });
          return json({ ok: true });
        }
        default:
          return json({ error: "not found" }, 404);
      }

      await this.state.storage.put("data", d);
      return json({ ok: true });
    }

    return json({ error: "not found" }, 404);
  }
}

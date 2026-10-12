// Meet per pagina: woorden in <main> (zonder script/style/aria-hidden),
// koppen, zinnen, links, alt-teksten, FAQ, meta en JSON-LD.
// Gebruik: node meet.mjs http://localhost:3100 uit.json
import { parse } from "node-html-parser";
import { writeFileSync } from "node:fs";

const basis = process.argv[2];
const uit = process.argv[3];

const diensten = ["persoonlijke-verzorging", "begeleiding", "nachtzorg", "dagbesteding", "huishoudelijke-hulp", "palliatieve-zorg"];
const plaatsen = ["maastricht", "meerssen", "valkenburg-aan-de-geul", "sittard-geleen", "heerlen", "beek"];
const routes = [
  "/", "/over", "/tarieven-en-vergoeding", "/werkgebied", "/veelgestelde-vragen", "/contact", "/zorgvraag",
  "/privacy", "/klachtenregeling", "/algemene-voorwaarden", "/kennisbank", "/bedankt",
  ...diensten.map((d) => `/zorg/${d}`),
  ...diensten.flatMap((d) => plaatsen.map((p) => `/zorg/${d}/${p}`)),
];

const norm = (s) => s.replace(/ /g, " ").replace(/[—–]/g, " ").replace(/\s+/g, " ").replace(/\s([.,!?:;”])/g, "$1").replace(/“\s/g, "“").trim();

const BLOK = new Set(["p", "li", "h1", "h2", "h3", "h4", "h5", "h6", "summary", "div", "section", "article", "aside", "nav", "figure", "figcaption", "blockquote", "header", "footer", "main", "ul", "ol", "details", "form", "label", "br", "time", "button", "a", "span", "b", "i", "small", "em", "strong", "select", "option", "textarea", "input"]);
// Inline-elementen waar geen spatie tussen hoort.
const INLINE = new Set(["span", "b", "i", "em", "strong", "small", "a"]);

function tekst(node, uitgesloten) {
  if (node.nodeType === 3) return node.rawText.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&middot;/g, "·").replace(/&mdash;/g, "—").replace(/&larr;/g, "←");
  if (node.nodeType !== 1) return "";
  const tag = node.rawTagName?.toLowerCase();
  if (["script", "style", "svg", "noscript", "template"].includes(tag)) return "";
  if (uitgesloten(node)) return "";
  const binnen = node.childNodes.map((c) => tekst(c, uitgesloten)).join("");
  return ` ${binnen} `;
}

const uitAria = (n) => n.getAttribute?.("aria-hidden") === "true" || n.getAttribute?.("data-judy") !== undefined;

function fragmenten(main) {
  const uit = new Set();
  const loop = (el, verborgen) => {
    if (el.nodeType !== 1) return;
    const tag = el.rawTagName?.toLowerCase();
    if (["script", "style", "svg", "noscript", "template"].includes(tag)) return;
    const weg = verborgen || uitAria(el);
    if (!weg && el.childNodes.some((c) => c.nodeType === 3 && c.rawText.replace(/&nbsp;/g, " ").trim())) {
      const t = norm(tekst(el, uitAria));
      if (t) uit.add(t);
    }
    el.childNodes.forEach((c) => loop(c, weg));
  };
  loop(main, false);
  return [...uit];
}

function zinnen(t) {
  return norm(t)
    .split(/(?<=[.?!])\s+(?=[A-Z0-9À-ſ"'“])/)
    .map((z) => z.trim())
    .filter((z) => z.split(" ").length >= 3);
}

async function meet(route) {
  const res = await fetch(basis + route);
  const html = await res.text();
  const doc = parse(html, { comment: false });
  const main = doc.querySelector("main") ?? doc.querySelector("body");
  const mainTekst = norm(tekst(main, uitAria));
  const woorden = mainTekst ? mainTekst.split(" ").filter((w) => /[\p{L}\p{N}]/u.test(w)).length : 0;
  const koppen = main.querySelectorAll("h1,h2,h3,h4").map((h) => `${h.rawTagName.toLowerCase()}: ${norm(tekst(h, () => false))}`);
  const links = [...new Set(doc.querySelectorAll("a").map((a) => a.getAttribute("href")).filter(Boolean))].sort();
  const alts = [...new Set(doc.querySelectorAll("img").map((i) => i.getAttribute("alt")).filter((a) => a))].sort();
  const faq = main.querySelectorAll("details").map((d) => ({
    vraag: norm(tekst(d.querySelector("summary"), () => false)),
    antwoord: norm(d.querySelectorAll("p").map((p) => tekst(p, () => false)).join(" ")),
  }));
  const meta = {
    title: doc.querySelector("title")?.text ?? "",
    description: doc.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
    canonical: doc.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
    robots: doc.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "",
  };
  const schema = doc.querySelectorAll('script[type="application/ld+json"]').map((s) => JSON.stringify(JSON.parse(s.innerHTML))).sort();
  const kop = norm(tekst(doc.querySelector("header") ?? parse(""), uitAria));
  const voet = norm(tekst(doc.querySelector("footer") ?? parse(""), uitAria));
  return { route, status: res.status, woorden, koppen, zinnen: fragmenten(main), mainTekst, links, alts, faq, meta, schema, kop, voet };
}

const resultaat = [];
for (const r of routes) resultaat.push(await meet(r));
writeFileSync(uit, JSON.stringify(resultaat, null, 1));
console.log(resultaat.map((r) => `${r.status} ${r.route} ${r.woorden}w ${r.koppen.length}k`).join("\n"));

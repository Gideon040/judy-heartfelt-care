// Vergelijkt voor.json met na.json. Schrijft een markdown-rapport en
// meldt per pagina: woorden, ontbrekende koppen, zinnen, FAQ, links,
// alt-teksten, meta en schema.
// Gebruik: node vergelijk.mjs voor.json na.json rapport.md [--alleen-voor]
import { readFileSync, writeFileSync } from "node:fs";

const [voorPad, naPad, rapportPad, vlag] = process.argv.slice(2);
const voor = JSON.parse(readFileSync(voorPad, "utf8"));
const na = naPad && naPad !== "-" ? JSON.parse(readFileSync(naPad, "utf8")) : null;

// Em dashes mogen vervangen worden; quotes en apostrofs gelijk trekken.
const n = (s) => s.replace(/[—–]/g, " ").replace(/[‘’]/g, "'").replace(/\s+/g, " ").replace(/\s([.,!?:;])/g, "$1").trim().toLowerCase();

const regels = [];
let fouten = 0;
const tabel = ["| Pagina | Woorden voor | Woorden na | Verschil | Koppen voor | Koppen na | Status |", "|---|---:|---:|---:|---:|---:|---|"];
const details = [];

for (const v of voor) {
  const a = na?.find((x) => x.route === v.route);
  if (!na) {
    tabel.push(`| \`${v.route}\` | ${v.woorden} | | | ${v.koppen.length} | | |`);
    continue;
  }
  const p = [];
  if (!a || a.status !== v.status) p.push(`status ${v.status} -> ${a?.status}`);
  if (a) {
    const tekstNa = n(a.mainTekst);
    const koppenNa = new Set(a.koppen.map((k) => n(k.replace(/^h\d: /, ""))));
    const kwijtKop = v.koppen.filter((k) => !koppenNa.has(n(k.replace(/^h\d: /, ""))));
    const anderNiveau = v.koppen.filter((k) => koppenNa.has(n(k.replace(/^h\d: /, ""))) && !a.koppen.map(n).includes(n(k)));
    if (kwijtKop.length) p.push(`koppen kwijt: ${kwijtKop.join(" | ")}`);
    if (anderNiveau.length) p.push(`kopniveau gewijzigd: ${anderNiveau.join(" | ")}`);
    const kwijtZin = v.zinnen.filter((z) => !tekstNa.includes(n(z)));
    if (kwijtZin.length) p.push(`zinnen kwijt (${kwijtZin.length}):\n${kwijtZin.map((z) => `    - ${z}`).join("\n")}`);
    const kwijtFaq = v.faq.filter((f) => !a.faq.some((g) => n(g.vraag) === n(f.vraag) && n(g.antwoord) === n(f.antwoord)));
    if (kwijtFaq.length) p.push(`FAQ kwijt/gewijzigd: ${kwijtFaq.map((f) => f.vraag).join(" | ")}`);
    const kwijtLink = v.links.filter((l) => !a.links.includes(l));
    if (kwijtLink.length) p.push(`links kwijt: ${kwijtLink.join(", ")}`);
    const kwijtAlt = v.alts.filter((l) => !a.alts.includes(l));
    if (kwijtAlt.length) p.push(`alt-teksten kwijt: ${kwijtAlt.join(" | ")}`);
    for (const k of Object.keys(v.meta)) if (v.meta[k] !== a.meta[k]) p.push(`meta ${k}: "${v.meta[k]}" -> "${a.meta[k]}"`);
    const kwijtSchema = v.schema.filter((s) => !a.schema.includes(s));
    if (kwijtSchema.length) p.push(`schema gewijzigd (${kwijtSchema.length} blok(ken)):\n${kwijtSchema.map((s) => `    - voor: ${s}\n    - na:   ${a.schema.find((x) => JSON.parse(x)["@type"] === JSON.parse(s)["@type"]) ?? "(ontbreekt)"}`).join("\n")}`);
    if (a.woorden < v.woorden) p.push(`woorden gedaald: ${v.woorden} -> ${a.woorden}`);
  }
  const ok = p.length === 0;
  if (!ok) fouten++;
  tabel.push(`| \`${v.route}\` | ${v.woorden} | ${a?.woorden ?? "-"} | ${a ? (a.woorden - v.woorden >= 0 ? "+" : "") + (a.woorden - v.woorden) : "-"} | ${v.koppen.length} | ${a?.koppen.length ?? "-"} | ${ok ? "ok" : "CONTROLEREN"} |`);
  if (!ok) details.push(`### \`${v.route}\`\n\n${p.map((x) => `- ${x}`).join("\n")}\n`);
}

regels.push(tabel.join("\n"));
if (details.length) regels.push("\n## Afwijkingen\n\n" + details.join("\n"));
if (vlag === "--koppen") {
  regels.push("\n## Koppenlijsten\n");
  for (const v of voor) {
    const a = na?.find((x) => x.route === v.route);
    regels.push(`### \`${v.route}\`\n\n**Voor** (${v.woorden} woorden)\n\n${v.koppen.map((k) => `- ${k}`).join("\n")}\n${a ? `\n**Na** (${a.woorden} woorden)\n\n${a.koppen.map((k) => `- ${k}`).join("\n")}\n` : ""}`);
  }
}
writeFileSync(rapportPad, regels.join("\n"));
console.log(`${voor.length} pagina's, ${fouten} met afwijkingen`);
if (details.length) console.log(details.join("\n").slice(0, 6000));

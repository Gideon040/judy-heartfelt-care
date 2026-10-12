// Lighthouse, mediaan van N runs per pagina, mobiel en desktop.
// Gebruik: node lh.mjs https://basis uit.json [runs]
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { writeFileSync } from "node:fs";

const basis = process.argv[2];
const uit = process.argv[3];
const runs = Number(process.argv[4] ?? 3);
const paginas = ["/", "/zorg/begeleiding", "/over", "/tarieven-en-vergoeding", "/zorg/nachtzorg/maastricht"];
const cats = ["performance", "accessibility", "best-practices", "seo"];

const chrome = await chromeLauncher.launch({
  chromePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  chromeFlags: ["--headless=new", "--no-sandbox"],
});
const mediaan = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
const res = [];
for (const vorm of ["mobile", "desktop"]) {
  for (const p of paginas) {
    const scores = Object.fromEntries(cats.map((c) => [c, []]));
    const extra = { lcp: [], cls: [], tbt: [] };
    for (let i = 0; i < runs; i++) {
      const r = await lighthouse(basis + p, { port: chrome.port, onlyCategories: cats, output: "json", logLevel: "error" },
        vorm === "desktop" ? (await import("lighthouse/core/config/desktop-config.js")).default : undefined);
      for (const c of cats) scores[c].push(Math.round(r.lhr.categories[c].score * 100));
      extra.lcp.push(r.lhr.audits["largest-contentful-paint"].numericValue);
      extra.cls.push(r.lhr.audits["cumulative-layout-shift"].numericValue);
      extra.tbt.push(r.lhr.audits["total-blocking-time"].numericValue);
    }
    const rij = { vorm, pagina: p, ...Object.fromEntries(cats.map((c) => [c, mediaan(scores[c])])), lcp: Math.round(mediaan(extra.lcp)), cls: +mediaan(extra.cls).toFixed(3), tbt: Math.round(mediaan(extra.tbt)) };
    res.push(rij);
    console.log(JSON.stringify(rij));
  }
}
await chrome.kill();
writeFileSync(uit, JSON.stringify(res, null, 1));

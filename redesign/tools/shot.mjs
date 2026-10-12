// Screenshots op desktop (1440) en mobiel (375).
// node shot.mjs <basis> <uitmap> <prefix> pad1 pad2 ...
// Prototype: node shot.mjs proto <uitmap> proto home begeleiding over tarieven
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const [basis, map, prefix, ...paden] = process.argv.slice(2);
mkdirSync(map, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
const proto = "file:///D:/judy-heartfelt-care/redesign/prototype.html";

for (const [naam, breedte] of [["desktop", 1440], ["mobiel", 375]]) {
  const ctx = await browser.newContext({ viewport: { width: breedte, height: breedte > 500 ? 900 : 812 }, deviceScaleFactor: 1, reducedMotion: process.env.BEWEGING ? "no-preference" : "reduce" });
  const page = await ctx.newPage();
  for (const pad of paden) {
    if (basis === "proto") {
      await page.goto(proto);
      await page.click(`.proto [data-go="${pad}"]`);
    } else {
      await page.goto(basis + pad, { waitUntil: "networkidle" });
    }
    // Door de pagina scrollen zodat lazy images en reveals laden.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    const breedOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const bestand = `${map}/${prefix}-${(pad === "/" ? "home" : pad.replace(/^\//, "").replace(/\//g, "_")) || "home"}-${naam}.jpg`;
    await page.screenshot({ path: bestand, fullPage: true, type: "jpeg", quality: 72 });
    console.log(bestand, breedOverflow > 0 ? `HORIZONTALE SCROLL ${breedOverflow}px` : "");
  }
  await ctx.close();
}
await browser.close();

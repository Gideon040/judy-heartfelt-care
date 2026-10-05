// Bij paginalading aanroepen (bijv. in een client layout-effect).
// Bewaart utm/gclid/referrer zodat ze de paginawissel naar het
// formulier overleven.
export function bewaarHerkomst() {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams(window.location.search);
  const zet = (k: string) => {
    const v = p.get(k);
    if (v) sessionStorage.setItem(k, v);
  };
  ["utm_source", "utm_medium", "utm_campaign", "gclid"].forEach(zet);
  if (!sessionStorage.getItem("landingspagina"))
    sessionStorage.setItem("landingspagina", window.location.href);
  if (document.referrer && !sessionStorage.getItem("referrer"))
    sessionStorage.setItem("referrer", document.referrer);
}

export function herkomst() {
  const g = (k: string) => sessionStorage.getItem(k) || undefined;
  return {
    utm_source: g("utm_source"),
    utm_medium: g("utm_medium"),
    utm_campaign: g("utm_campaign"),
    gclid: g("gclid"),
    landingspagina: g("landingspagina"),
    referrer: g("referrer"),
  };
}

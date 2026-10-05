import Link from "next/link";
import { site } from "@/site.config";
import { Logo } from "./Kop";

export default function Voet() {
  const reviewsLive = site.reviews.length >= 3;
  return (
    <footer className="ft" style={{ background: "linear-gradient(180deg,#FFFBF7,#FBEFE4)", borderTop: "1px solid #EADBCD", padding: "64px 0 28px" }}>
      <div className="wrap col" style={{ gap: 44 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: 32 }}>
          <div className="col" style={{ gap: 14 }}>
            <Logo />
            <p className="sm" style={{ maxWidth: "32ch" }}>
              {site.ondertitel} in {site.regio}. Een vast gezicht, zeven dagen per week, zonder wachtlijst.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>Onze zorg</div>
            {site.diensten.map((d) => (
              <Link key={d.slug} href={`/zorg/${d.slug}`}>{d.naam}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>Werkgebied</div>
            {site.werkgebied.map((p) => (
              <Link key={p.slug} href={`/zorg/${site.hoofddienst}/${p.slug}`}>{p.naam}</Link>
            ))}
            <Link href="/werkgebied">Alle plaatsen</Link>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>Praktisch</div>
            <Link href="/tarieven-en-vergoeding">Tarieven en vergoeding</Link>
            <Link href="/veelgestelde-vragen">Veelgestelde vragen</Link>
            {reviewsLive && <Link href="/reviews">Ervaringen</Link>}
            <Link href="/contact">Contact</Link>
            <Link href="/klachtenregeling">Klachtenregeling</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, paddingTop: 18, borderTop: "1px solid #EADBCD", fontSize: 13, color: "#6E6270" }}>
          <span>KvK {site.kvk} &middot; AGB {site.agb} &middot; &copy; {new Date().getFullYear()} {site.naam}</span>
          <span>Website door Zorgbaar</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { site } from "@/site.config";
import { Logo } from "./Kop";
import { Telefoon } from "./Iconen";

export default function Voet() {
  const reviewsLive = site.reviews.length >= 3;
  return (
    <>
      <footer className="voet">
        <div className="wrap">
          <div className="voet-grid">
            <div>
              <Logo />
              <p>{site.ondertitel} in {site.regio}. Een vast gezicht, zeven dagen per week, zonder wachtlijst.</p>
            </div>
            <div>
              <div className="voet-kop">Onze zorg</div>
              {site.diensten.map((d) => (
                <Link key={d.slug} href={`/zorg/${d.slug}`}>{d.naam}</Link>
              ))}
            </div>
            <div>
              <div className="voet-kop">Werkgebied</div>
              {site.werkgebied.map((p) => (
                <Link key={p.slug} href={`/zorg/${site.hoofddienst}/${p.slug}`}>{p.naam}</Link>
              ))}
              <Link href="/werkgebied">Alle plaatsen</Link>
            </div>
            <div>
              <div className="voet-kop">Praktisch</div>
              <Link href="/tarieven-en-vergoeding">Tarieven en vergoeding</Link>
              <Link href="/veelgestelde-vragen">Veelgestelde vragen</Link>
              {reviewsLive && <Link href="/reviews">Ervaringen</Link>}
              <Link href="/contact">Contact</Link>
              <Link href="/klachtenregeling">Klachtenregeling</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            </div>
          </div>
          <div className="voet-onder">
            <span>KvK {site.kvk}{site.agbTonen && <> &middot; AGB {site.agb}</>} &middot; &copy; {new Date().getFullYear()} {site.naam}</span>
            <span>Website door Zorgbaar</span>
          </div>
        </div>
      </footer>
      {/* Vaste actiebalk op mobiel */}
      <div className="mbalk">
        <a className="btn2" href={`tel:${site.telefoon}`}><Telefoon />Bellen</a>
        <Link className="btn" href="/zorgvraag">Zorgvraag stellen</Link>
      </div>
    </>
  );
}

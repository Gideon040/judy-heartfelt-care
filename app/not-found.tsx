import Link from "next/link";
import { BelKnop } from "@/components/Blokken";

export default function NietGevonden() {
  return (
    <main className="zb-bedankt">
      <h1>Deze pagina bestaat niet (meer)</h1>
      <p>Misschien is de link verouderd. Kijk bij onze zorg, of bel ons direct.</p>
      <div className="row" style={{ justifyContent: "center" }}>
        <Link className="btn" href="/">Naar de homepage</Link>
        <BelKnop />
      </div>
    </main>
  );
}

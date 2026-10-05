import { site } from "@/site.config";
import { Foto } from "./Blokken";

// Portret van het gezicht; zolang er geen foto is een monogram.
export default function Portret({ minHoogte, label = "Portret" }: { minHoogte: number; label?: string }) {
  const g = site.gezicht;
  if (g.foto) {
    return (
      <div className="pb" style={{ minHeight: minHoogte }}>
        <Foto src={g.foto} alt={`${label} van ${g.naam}`} positie="50% 22%" />
      </div>
    );
  }
  const initialen = g.naam.split(" ").map((w) => w[0]).join("");
  return (
    <div className="monogram" style={{ minHeight: minHoogte }} aria-hidden="true">
      <b>{initialen}</b>
      <span>{g.naam}</span>
    </div>
  );
}

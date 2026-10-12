import { site } from "@/site.config";
import { Foto } from "./Blokken";

// Portret van het gezicht als boog, zonder lijn eromheen; zolang er geen foto
// is een monogram. Het onderschrift is optioneel (figcaption).
export default function Portret({ label = "Portret", onderschrift = true, sizes = "(max-width: 1020px) 90vw, 440px" }: {
  label?: string; onderschrift?: boolean; sizes?: string;
}) {
  const g = site.gezicht;
  const initialen = g.naam.split(" ").map((w) => w[0]).join("");
  return (
    <figure className="portret rv">
      <div className="portret-foto">
        {g.foto ? (
          <Foto src={g.foto} alt={`${label} van ${g.naam}`} positie="50% 18%" sizes={sizes} />
        ) : (
          <div className="monogram" aria-hidden="true"><b>{initialen}</b><span>{g.naam}</span></div>
        )}
      </div>
      {onderschrift && <figcaption><b>{g.naam}</b>{g.functie}</figcaption>}
    </figure>
  );
}

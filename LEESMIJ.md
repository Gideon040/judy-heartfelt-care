# Judy Heartfelt Care: klantsite

Next.js-site volgens `zorgbaarportaal-structuur-wireframes.md`, met het
ontwerp uit `D:\zorgbaar-portaal\judy-heartfelt-care-site` als schil.
Alle klantgegevens staan in `site.config.ts`; teksten per dienst in
`app/zorg/inhoud.ts`.

    npm run dev      # lokaal, post naar localhost:3001
    npm run build

## Nog nodig voor livegang
- Organisatie aanmaken in het portaal met slug `judy-heartfelt-care`.
- Domein (`url`) en GA4-id invullen in site.config.ts.
- Van Judy: vestigingsplaats (`plaats`), bevestiging van de zes plaatsen,
  per plaats haar eigen zin (`eigenZin`), Wtza-status, geschilleninstantie,
  klachtenfunctionaris, aansprakelijkheidsverzekering.
  Lege velden worden op de site overgeslagen.
- Foto's: alle tijdelijke foto's zijn vervangen door Judy's eigen foto's (redesign).
- Juridische teksten laten nalezen.
- Kennisbank: artikelen schrijven in het portaal (blok op home pas bij 3+).
- Reviews: `/reviews` geeft 404 tot er 3 echte reviews in de config staan.

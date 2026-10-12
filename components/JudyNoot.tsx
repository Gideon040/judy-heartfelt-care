// Open punt voor Judy: alleen zichtbaar tijdens ontwikkeling, nooit in een
// productiebuild (ook niet op Vercel-previews). Zie redesign/overdracht.md.
export const TOON_NOTEN = process.env.NODE_ENV !== "production";

export default function JudyNoot({ children }: { children: string }) {
  if (!TOON_NOTEN) return null;
  return <span className="judy-noot" data-judy="">[JUDY: {children}]</span>;
}

import ThukalParticles from "./ThukalParticles";

interface PretextStoryProps {
  paragraphs: string[];
  className?: string;
}

/**
 * Story section with Tamil "த" particle dispersion animation.
 * Right side solid, left side dissolves into particles — matching the Thukal brand.
 */
const PretextStory = ({
  paragraphs,
  className = "",
}: PretextStoryProps) => {
  const splitAt = Math.min(1, paragraphs.length - 1);
  const above = paragraphs.slice(0, splitAt);
  const below = paragraphs.slice(splitAt);

  return (
    <div className={className}>
      {/* Text above */}
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
        {above.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Tamil "த" particle dispersion — Thukal brand identity */}
      <div className="relative my-10 rounded-2xl overflow-hidden bg-background border border-border/30">
        <div className="aspect-[5/3] sm:aspect-[2/1] max-h-[360px]">
          <ThukalParticles width={900} height={450} />
        </div>
        <p className="text-center text-[11px] text-muted-foreground/40 pb-3 -mt-1 tracking-wide">
          hover to interact with particles
        </p>
      </div>

      {/* Text below */}
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {below.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
};

export default PretextStory;

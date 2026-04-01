import ThukalParticles from "./ThukalParticles";

interface PretextStoryProps {
  paragraphs: string[];
  className?: string;
}

/**
 * Story section with Thukal particle animation as an interactive visual break
 * between paragraphs. Particles form "Thukal", scatter, and respond to mouse.
 */
const PretextStory = ({
  paragraphs,
  className = "",
}: PretextStoryProps) => {
  // Split paragraphs: first part above particles, rest below
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

      {/* Thukal particle animation — interactive visual centerpiece */}
      <div className="relative my-10 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-border/40 overflow-hidden">
        <div className="aspect-[3/1] min-h-[160px] max-h-[220px]">
          <ThukalParticles width={800} height={220} />
        </div>
        <p className="text-center text-xs text-muted-foreground/40 pb-3 -mt-1">
          hover to interact
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

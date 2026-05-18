
import ToolsHero from "@/components/tools/ToolsHero";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Reveal } from "@/components/animations/Reveal";

export default function ToolsPage() {
  return (
    <main className="relative px-6 overflow-hidden min-h-screen bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-surface-2/50 to-transparent -z-10" />

      <div className="section-container relative pt-32 pb-24">
        <ToolsHero />
        <ToolsGrid />

        {/* Bottom CTA */}
        <Reveal width="100%" delay={0.6}>
          <div className="mt-24 text-center">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.3em]">
              More tools arriving soon
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-border" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

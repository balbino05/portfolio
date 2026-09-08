import { ParticlesBackground } from "@/components/particles-background";

export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden>
      <div className="ambient-blob ambient-blob-a" />
      <div className="ambient-blob ambient-blob-b" />
      <div className="ambient-blob ambient-blob-c" />
      <ParticlesBackground />
      <div className="ambient-noise" />
    </div>
  );
}

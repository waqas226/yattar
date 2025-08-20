type HeroCoverProps = {
  imageSrc?: string; // e.g. "/images/hero-cover.jpg"
  height?: number; // px
};

export default function HeroCover({ imageSrc = "/images/hero-cover.jpg", height = 320 }: HeroCoverProps) {
  return (
    <div className="relative overflow-hidden" style={{ height }}>
      {/* Background: image via CSS with gradient fallback layer underneath */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${imageSrc})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#642B73] via-[#5A2A8F] to-[#1E2A78] mix-blend-multiply" />
      </div>

      {/* Decorative overlay waves (SVG) to match Figma look */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="hc-g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="hc-g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M0,120 C260,40 420,210 720,160 C1000,115 1170,10 1440,120 L1440,400 L0,400 Z" fill="url(#hc-g1)" />
        <path d="M0,260 C240,230 470,310 720,260 C980,208 1180,120 1440,220 L1440,400 L0,400 Z" fill="url(#hc-g2)" />
      </svg>

      {/** Scrim for readable text on top-right where buttons live */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/10" />
    </div>
  );
}

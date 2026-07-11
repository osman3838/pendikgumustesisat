export function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col lg:min-h-[320px]">
      {/* TODO: Replace illustration block with a real on-site job photo in /public/brand/ */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
        <div className="hero-mesh absolute inset-0 opacity-60" aria-hidden="true" />

        {/* Line illustration: camera inspection device + pipe */}
        <svg
          viewBox="0 0 320 240"
          className="relative z-10 w-full max-w-[280px] text-white/90"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M40 180 Q40 120 100 100 T200 80 T280 60" opacity="0.4" />
          <circle cx="280" cy="60" r="8" fill="currentColor" opacity="0.3" />
          <rect
            x="60"
            y="90"
            width="120"
            height="70"
            rx="8"
            fill="rgb(255 255 255 / 0.08)"
          />
          <circle cx="120" cy="125" r="22" strokeWidth="2" />
          <circle cx="120" cy="125" r="8" fill="currentColor" opacity="0.5" />
          <path d="M142 125 h40" />
          <rect x="182" y="110" width="30" height="30" rx="4" />
          <path d="M212 125 h30" strokeDasharray="4 4" opacity="0.6" />
          <path d="M80 160 h160" opacity="0.3" />
          <text
            x="160"
            y="200"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            fontSize="11"
            opacity="0.5"
            fontFamily="system-ui, sans-serif"
          >
            Kameralı tespit
          </text>
        </svg>

        {/* Marked slot for future real photo */}
        <div
          className="absolute bottom-3 right-3 rounded-md border border-dashed border-white/30 bg-black/20 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/50"
          aria-hidden="true"
        >
          Fotoğraf alanı
        </div>
      </div>
    </div>
  );
}

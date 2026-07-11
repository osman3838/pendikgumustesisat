export function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col lg:min-h-[320px]">
      {/* TODO: Replace illustration block with a real on-site job photo in /public/brand/ */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-primary-light p-6 shadow-md">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 70% 30%, rgb(22 166 196 / 0.2) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        {/* Line illustration: camera inspection device + pipe */}
        <svg
          viewBox="0 0 320 240"
          className="relative z-10 w-full max-w-[280px] text-primary"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M40 180 Q40 120 100 100 T200 80 T280 60" opacity="0.35" />
          <circle cx="280" cy="60" r="8" fill="currentColor" opacity="0.25" />
          <rect
            x="60"
            y="90"
            width="120"
            height="70"
            rx="8"
            fill="var(--brand-accent-light)"
          />
          <circle cx="120" cy="125" r="22" strokeWidth="2" />
          <circle cx="120" cy="125" r="8" fill="currentColor" opacity="0.4" />
          <path d="M142 125 h40" />
          <rect x="182" y="110" width="30" height="30" rx="4" />
          <path d="M212 125 h30" strokeDasharray="4 4" opacity="0.5" />
          <path d="M80 160 h160" opacity="0.25" />
          <text
            x="160"
            y="200"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            fontSize="11"
            opacity="0.55"
            fontFamily="system-ui, sans-serif"
          >
            Kameralı tespit
          </text>
        </svg>

        {/* Marked slot for future real photo */}
        <div
          className="absolute bottom-3 right-3 rounded-md border border-dashed border-on-light-border bg-surface/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-on-light-subtle"
          aria-hidden="true"
        >
          Fotoğraf alanı
        </div>
      </div>
    </div>
  );
}

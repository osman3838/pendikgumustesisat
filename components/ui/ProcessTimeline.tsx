"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { label: "Kameralı cihazla hat görüntülenir", icon: "camera" },
  { label: "Yeri ve nedeni belirlenir", icon: "target" },
  { label: "Robot cihazla kırmadan müdahale", icon: "tool" },
  { label: "Hat temizlenir ve test edilir", icon: "check" },
];

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "camera") return <svg width="22" height="22" viewBox="0 0 24 24" {...p}><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>;
  if (name === "target") return <svg width="22" height="22" viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>;
  if (name === "tool") return <svg width="22" height="22" viewBox="0 0 24 24" {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 17l3 3 5.5-5.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.7-.7-2.3z"/></svg>;
  return <svg width="22" height="22" viewBox="0 0 24 24" {...p}><path d="M20 6 9 17l-5-5"/></svg>;
}

export default function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- show final static state for reduced motion
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <ol ref={ref} className="gt-tl" data-active={active} aria-label="Kırmadan açma süreci">
      <span className="gt-tl__track" aria-hidden="true" />
      <span className="gt-tl__fill" aria-hidden="true" />
      {STEPS.map((s, i) => (
        <li key={i} className="gt-tl__step" style={{ ["--i" as string]: i }}>
          <span className="gt-tl__dot" aria-hidden="true"><Icon name={s.icon} /></span>
          <span className="gt-tl__label">{s.label}</span>
        </li>
      ))}
      <style>{`
        .gt-tl{position:relative;list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
        .gt-tl__track,.gt-tl__fill{position:absolute;top:23px;height:3px;border-radius:2px;}
        .gt-tl__track{left:23px;right:23px;background:#E2E8F0;}
        .gt-tl__fill{left:23px;width:0;background:var(--brand-primary,#037BD3);transition:width 5.5s ease;}
        .gt-tl[data-active="true"] .gt-tl__fill{width:calc(100% - 46px);}
        .gt-tl__step{display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;opacity:.35;transform:translateY(6px);transition:opacity 1.1s ease,transform 1.1s ease;transition-delay:calc(var(--i)*1.3s);}
        .gt-tl[data-active="true"] .gt-tl__step{opacity:1;transform:translateY(0);}
        .gt-tl__dot{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#EEF2F7;border:2px solid #E2E8F0;color:#94A3B8;transition:background 1.1s ease,border-color 1.1s ease,color 1.1s ease;transition-delay:calc(var(--i)*1.3s);}
        .gt-tl[data-active="true"] .gt-tl__dot{background:var(--brand-primary,#037BD3);border-color:var(--brand-primary,#037BD3);color:#fff;}
        .gt-tl__label{margin-top:12px;font-size:13.5px;line-height:1.4;max-width:150px;color:var(--text-secondary,#475569);transition:color 1.1s ease;transition-delay:calc(var(--i)*1.3s);}
        .gt-tl[data-active="true"] .gt-tl__label{color:var(--text-primary,#0F2A44);}
        @media (max-width:640px){
          .gt-tl{grid-template-columns:1fr;gap:22px;}
          .gt-tl__track{left:23px;top:23px;bottom:23px;right:auto;width:3px;height:auto;}
          .gt-tl__fill{left:23px;top:23px;width:3px!important;height:0;background:var(--brand-primary,#037BD3);transition:height 5.5s ease;}
          .gt-tl[data-active="true"] .gt-tl__fill{height:calc(100% - 46px);}
          .gt-tl__step{flex-direction:row;align-items:center;gap:14px;text-align:left;}
          .gt-tl__dot{flex-shrink:0;}
          .gt-tl__label{margin-top:0;max-width:none;}
        }
        @media (prefers-reduced-motion:reduce){.gt-tl *{transition:none!important;}}
      `}</style>
    </ol>
  );
}

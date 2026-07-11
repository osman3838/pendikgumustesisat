import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function HeroVisual() {
  const { hero } = siteConfig;

  return (
    <div className="relative flex h-full min-h-[280px] flex-col lg:min-h-[320px]">
      <div className="relative flex flex-1 overflow-hidden rounded-xl border border-border bg-primary-light shadow-md">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          className="h-full w-full object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="gt-scan" aria-hidden="true">
          <span className="gt-scan__sweep" />
          <style>{`
            .gt-scan{position:absolute;inset:0;overflow:hidden;pointer-events:none;border-radius:inherit;}
            .gt-scan__sweep{
              position:absolute;left:0;right:0;top:0;height:55%;
              transform:translateY(-100%);
              opacity:0;
              background:linear-gradient(180deg,
                rgba(22,166,196,0) 0%,
                rgba(22,166,196,0.10) 40%,
                rgba(34,197,224,0.28) 72%,
                rgba(56,225,255,0.45) 92%,
                rgba(120,243,255,0.60) 100%);
              animation:gt-scan 4s cubic-bezier(.4,0,.6,1) infinite;
            }
            .gt-scan__sweep::before{
              content:"";position:absolute;left:0;right:0;bottom:0;height:70%;
              background:linear-gradient(180deg,transparent,rgba(56,225,255,0.22));
              filter:blur(6px);
            }
            .gt-scan__sweep::after{
              content:"";position:absolute;left:0;right:0;bottom:0;height:3px;
              background:linear-gradient(90deg,transparent,#7df3ff 15%,#c8faff 50%,#7df3ff 85%,transparent);
              box-shadow:0 0 16px 4px rgba(56,225,255,.65),0 0 48px 12px rgba(22,166,196,.30);
            }
            @keyframes gt-scan{
              0%   {transform:translateY(-100%);opacity:0;}
              6%   {opacity:1;}
              55%  {transform:translateY(120%);opacity:1;}
              64%  {transform:translateY(120%);opacity:0;}
              100% {transform:translateY(120%);opacity:0;}
            }
            @media (prefers-reduced-motion:reduce){.gt-scan{display:none;}}
          `}</style>
        </div>
      </div>
    </div>
  );
}

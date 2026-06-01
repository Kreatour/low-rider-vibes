import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import character from "@/assets/lowrider-character.gif.asset.json";
import banner from "@/assets/lowrider-banner.jpg.asset.json";
import anthem from "@/assets/lowrider-anthem.mp3.asset.json";

const CA = "EQBQqBnFS9m2Z22x8xSFQw0tgO3oLmFE6l1kFZQRcbmWiP2x";
const LINKS = {
  chat: "https://t.me/lowestrider",
  x: "https://x.com/lowestriderxx",
  gaspump:
    "https://t.me/GasPump_bot/app?startapp=eyJ0b2tlbl9hZGRyZXNzIjogIkVRQlFxQm5GUzltMloyMng4eFNGUXcwdGdPM29MbUZFNmwxa0ZaUVJjYm1XaVAyeCJ9",
  buy: "https://t.me/dtrade?start=16ZqlHyQsp_EQBQqBnFS9m2Z22x8xSFQw0tgO3oLmFE6l1kFZQRcbmWiP2x",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$LORR — Low Rider, the audio meme on GasPump" },
      { name: "description", content: "Low Rider ($LORR) — the audio memecoin born from Telegram Gifts. Cruise the sunset on TON via GasPump." },
      { property: "og:title", content: "$LORR — Low Rider" },
      { property: "og:description", content: "Audio memecoin on TON. Roll low. Ride loud." },
      { property: "og:image", content: banner.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: banner.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Lobster&family=Rubik:wght@400;600;800&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.volume = 0.7;
      a.play().catch(() => {});
    } else a.pause();
  };

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <audio ref={audioRef} src={anthem.url} loop preload="none" />

      {/* Marquee */}
      <div className="border-b border-border bg-background/40 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-bold uppercase tracking-widest text-accent">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8 px-4">
              {Array.from({ length: 12 }).map((__, j) => (
                <span key={j}>$LORR · Low Rider · Audio Meme · TON · GasPump · Roll Low Ride Loud ·</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-5 pt-8 pb-12 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-2xl sm:text-3xl text-accent text-glow">Low</p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl chrome-text leading-none">
            RIDER
          </h1>
          <p className="mt-3 font-script text-3xl sm:text-4xl text-secondary text-glow">$LORR</p>

          <div className="relative mx-auto mt-8 w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl bg-secondary/40" />
            <img
              src={character.url}
              alt="Low Rider character cruising"
              className="mx-auto w-64 sm:w-80 animate-lowride drop-shadow-[0_20px_30px_oklch(0.3_0.2_320/0.6)]"
            />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            The audio meme that rolled out of a Telegram Gift. Cruisin' on TON,
            droppin' it like it's hot — live on GasPump.
          </p>

          <button
            onClick={toggle}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:scale-105 active:scale-95"
          >
            <span className="text-xl">{playing ? "⏸" : "▶"}</span>
            {playing ? "Pause the Anthem" : "Play the Anthem"}
          </button>
        </div>
      </section>

      {/* Banner */}
      <section className="px-5">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-secondary/60 shadow-glow">
          <img src={banner.url} alt="Low Rider sunset banner" className="w-full" />
        </div>
      </section>

      {/* CA */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Contract Address</p>
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-background/60 p-3 sm:p-4 border border-border">
            <code className="flex-1 truncate text-xs sm:text-sm text-foreground/90">{CA}</code>
            <button
              onClick={copyCA}
              className="shrink-0 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:scale-105 transition shadow-neon"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-background/40 px-3 py-1">Chain: TON</span>
            <span className="rounded-full bg-background/40 px-3 py-1">Launchpad: GasPump</span>
            <span className="rounded-full bg-background/40 px-3 py-1">Type: Audio Meme</span>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-4">
          <a href={LINKS.buy} target="_blank" rel="noopener noreferrer"
            className="group rounded-2xl bg-primary p-5 text-primary-foreground shadow-glow hover:scale-[1.02] transition">
            <p className="text-xs uppercase tracking-widest opacity-80">Buy on</p>
            <p className="font-display text-2xl">dTrade →</p>
          </a>
          <a href={LINKS.gaspump} target="_blank" rel="noopener noreferrer"
            className="group rounded-2xl bg-secondary p-5 text-secondary-foreground shadow-neon hover:scale-[1.02] transition">
            <p className="text-xs uppercase tracking-widest opacity-80">Trade on</p>
            <p className="font-display text-2xl">GasPump →</p>
          </a>
          <a href={LINKS.chat} target="_blank" rel="noopener noreferrer"
            className="rounded-2xl border-2 border-accent bg-card p-5 text-foreground hover:bg-accent hover:text-accent-foreground transition">
            <p className="text-xs uppercase tracking-widest opacity-80">Telegram</p>
            <p className="font-display text-2xl">Chat →</p>
          </a>
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer"
            className="rounded-2xl border-2 border-accent bg-card p-5 text-foreground hover:bg-accent hover:text-accent-foreground transition">
            <p className="text-xs uppercase tracking-widest opacity-80">Follow on</p>
            <p className="font-display text-2xl">X →</p>
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground/70">
          $LORR is a memecoin with no intrinsic value or expectation of financial return. Ride for the culture.
        </p>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import character from "@/assets/lowrider-character.gif";
import sticker1 from "@/assets/lowrider-sticker-1.gif";
import sticker2 from "@/assets/lowrider-sticker-2.gif";
import anthem from "@/assets/lowrider-anthem.mp3";
import favicon from "@/assets/lowrider-favicon.jpg";

const CA = "EQBQqBnFS9m2Z22x8xSFQw0tgO3oLmFE6l1kFZQRcbmWiP2x";
const LINKS = {
  chat: "https://t.me/lowestrider",
  x: "https://x.com/lowestriderxx",
  gaspump:
    "https://t.me/GasPump_bot/app?startapp=eyJ0b2tlbl9hZGRyZXNzIjogIkVRQlFxQm5GUzltMloyMng4eFNGUXcwdGdPM29MbUZFNmwxa0ZaUVJjYm1XaVAyeCJ9",
  buy: "https://t.me/dtrade?start=16ZqlHyQsp_EQBQqBnFS9m2Z22x8xSFQw0tgO3oLmFE6l1kFZQRcbmWiP2x",
  stickers: "https://t.me/addstickers/LowRiderGifts_by_EmojiRu_Bot",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$LORR — Low Rider, the audio meme on GasPump" },
      { name: "description", content: "Low Rider ($LORR) — the audio memecoin born from Telegram Gifts. Cruise the sunset on TON via GasPump." },
      { property: "og:title", content: "$LORR — Low Rider" },
      { property: "og:description", content: "Audio memecoin on TON. Roll low. Ride loud." },
      { property: "og:image", content: character },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: character },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Lobster&family=Rubik:wght@400;600;800&display=swap" },
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/jpeg", href: favicon },
      { rel: "apple-touch-icon", href: favicon },
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
      <audio ref={audioRef} src={anthem} loop preload="none" />

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
      <section className="relative px-5 pt-8 pb-6 sm:pt-16 sm:pb-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-2xl sm:text-3xl text-accent text-glow animate-fade-in">Low</p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl chrome-text leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
            RIDER
          </h1>
          <p className="mt-3 font-script text-3xl sm:text-4xl text-secondary text-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>$LORR</p>

          <div className="relative mx-auto mt-8 w-full max-w-3xl">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl bg-secondary/40 animate-pulse" />
            <div className="flex items-end justify-center gap-2 sm:gap-6">
              <img
                src={sticker1}
                alt="Low Rider sticker"
                className="w-20 sm:w-36 md:w-44 animate-lowride drop-shadow-[0_15px_25px_oklch(0.3_0.2_320/0.6)] -rotate-6 will-change-transform"
                style={{ animationDelay: "0.3s" }}
                loading="lazy"
              />
              <img
                src={character}
                alt="Low Rider character cruising"
                className="w-40 sm:w-64 md:w-80 animate-lowride drop-shadow-[0_20px_30px_oklch(0.3_0.2_320/0.6)] relative z-10 will-change-transform"
                loading="lazy"
              />
              <img
                src={sticker2}
                alt="Low Rider sticker"
                className="w-20 sm:w-36 md:w-44 animate-lowride drop-shadow-[0_15px_25px_oklch(0.3_0.2_320/0.6)] rotate-6 will-change-transform"
                style={{ animationDelay: "0.6s" }}
                loading="lazy"
              />
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            The audio meme that rolled out of a Telegram Gift. Cruisin' on TON,
            droppin' it like it's hot — live on GasPump.
          </p>

          {/* Low rider boombox-style play button */}
          <button
            onClick={toggle}
            aria-label={playing ? "Pause anthem" : "Play anthem"}
            className="group relative mt-6 inline-flex items-center gap-3 rounded-2xl border-2 border-accent/70 bg-gradient-to-b from-[oklch(0.35_0.12_340)] via-[oklch(0.22_0.09_340)] to-[oklch(0.15_0.08_340)] px-6 py-3 font-display text-lg shadow-neon transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_oklch(0.85_0.25_340/0.6)] active:scale-95"
          >
            <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[oklch(0.4_0.05_340)] to-[oklch(0.1_0.03_340)] ring-2 ring-accent/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110">
              <span className={`h-3 w-3 rounded-full bg-accent ${playing ? "animate-pulse" : ""} shadow-[0_0_8px_oklch(0.85_0.18_90/0.9)]`} />
            </span>
            <span className="chrome-text font-display text-lg">
              {playing ? "Killin' the Vibe" : "Bump the Beat"}
            </span>
            <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[oklch(0.4_0.05_340)] to-[oklch(0.1_0.03_340)] ring-2 ring-accent/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110">
              <span className={`h-3 w-3 rounded-full bg-accent ${playing ? "animate-pulse" : ""} shadow-[0_0_8px_oklch(0.85_0.18_90/0.9)]`} style={{ animationDelay: "0.3s" }} />
            </span>
          </button>
        </div>
      </section>

      {/* CA */}
      <section className="px-5 pt-2 pb-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Contract Address</p>
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-background/60 p-3 sm:p-4 border border-border transition-colors duration-300 hover:border-accent/30">
            <code className="flex-1 truncate text-xs sm:text-sm text-foreground/90">{CA}</code>
            <button
              onClick={copyCA}
              className="shrink-0 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:scale-105 transition-all duration-300 shadow-neon active:scale-95"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-background/40 px-3 py-1 transition-colors duration-300 hover:bg-background/60">Chain: TON</span>
            <span className="rounded-full bg-background/40 px-3 py-1 transition-colors duration-300 hover:bg-background/60">Launchpad: GasPump</span>
            <span className="rounded-full bg-background/40 px-3 py-1 transition-colors duration-300 hover:bg-background/60">Type: Audio Meme</span>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Buy & Trade — horizontal */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a href={LINKS.buy} target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl bg-primary p-5 text-primary-foreground shadow-glow hover:scale-[1.02] transition-all duration-300 text-center active:scale-95">
              <p className="text-xs uppercase tracking-widest opacity-80">Buy on</p>
              <p className="font-display text-2xl">dTrade →</p>
            </a>
            <a href={LINKS.gaspump} target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl bg-secondary p-5 text-secondary-foreground shadow-neon hover:scale-[1.02] transition-all duration-300 text-center active:scale-95">
              <p className="text-xs uppercase tracking-widest opacity-80">Trade on</p>
              <p className="font-display text-2xl">GasPump →</p>
            </a>
          </div>

          {/* Floating social icon buttons */}
          <div className="flex items-center justify-center gap-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href={LINKS.chat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Chat"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-card text-accent shadow-neon hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.75 16.3l-3.1 3.68c-.41.49-1.07.49-1.47 0z"/>
              </svg>
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-card text-accent shadow-neon hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Sticker pack — unchanged */}
          <a href={LINKS.stickers} target="_blank" rel="noopener noreferrer"
            className="group block rounded-2xl bg-gradient-to-r from-accent/80 to-primary/80 p-5 text-white shadow-neon hover:scale-[1.02] transition-all duration-300 text-center active:scale-95 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <p className="text-xs uppercase tracking-widest opacity-90">Telegram</p>
            <p className="font-display text-2xl">View Sticker Pack →</p>
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground/70 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          $LORR is a memecoin with no intrinsic value or expectation of financial return. Ride for the culture.
        </p>
      </section>
    </main>
  );
}

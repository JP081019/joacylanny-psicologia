"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monogram } from "@/components/ui/Monogram";
import { site } from "@/data/site-content";
import styles from "./PortalExperience.module.css";

const SESSION_KEY = "joacylanny.portal.seen.v1";

function archPath(x: number, y: number, width: number, height: number) {
  const r = width / 2;
  return `M${x},${y + height} L${x},${y + r} C${x},${y + r * .448} ${x + r * .448},${y} ${x + r},${y} C${x + r * 1.552},${y} ${x + width},${y + r * .448} ${x + width},${y + r} L${x + width},${y + height} Z`;
}

export function PortalExperience() {
  const dialog = useRef<HTMLDialogElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const brand = useRef<HTMLDivElement>(null);
  const hole = useRef<SVGPathElement>(null);
  const backdrop = useRef<SVGSVGElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const finishRef = useRef<(focus?: boolean) => void>(() => {});

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const overlay = dialog.current;
    const symbol = mark.current;
    const target = document.querySelector<HTMLElement>("[data-portal-target]");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!overlay || !symbol || !target) return;
    const heroNodes = gsap.utils.toArray<HTMLElement>("[data-hero-line], [data-hero-reveal], [data-portal-image]");

    let timeline: gsap.core.Timeline | undefined;
    let watchdog: ReturnType<typeof setTimeout> | undefined;
    let finished = false;
    let previouslySeen = false;
    try { previouslySeen = sessionStorage.getItem(SESSION_KEY) === "1"; } catch { /* A navegação continua sem armazenamento. */ }
    const shouldPlay = !preference.matches && !previouslySeen && !location.hash && window.scrollY < 50;
    const ctx = gsap.context(() => {});
    const media = gsap.matchMedia();

    function finish(moveFocus = false, remember = true) {
      if (finished) return;
      finished = true;
      timeline?.kill();
      if (watchdog) clearTimeout(watchdog);
      if (shouldPlay && remember) {
        try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* A navegação continua sem armazenamento. */ }
      }
      const focusWasInside = overlay?.contains(document.activeElement);
      overlay?.close();
      gsap.set(heroNodes, { clearProps: "all" });
      if (moveFocus || focusWasInside) document.getElementById("hero-title")?.focus({ preventScroll: true });
    }
    finishRef.current = finish;

    try {
      if (shouldPlay) {
        overlay.showModal();
        overlay.dataset.playing = "true";
        skip.current?.focus({ preventScroll: true });
        const rect = symbol.getBoundingClientRect();
        const destination = target.getBoundingClientRect();
        const scale = destination.width / rect.width;
        hole.current?.setAttribute("d", archPath(rect.x, rect.y, rect.width, rect.height));
        const paths = symbol.querySelectorAll<SVGPathElement>("path");
        ctx.add(() => {
          paths.forEach(path => {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          });
          gsap.set(symbol.querySelector("circle"), { opacity: 0 });
          gsap.set(brand.current, { opacity: 0, y: 8 });
          gsap.set(hole.current, { opacity: 0 });
          gsap.set("[data-hero-line]", { yPercent: 108, opacity: 0 });
          gsap.set("[data-hero-reveal]", { opacity: 0, y: 14 });
          timeline = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => finish() });
          timeline.to(paths[0], { strokeDashoffset: 0, duration: 1.1 }, .25)
            .to(paths[1], { strokeDashoffset: 0, duration: .9 }, .85)
            .to(symbol.querySelector("circle"), { opacity: 1, duration: .3 }, 1.5)
            .to(brand.current, { opacity: 1, y: 0, duration: .4 }, 1.75)
            .to(brand.current, { opacity: 0, duration: .25 }, 2.18)
            .to(symbol, {
              x: destination.x + destination.width / 2 - (rect.x + rect.width / 2),
              y: destination.y + destination.height / 2 - (rect.y + rect.height / 2),
              scale, duration: .85, ease: "power2.inOut",
            }, 2.2)
            .to(hole.current, { opacity: 1, duration: .2 }, 2.26)
            .to(hole.current, { attr: { d: archPath(destination.x, destination.y, destination.width, destination.height) }, duration: .85, ease: "power2.inOut" }, 2.2)
            .to(backdrop.current, { opacity: 0, duration: .48 }, 2.75)
            .to(symbol, { opacity: 0, duration: .35 }, 2.87)
            .to(skip.current, { opacity: 0, duration: .15 }, 3)
            .to("[data-hero-line]", { yPercent: 0, opacity: 1, duration: .65, stagger: .09 }, 2.65)
            .to("[data-hero-reveal]", { opacity: 1, y: 0, duration: .55, stagger: .08 }, 2.8);
        });
        // Falha de biblioteca ou aba suspensa nunca deixa o conteúdo preso na abertura.
        watchdog = setTimeout(() => finish(), 5500);
      }

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
          gsap.from(el, { y: 26, opacity: .35, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } });
        });
        if (window.matchMedia("(min-width: 801px) and (pointer: fine)").matches) {
          gsap.to("[data-portal-image]", { yPercent: 4, scale: 1.035, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 1 } });
          gsap.from("[data-image-reveal]", { clipPath: "inset(8% 0 0 0)", duration: .9, ease: "power3.out", scrollTrigger: { trigger: "#sobre", start: "top 80%", once: true } });
        }
      });
    } catch {
      finish();
    }

    function onResize() { if (!finished && shouldPlay) finish(); }
    function onPreferenceChange() { if (preference.matches) finish(); }
    window.addEventListener("resize", onResize, { passive: true });
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      finish(false, false);
      window.removeEventListener("resize", onResize);
      preference.removeEventListener("change", onPreferenceChange);
      media.revert();
      ctx.revert();
      finishRef.current = () => {};
    };
  }, []);

  return (
    <dialog ref={dialog} className={styles.intro} aria-label="Abertura de Joacylanny Psicologia" onCancel={event => { event.preventDefault(); finishRef.current(true); }}>
      <svg ref={backdrop} className={styles.backdrop} width="100%" height="100%" aria-hidden="true">
        <defs><mask id="portal-opening-mask"><rect width="100%" height="100%" fill="white" /><path ref={hole} fill="black" /></mask></defs>
        <rect width="100%" height="100%" fill="var(--color-ivory)" mask="url(#portal-opening-mask)" />
      </svg>
      <div ref={mark} className={styles.mark}><Monogram /></div>
      <div ref={brand} className={styles.introBrand}><Image src={site.images.horizontalLogo} alt={site.brand} width={1983} height={793} sizes="330px" /></div>
      <button ref={skip} className={styles.skip} onClick={() => finishRef.current(true)}>Pular introdução <i className="bi bi-arrow-right" aria-hidden="true" /></button>
    </dialog>
  );
}

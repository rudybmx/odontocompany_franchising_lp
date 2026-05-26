"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function useSmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Hero entrance
    gsap.from(".hero-headline", { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4 });
    gsap.from(".hero-ctas", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.6 });
    gsap.from(".hero-ticker", { y: 100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.8 });

    // Scroll reveal for cards
    const animateSections = gsap.utils.toArray('.benefit-card, .market-card, .kpi-card, .support-item, .testimonial-card');
    animateSections.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });
    });

    // CTA glow parallax
    gsap.to(".cta-bg-glow", {
      scrollTrigger: { trigger: ".cta-section", start: "top bottom", end: "bottom top", scrub: 1 },
      y: -150, scale: 1.1
    });

    // Navbar blur on scroll
    ScrollTrigger.create({
      start: "top -40",
      onEnter: () => gsap.to(".nav", { boxShadow: "0 4px 30px rgba(0,0,0,0.1)", background: "rgba(247,248,244,0.6)", backdropFilter: "blur(20px)", duration: 0.3 }),
      onLeaveBack: () => gsap.to(".nav", { boxShadow: "none", background: "rgba(247,248,244,0.0)", backdropFilter: "blur(0px)", duration: 0.3 })
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}

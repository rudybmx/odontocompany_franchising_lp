'use client';

import CtaFunnel from "@/components/CtaFunnel";

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-headline animate-in delay-2">
            Maior <em>ecossistema</em> de odontologia do Brasil
          </h1>
          <p className="hero-sub animate-in delay-3">
            +1.000 unidades. +6 milhões de pacientes. Modelo testado em 35 anos
            de mercado. Retorno do investimento a partir do 18º mês.
          </p>
          <div className="animate-in delay-4 max-w-lg mt-6 hero-ctas">
            <CtaFunnel />
          </div>
        </div>
      </div>
      <div className="hero-ticker">
        <div className="hero-ticker-track">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="hero-ticker-item" key={index}>
              <span>20 a 25% LUCRATIVIDADE MENSAL</span>
              <span className="hero-ticker-sep">·</span>
              <span>+20 MILHÕES DE PACIENTES</span>
              <span className="hero-ticker-sep">·</span>
              <span>24 MESES PRAZO DE RETORNO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

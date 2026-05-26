'use client';

import CtaFunnel from '@/components/CtaFunnel';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow animate-in delay-1">
            <div className="hero-eyebrow-line"></div>
            <span>Maior rede de franquias odontológicas do Brasil</span>
          </div>
          <h1 className="hero-headline animate-in delay-2">
            Fature até <em>R$&nbsp;1,4&nbsp;milhão</em> por ano com a franquia
            líder em odontologia
          </h1>
          <p className="hero-sub animate-in delay-3">
            +1.000 unidades. +6 milhões de pacientes. Modelo testado em 35 anos
            de mercado. Retorno do investimento a partir do 18º mês.
          </p>
          <div className="animate-in delay-4 max-w-lg mt-6">
            <CtaFunnel />
          </div>
        </div>
      </div>
      <div className="hero-ticker">
        <div className="hero-ticker-track">
          <div className="hero-ticker-item">
            <span>R$ 450k investimento inicial</span>
            <span className="hero-ticker-sep">·</span>
            <span>20–30% lucratividade mensal</span>
            <span className="hero-ticker-sep">·</span>
            <span>18 meses prazo de retorno</span>
            <span className="hero-ticker-sep">·</span>
            <span>+1.000 unidades ativas</span>
            <span className="hero-ticker-sep">·</span>
            <span>+6 milhões de pacientes</span>
            <span className="hero-ticker-sep">·</span>
            <span>35 anos de mercado</span>
          </div>
          <div className="hero-ticker-item">
            <span>R$ 450k investimento inicial</span>
            <span className="hero-ticker-sep">·</span>
            <span>20–30% lucratividade mensal</span>
            <span className="hero-ticker-sep">·</span>
            <span>18 meses prazo de retorno</span>
            <span className="hero-ticker-sep">·</span>
            <span>+1.000 unidades ativas</span>
            <span className="hero-ticker-sep">·</span>
            <span>+6 milhões de pacientes</span>
            <span className="hero-ticker-sep">·</span>
            <span>35 anos de mercado</span>
          </div>
          <div className="hero-ticker-item">
            <span>R$ 450k investimento inicial</span>
            <span className="hero-ticker-sep">·</span>
            <span>20–30% lucratividade mensal</span>
            <span className="hero-ticker-sep">·</span>
            <span>18 meses prazo de retorno</span>
            <span className="hero-ticker-sep">·</span>
            <span>+1.000 unidades ativas</span>
            <span className="hero-ticker-sep">·</span>
            <span>+6 milhões de pacientes</span>
            <span className="hero-ticker-sep">·</span>
            <span>35 anos de mercado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

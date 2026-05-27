"use client";

import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function BenefitCard({ icon, title, description, delay }: BenefitCardProps) {
  return (
    <div
      className="ben-card fade-up-item"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="ben-card-topbar" />
      <div className="ben-icon-wrap">{icon}</div>
      <h3 className="ben-card-title">{title}</h3>
      <p className="ben-card-desc">{description}</p>
    </div>
  );
}

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Marketing nacional",
    description:
      "Sua clínica ganha destaque na TV, no digital e em campanhas de performance para atrair mais pacientes.",
    delay: 100,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Modelo Seguro e Lucrativo",
    description:
      "Rede validada com histórico sólido e operação estruturada para crescer com segurança.",
    delay: 200,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Facilidade e Praticidade para o cliente",
    description:
      "Tenha uma clínica sempre cheia e captação de clientes com baixo custo. Todas as especialidades em um só lugar.",
    delay: 300,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Modelo testado e aprovado",
    description: "60% dos nossos franqueados possuem mais de uma unidade.",
    delay: 400,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Universidade corporativa",
    description:
      "Capacitação completa para você e sua equipe: operacional, comercial e clínico.",
    delay: 500,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Suporte de ponta a ponta",
    description: "Da escolha do ponto comercial à inauguração. Especialistas em obras e mercado.",
    delay: 600,
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section-new" id="vantagens">
      <div className="ben-bg-shape shape-1" />
      <div className="ben-bg-shape shape-2" />

      <div className="ben-inner">
        <div className="ben-header fade-up-item">
          <div className="section-kicker section-kicker--light">O que você recebe</div>
          <h2 className="ben-title">
            Tudo que você precisa para{" "}
            <span className="ben-highlight-text">ter sucesso</span>
          </h2>
          <p className="ben-sub">
            Você cuida da gestão do negócio. A OdontoCompany cuida de todo o
            resto.
          </p>
        </div>

        <div className="ben-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

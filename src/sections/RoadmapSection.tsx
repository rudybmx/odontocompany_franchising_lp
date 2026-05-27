"use client";

import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  FileText,
  PenLine,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Monitor,
} from "lucide-react";

type RoadmapItem = {
  step: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  accent: string;
  position: "top" | "bottom";
};

const roadmapItems: RoadmapItem[] = [
  {
    step: "01",
    label: "COF (Circular de Oferta de Franquia)",
    title: "Análise de ponto",
    body: "Dados de mercado e perfil de consumo.",
    icon: FileText,
    accent: "#2D7270",
    position: "top",
  },
  {
    step: "02",
    label: "Assinatura do contrato",
    title: "Obra e identidade",
    body: "Projeto padrão com fornecedores homologados.",
    icon: PenLine,
    accent: "#38B549",
    position: "bottom",
  },
  {
    step: "03",
    label: "Adequação técnica da unidade clínica",
    title: "Treinamento",
    body: "Capacitação completa da equipe antes da inauguração.",
    icon: GraduationCap,
    accent: "#A8D156",
    position: "top",
  },
  {
    step: "04",
    label: "Inauguração da clínica",
    title: "Mídia & Captação",
    body: "Campanhas nacionais: digital, TV, rádio e BOT.",
    icon: Megaphone,
    accent: "#4C8751",
    position: "bottom",
  },
  {
    step: "05",
    label: "Núcleo de Acompanhamento Inicial",
    title: "Pós-inauguração",
    body: "Suporte intensivo na curva de maturação.",
    icon: ShieldCheck,
    accent: "#38B549",
    position: "top",
  },
  {
    step: "06",
    label: "Universidade Corporativa",
    title: "Tecnologia & CRM",
    body: "Software de gestão e plataforma Minha OdontoCompany.",
    icon: Monitor,
    accent: "#2D7270",
    position: "bottom",
  },
];

function RoadmapStep({ item, index }: { item: RoadmapItem; index: number }) {
  const Icon = item.icon;

  return (
    <article
      className={`roadmap-print-step roadmap-print-step--${item.position}`}
      style={{
        "--roadmap-accent": item.accent,
        gridColumn: index + 1,
        gridRow: item.position === "top" ? 1 : 2,
      } as CSSProperties}
    >
      <div className="roadmap-print-step__label">{item.label}</div>

      <div className="roadmap-print-step__card">
        <div className="roadmap-print-step__badge">{item.step}</div>
        <Icon className="roadmap-print-step__icon" aria-hidden="true" />
      </div>

      <div className="roadmap-print-step__rail" />

      <div className="roadmap-print-step__ribbon">
        <span>{item.step}</span>
        <strong>{item.title}</strong>
      </div>

      <p className="roadmap-print-step__body">{item.body}</p>
    </article>
  );
}

export default function RoadmapSection() {
  return (
    <section className="roadmap-print-section" id="suporte">
      <div className="roadmap-print-container">
        <div className="roadmap-print-header">
          <div className="section-kicker section-kicker--light">Passo a passo</div>
          <h2>
            Trilha e Suporte ao <br />
            <span className="text-[#38B549]">Franqueado</span>
          </h2>
          <p>Do primeiro contato até a maturidade da sua clínica, passo a passo.</p>
        </div>

        <div className="roadmap-print-board" aria-label="Trilha e suporte ao franqueado">
          <div className="roadmap-print-board__glow roadmap-print-board__glow--left" />
          <div className="roadmap-print-board__glow roadmap-print-board__glow--right" />
          <div className="roadmap-print-board__track" />

          <div className="roadmap-print-grid">
            {roadmapItems.map((item, index) => (
              <RoadmapStep key={item.step} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

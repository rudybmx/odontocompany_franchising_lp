"use client";

import React from "react";

interface RoadmapStepProps {
  number: string;
  color: string;
  title: string;
  body: string;
}

function RoadmapVerticalItem({ number, color, title, body }: RoadmapStepProps) {
  return (
    <div className="roadmap-vertical-item">
      <div className="roadmap-vertical-node" style={{ background: color }}>
        {number}
      </div>
      <div className="roadmap-vertical-content">
        <h4 className="roadmap-vertical-title" style={{ color }}>
          {title}
        </h4>
        <p className="roadmap-vertical-body">{body}</p>
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    color: "#2D7270",
    title: "Análise e escolha do ponto",
    body: "Dados de mercado e perfil de consumo.",
  },
  {
    number: "02",
    color: "#38B549",
    title: "Obra e identidade visual",
    body: "Projeto padrão com fornecedores homologados.",
  },
  {
    number: "03",
    color: "#4C8751",
    title: "Treinamento pré-abertura",
    body: "Capacitação completa da equipe antes da inauguração.",
  },
  {
    number: "04",
    color: "#4C8751",
    title: "Marketing e captação de pacientes",
    body: "Campanhas nacionais: digital, TV, rádio e BOT.",
  },
  {
    number: "05",
    color: "#38B549",
    title: "Acompanhamento pós-inauguração",
    body: "Suporte intensivo na curva de maturação.",
  },
  {
    number: "06",
    color: "#2D7270",
    title: "Tecnologia e gestão contínua",
    body: "Software de gestão e plataforma Minha OdontoCompany.",
  },
];

export default function RoadmapSection() {
  return (
    <section className="roadmap-section" id="suporte">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <div className="section-kicker section-kicker--light">Passo a passo</div>
          <h2>
            Trilha e Suporte ao <br />
            <span className="text-[#38B549]">Franqueado</span>
          </h2>
          <p>Do primeiro contato até a maturidade da sua clínica, passo a passo.</p>
        </div>

        <div className="roadmap-serpentina-wrapper !max-w-none hidden lg:block overflow-x-auto pb-6">
          <svg
            viewBox="0 0 1100 380"
            width="1100"
            height="380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <line
              x1="50"
              y1="125"
              x2="1050"
              y2="125"
              stroke="#2D7270"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeOpacity="0.4"
            />

            <circle cx="50" cy="125" r="8" fill="#2D7270" />
            <circle cx="1050" cy="125" r="8" fill="#2D7270" />

            <path
              d="M 120 125 C 90 95, 90 35, 120 35 C 150 35, 150 95, 120 125 Z"
              fill="#2D7270"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
            />
            <line x1="108" y1="80" x2="132" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text
              x="120"
              y="104"
              fill="#ffffff"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
            >
              01
            </text>
            <path
              d="M 120 50 C 116 50, 113 53, 113 57 C 113 60, 115 62, 117 64 L 117 68 H 123 L 123 64 C 125 62, 127 60, 127 57 C 127 53, 124 50, 120 50 Z"
              stroke="#A8D156"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line x1="118" y1="71" x2="122" y2="71" stroke="#A8D156" strokeWidth="1.5" />

            <path
              d="M 290 125 C 260 95, 260 35, 290 35 C 320 35, 320 95, 290 125 Z"
              fill="#38B549"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
            />
            <line x1="278" y1="80" x2="302" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text
              x="290"
              y="104"
              fill="#ffffff"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
            >
              02
            </text>
            <rect x="284" y="52" width="12" height="12" rx="1.5" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="284" y1="60" x2="296" y2="60" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="290" y1="52" x2="290" y2="64" stroke="#ffffff" strokeWidth="1.5" />

            <path
              d="M 460 125 C 430 95, 430 35, 460 35 C 490 35, 490 95, 460 125 Z"
              fill="#A8D156"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
            />
            <line x1="448" y1="80" x2="472" y2="80" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            <text
              x="460"
              y="104"
              fill="#2D7270"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
            >
              03
            </text>
            <path d="M 460 50 L 472 56 L 460 62 L 448 56 Z" fill="none" stroke="#2D7270" strokeWidth="1.5" />
            <path d="M 452 58.5 V 64 C 452 66, 468 66, 468 64 V 58.5" fill="none" stroke="#2D7270" strokeWidth="1.5" />

            <path
              d="M 630 125 C 600 95, 600 35, 630 35 C 660 35, 660 95, 630 125 Z"
              fill="#4C8751"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
            />
            <line x1="618" y1="80" x2="642" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text
              x="630"
              y="104"
              fill="#ffffff"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
            >
              04
            </text>
            <path d="M 622 58 H 632 L 638 52 V 64 L 632 58 Z" fill="none" stroke="#A8D156" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M 622 55 H 626 V 61 H 622 Z" fill="none" stroke="#A8D156" strokeWidth="1.5" />

            <path
              d="M 800 125 C 770 95, 770 35, 800 35 C 830 35, 830 95, 800 125 Z"
              fill="#38B549"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
            />
            <line x1="788" y1="80" x2="812" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text
              x="800"
              y="104"
              fill="#ffffff"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
            >
              05
            </text>
            <path d="M 792 50 C 792 50, 800 48, 800 48 C 800 48, 808 50, 808 50 V 58 C 808 64, 800 68, 800 68 C 800 68, 792 64, 792 58 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />

            <path
              d="M 970 125 C 940 95, 940 35, 970 35 C 1000 35, 1000 95, 970 125 Z"
              fill="#2D7270"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
            />
            <line x1="958" y1="80" x2="982" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text
              x="970"
              y="104"
              fill="#ffffff"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
            >
              06
            </text>
            <rect x="960" y="48" width="20" height="14" rx="2" fill="none" stroke="#A8D156" strokeWidth="1.5" />
            <line x1="964" y1="66" x2="976" y2="66" stroke="#A8D156" strokeWidth="1.5" />
            <line x1="970" y1="62" x2="970" y2="66" stroke="#A8D156" strokeWidth="1.5" />

            <path d="M 60 170 H 175 L 190 182.5 L 175 195 H 60 L 75 182.5 Z" fill="#2D7270" />
            <text
              x="120"
              y="186.5"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
              letterSpacing="0.05em"
            >
              01. PONTO
            </text>

            <path d="M 180 170 H 345 L 360 182.5 L 345 195 H 180 L 195 182.5 Z" fill="#38B549" />
            <text
              x="265"
              y="186.5"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
              letterSpacing="0.05em"
            >
              02. IMPLANTAÇÃO
            </text>

            <path d="M 350 170 H 515 L 530 182.5 L 515 195 H 350 L 365 182.5 Z" fill="#A8D156" />
            <text
              x="435"
              y="186.5"
              fill="#2D7270"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
              letterSpacing="0.05em"
            >
              03. TREINAMENTO
            </text>

            <path d="M 520 170 H 685 L 700 182.5 L 685 195 H 520 L 535 182.5 Z" fill="#4C8751" />
            <text
              x="605"
              y="186.5"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
              letterSpacing="0.05em"
            >
              04. MARKETING
            </text>

            <path d="M 690 170 H 855 L 870 182.5 L 855 195 H 690 L 705 182.5 Z" fill="#38B549" />
            <text
              x="775"
              y="186.5"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
              letterSpacing="0.05em"
            >
              05. SUPORTE
            </text>

            <path d="M 860 170 H 1020 L 1035 182.5 L 1020 195 H 860 L 875 182.5 Z" fill="#2D7270" />
            <text
              x="945"
              y="186.5"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="var(--font-brand), sans-serif"
              letterSpacing="0.05em"
            >
              06. TECNOLOGIA
            </text>

            <line x1="120" y1="210" x2="120" y2="240" stroke="#2D7270" strokeWidth="1" />
            <circle cx="120" cy="210" r="2.5" fill="#2D7270" />
            <line x1="290" y1="210" x2="290" y2="240" stroke="#38B549" strokeWidth="1" />
            <circle cx="290" cy="210" r="2.5" fill="#38B549" />
            <line x1="460" y1="210" x2="460" y2="240" stroke="#A8D156" strokeWidth="1" />
            <circle cx="460" cy="210" r="2.5" fill="#A8D156" />
            <line x1="630" y1="210" x2="630" y2="240" stroke="#4C8751" strokeWidth="1" />
            <circle cx="630" cy="210" r="2.5" fill="#4C8751" />
            <line x1="800" y1="210" x2="800" y2="240" stroke="#38B549" strokeWidth="1" />
            <circle cx="800" cy="210" r="2.5" fill="#38B549" />
            <line x1="970" y1="210" x2="970" y2="240" stroke="#2D7270" strokeWidth="1" />
            <circle cx="970" cy="210" r="2.5" fill="#2D7270" />

            <foreignObject x="40" y="250" width="160" height="120">
              <div className="text-center font-sans">
                <h4 className="text-[12px] font-extrabold mb-1" style={{ color: "#2D7270" }}>
                  Análise de ponto
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Dados de mercado e perfil de consumo.
                </p>
              </div>
            </foreignObject>

            <foreignObject x="210" y="250" width="160" height="120">
              <div className="text-center font-sans">
                <h4 className="text-[12px] font-extrabold mb-1" style={{ color: "#38B549" }}>
                  Obra e identidade
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Projeto padrão com fornecedores homologados.
                </p>
              </div>
            </foreignObject>

            <foreignObject x="380" y="250" width="160" height="120">
              <div className="text-center font-sans">
                <h4 className="text-[12px] font-extrabold mb-1" style={{ color: "#4C8751" }}>
                  Treinamento
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Capacitação completa da equipe antes da inauguração.
                </p>
              </div>
            </foreignObject>

            <foreignObject x="550" y="250" width="160" height="120">
              <div className="text-center font-sans">
                <h4 className="text-[12px] font-extrabold mb-1" style={{ color: "#4C8751" }}>
                  Mídia &amp; Captação
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Campanhas nacionais: digital, TV, rádio e BOT.
                </p>
              </div>
            </foreignObject>

            <foreignObject x="720" y="250" width="160" height="120">
              <div className="text-center font-sans">
                <h4 className="text-[12px] font-extrabold mb-1" style={{ color: "#38B549" }}>
                  Pós-inauguração
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Suporte intensivo na curva de maturação.
                </p>
              </div>
            </foreignObject>

            <foreignObject x="890" y="250" width="160" height="120">
              <div className="text-center font-sans">
                <h4 className="text-[12px] font-extrabold mb-1" style={{ color: "#2D7270" }}>
                  Tecnologia &amp; CRM
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Software de gestão e plataforma Minha OdontoCompany.
                </p>
              </div>
            </foreignObject>
          </svg>
        </div>

        <div className="roadmap-vertical block lg:hidden">
          {steps.map((step, index) => (
            <RoadmapVerticalItem
              key={index}
              number={step.number}
              color={step.color}
              title={step.title}
              body={step.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

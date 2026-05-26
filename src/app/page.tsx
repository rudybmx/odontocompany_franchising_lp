/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { KpiRevealCard } from '@/components/KpiRevealCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import CtaFunnel from '@/components/CtaFunnel';
import { ButtonCta } from '@/components/ui/button-shiny';
import { CleanTestimonial, Testimonial } from '@/components/CleanTestimonial';


const testimonialsData: Testimonial[] = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    quote: "Saí de 20 anos no mercado financeiro sem nunca ter tocado em odontologia. O suporte da OdontoCompany foi tão completo que me senti seguro desde o primeiro dia. Hoje tenho 2 unidades e conquistei um lucro médio mensal de R$ 28k após 18 meses.",
    name: 'Ricardo S.',
    role: 'Ex-executivo bancário • Campinas, SP',
    rating: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: "Tinha minha clínica solo há 8 anos e estava travada. Com a OdontoCompany consegui escalar sem perder qualidade. A estrutura de marketing trouxe um volume de pacientes que nunca conseguiria sozinha. Hoje alcancei 3× mais receita.",
    name: 'Dra. Ana C.',
    role: 'Dentista proprietária • Belo Horizonte, MG',
    rating: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    quote: "Comecei com 1 unidade em 2022. Em 2024 abri a terceira. O modelo escala muito bem, cada unidade nova fica mais fácil de operar porque já domino os processos. São 3 unidades ativas abertas em apenas 2 anos.",
    name: 'Marcos F.',
    role: 'Empresário do setor imobiliário • Recife, PE',
    rating: 5
  }
];

const roadmapSteps = [
  {
    number: "01",
    title: "Conheça o nosso projeto",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    number: "02",
    title: "COF (Circular de Oferta de Franquia)",
    position: "top",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <circle cx="8" cy="9" r="1"/>
      </svg>
    )
  },
  {
    number: "03",
    title: "Aprovação do candidato e assinatura de contrato",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="m22 10-6 6-2-2"/>
      </svg>
    )
  },
  {
    number: "04",
    title: "Assinatura do contrato",
    position: "top",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    number: "05",
    title: "Escolha do imóvel e unidade clínica",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 21V9h6v12"/>
        <path d="M9 13h2v2H9z"/>
      </svg>
    )
  },
  {
    number: "06",
    title: "Adequação técnica da unidade clínica",
    position: "top",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M6 18h12"/>
        <path d="M12 18v-6"/>
        <path d="M19 9h-7V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10h13a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z"/>
      </svg>
    )
  },
  {
    number: "07",
    title: "Universidade Corporativa",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    number: "08",
    title: "Inauguração da clínica",
    position: "top",
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 6c1-1 3-1 3.5.5.5 1.5 0 3-1 3.5.5.5 1.5 2 1.5 3.5 0 2-1.5 2.5-2.5 2.5s-1.5-.5-1.5-1.5c0 1-1.5 1.5-2.5 1.5S8 15.5 8 13.5c0-1.5 1-3 1.5-3.5-1-.5-1.5-2-1-3.5C9 5 11 5 12 6z"/>
      </svg>
    )
  },
  {
    number: "09",
    title: "Núcleo de Acompanhamento Inicial",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  }
];


export default function Home() {
  const videos = {
    expansao: "https://www.youtube.com/embed/gqA9E_jak6w?feature=oembed&controls=1&modestbranding=1&rel=0",
    fundador: "https://www.youtube.com/embed/vJQ7fZJZSKE?feature=oembed&controls=1&modestbranding=1&rel=0",
    clinica: "https://www.youtube.com/embed/XhGBWs60bTE?feature=oembed&controls=1&modestbranding=1&rel=0"
  };
  type VideoKey = keyof typeof videos;
  const [activeVideo, setActiveVideo] = useState<VideoKey>('fundador');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => prev === index ? null : index);
  };


  const handleVideoTab = (key: VideoKey) => {
    setActiveVideo(key);
    setIsPlaying(true);
  };

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
 gsap.ticker.add((time)=>{
 lenis.raf(time * 1000);
 });
 gsap.ticker.lagSmoothing(0);
 // Hero Animations
  gsap.from(".hero-headline", { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
  gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4 });
  gsap.from(".hero-ctas", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.6 });
  gsap.from(".hero-ticker", { y: 100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.8 });
  // Scroll Animations for Sections
  const animateSections = gsap.utils.toArray('.ben-card, .mkt-card, .glow-card, .cmp-table-card, .roadmap-vertical-item');
  animateSections.forEach((el: any) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });

 gsap.to(".cta-bg-glow", {
 scrollTrigger: {
 trigger: ".cta-section",
 start: "top bottom",
 end: "bottom top",
 scrub: 1
 },
 y: -150,
 scale: 1.1
});

 // Navbar é sempre verde — sem toggle de scroll
  return () => {
  lenis.destroy();
  ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);
 return (
 <>
<nav className="nav">
 <div className="container">
 <div className="nav-inner">
 <div className="nav-logo">
 <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logo_odontocompany.svg" alt="OdontoCompany" height="36" />
 </div>

 {/* Desktop nav links */}
 <div className="nav-links hidden lg:flex">
 <a href="#vantagens">Vantagens</a>
 <a href="#numeros">Números</a>
 <a href="#depoimentos">Franqueados</a>
 <a href="#faq">Dúvidas</a>
 </div>

 {/* Desktop CTA */}
 <a href="#cta" className="nav-cta hidden lg:inline-flex">Quero investir →</a>

 {/* Mobile hamburger */}
        <button
         className="nav-hamburger lg:hidden flex flex-col gap-1.5 p-2 bg-none border-none cursor-pointer z-[110]"
         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
         aria-label="Menu"
        >
         <span className={`nav-hamburger-line block w-6 h-[2px] rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
         <span className={`nav-hamburger-line block w-6 h-[2px] rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
         <span className={`nav-hamburger-line block w-6 h-[2px] rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
 </button>
 </div>

 {/* Mobile menu overlay */}
 <div className={`lg:hidden fixed inset-0 z-[100] bg-[rgba(10,31,16,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-400 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
 <a href="#vantagens" className="text-white text-2xl font-semibold hover:text-[var(--lime)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Vantagens</a>
 <a href="#numeros" className="text-white text-2xl font-semibold hover:text-[var(--lime)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Números</a>
 <a href="#depoimentos" className="text-white text-2xl font-semibold hover:text-[var(--lime)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Franqueados</a>
 <a href="#faq" className="text-white text-2xl font-semibold hover:text-[var(--lime)] transition-colors" onClick={() => setMobileMenuOpen(false)}>Dúvidas</a>
            <a href="#cta" className="btn-cta-green text-lg mt-4 px-8 py-4" onClick={() => setMobileMenuOpen(false)}>
                Quero investir →
            </a>
 </div>
 </div>
</nav>
<section className="hero" id="hero">
 <div className="hero-overlay"></div>
 <div className="hero-inner">
 <div className="hero-content">
 <div className="hero-eyebrow animate-in delay-1">
 <div className="hero-eyebrow-line"></div>
 <span>Maior rede de franquias odontológicas do Brasil</span>
 </div>
 <h1 className="hero-headline animate-in delay-2">
 Fature até <em>R$&nbsp;1,4&nbsp;milhão</em> por ano com a franquia líder em odontologia
 </h1>
 <p className="hero-sub animate-in delay-3">
 +1.000 unidades. +6 milhões de pacientes. Modelo testado em 35 anos de mercado.
 Retorno do investimento a partir do 18º mês.
        </p>
        <div className="animate-in delay-4 max-w-lg mt-6 hero-ctas">
          <CtaFunnel />
        </div>
 </div>
 </div>
 <div className="hero-ticker">
 <div className="hero-ticker-track">
 <div className="hero-ticker-item">
 <span>R$ 450k investimento inicial</span><span className="hero-ticker-sep">·</span>
 <span>20–30% lucratividade mensal</span><span className="hero-ticker-sep">·</span>
 <span>18 meses prazo de retorno</span><span className="hero-ticker-sep">·</span>
 <span>+1.000 unidades ativas</span><span className="hero-ticker-sep">·</span>
 <span>+6 milhões de pacientes</span><span className="hero-ticker-sep">·</span>
 <span>35 anos de mercado</span>
 </div>
 <div className="hero-ticker-item">
 <span>R$ 450k investimento inicial</span><span className="hero-ticker-sep">·</span>
 <span>20–30% lucratividade mensal</span><span className="hero-ticker-sep">·</span>
 <span>18 meses prazo de retorno</span><span className="hero-ticker-sep">·</span>
 <span>+1.000 unidades ativas</span><span className="hero-ticker-sep">·</span>
 <span>+6 milhões de pacientes</span><span className="hero-ticker-sep">·</span>
 <span>35 anos de mercado</span>
 </div>
 <div className="hero-ticker-item">
 <span>R$ 450k investimento inicial</span><span className="hero-ticker-sep">·</span>
 <span>20–30% lucratividade mensal</span><span className="hero-ticker-sep">·</span>
 <span>18 meses prazo de retorno</span><span className="hero-ticker-sep">·</span>
 <span>+1.000 unidades ativas</span><span className="hero-ticker-sep">·</span>
 <span>+6 milhões de pacientes</span><span className="hero-ticker-sep">·</span>
 <span>35 anos de mercado</span>
 </div>
 </div>
 </div>
</section>
<section className="video-section" id="video">
 <div className="container">
 <div className="video-section-inner">
 <div className="video-text-side">
 <div className="video-eyebrow">
 <div className="video-eyebrow-line"></div>
 <span>Conheça por dentro</span>
 </div>
 <h2 className="video-headline">
 Veja como funciona <em>na prática</em> antes de decidir
 </h2>
        <p className="video-sub mb-8">
          Nosso time de expansão preparou um recado exclusivo para você, investidor. Em poucos minutos, você entende o modelo, o suporte e o que esperar do processo de abertura.
        </p>
        {/* GRUPO 1, Tabs (Dr. Paulo Zahr primeiro) */}
        <div className="video-tabs">
          <button
            className={`video-tab${activeVideo === 'fundador' ? ' active' : ''}`}
            onClick={() => handleVideoTab('fundador')}
          >
            Dr. Paulo Zahr
          </button>
          <button
            className={`video-tab${activeVideo === 'expansao' ? ' active' : ''}`}
            onClick={() => handleVideoTab('expansao')}
          >
            Expansão e modelo
          </button>
          <button
            className={`video-tab${activeVideo === 'clinica' ? ' active' : ''}`}
            onClick={() => handleVideoTab('clinica')}
          >
            Tour pela clínica
          </button>
        </div>


        {/* Card do speaker, muda conforme o vídeo ativo */}
        {(() => {
          const isActive = activeVideo !== 'clinica';
          const isFelipe = activeVideo === 'expansao';
          const speaker = isFelipe
            ? { name: 'Felipe Naresi', role: 'Diretor de Expansão e Implantação · OdontoCompany',
                img: 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/felipe_naresi.jpg' }
            : { name: 'Dr. Paulo Zahr', role: 'Fundador OdontoCompany',
                img: 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/drpaulozahr_2.jpg' };

          return (
            <div
              className="video-speaker transition-all duration-300"
              id="videoSpeaker"
              style={isActive ? {
                borderColor: 'rgba(181,232,0,0.45)',
                background: 'rgba(181,232,0,0.08)',
              } : {}}
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-12 h-12 rounded-full object-cover shadow-lg transition-all duration-300"
                style={isActive
                  ? { border: '2px solid rgba(181,232,0,0.5)' }
                  : { border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <div>
                <div
                  className="video-speaker-name transition-colors duration-300"
                  style={isActive ? { color: 'var(--lime)' } : {}}
                >
                  {speaker.name}
                </div>
                <div className="video-speaker-role">{speaker.role}</div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Coluna direita, apenas o player, sem mini-tabs */}
      <div className="flex flex-col">
        <div className="video-player-wrap flex-1" id="videoWrap">
          {isPlaying ? (
            <iframe
              id="videoIframe"
              src={videos[activeVideo] + '&autoplay=1'}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Vídeo OdontoCompany"
            ></iframe>
          ) : (
            <div 
              className="video-thumb" 
              id="videoThumb" 
              onClick={() => setIsPlaying(true)}
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${videos[activeVideo].split('/embed/')[1].split('?')[0]}/maxresdefault.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="video-thumb-overlay"></div>
              <div className="video-play-btn">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <div className="video-thumb-label">
                <strong>Assista agora</strong>
                Como funciona a franquia OdontoCompany
              </div>
              <div className="video-duration">3:42</div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>
<section className="market-section-new" id="mercado">
  {/* Background radial glows */}
  <div className="mkt-glow mkt-glow--right" />
  <div className="mkt-glow mkt-glow--left" />

  <div className="mkt-inner">
    {/* ── Coluna esquerda ── */}
    <div className="mkt-left">
      <div className="mkt-eyebrow">
        <div className="mkt-eyebrow-line" />
        <span>O MERCADO</span>
      </div>

      <h2 className="mkt-headline">
        Odontologia: o mercado que{" "}
        <span className="mkt-badge">nunca para</span>
      </h2>

      <p className="mkt-body">
        A saúde bucal não é sazonal. É uma necessidade contínua, impulsionada por uma
        população em crescimento e uma conscientização cada vez maior sobre a importância
        estética e funcional da odontologia.
      </p>

      <ul className="mkt-list">
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <strong>214 milhões de pessoas</strong> fazem do Brasil o 2º maior mercado odontológico do mundo, atrás só dos EUA.
          </div>
        </li>
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            O setor fatura <strong>R$ 30 bilhões por ano</strong> e cresce mesmo em períodos de crise econômica.
          </div>
        </li>
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            Com <strong>+100 mil implantes por ano</strong>, a OdontoCompany captura o segmento de maior ticket do setor.
          </div>
        </li>
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            Você <strong>não precisa ser dentista</strong>, o modelo foi desenhado para gestores e investidores.
          </div>
        </li>
      </ul>
    </div>

    {/* ── Coluna direita: Bento Grid ── */}
    <div className="mkt-grid">
      <div className="mkt-card">
        <div className="mkt-card-icon">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2C8.5 2 5 5 5 9c0 2 .8 3.8 2 5l2 6c.3.8 1 1 1 1h4c0 0 .7-.2 1-1l2-6c1.2-1.2 2-3 2-5 0-4-3.5-7-7-7z"/>
          </svg>
        </div>
        <div className="mkt-card-num mkt-card-num--lime">+1.000</div>
        <div className="mkt-card-label">UNIDADES EM TODOS OS ESTADOS DO BRASIL</div>
      </div>

      <div className="mkt-card">
        <div className="mkt-card-icon mkt-card-icon--green">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div className="mkt-card-num">+6M</div>
        <div className="mkt-card-label">CLIENTES ATIVOS NA REDE</div>
      </div>

      <div className="mkt-card">
        <div className="mkt-card-icon mkt-card-icon--teal">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
          </svg>
        </div>
        <div className="mkt-card-num">+100k</div>
        <div className="mkt-card-label">IMPLANTES DENTÁRIOS POR ANO</div>
      </div>

      <div className="mkt-card">
        <div className="mkt-card-icon mkt-card-icon--soft">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/>
            <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
            <path d="M16 3.5a4 4 0 0 1 0 7" opacity="0.5"/>
          </svg>
        </div>
        <div className="mkt-card-num">+13k</div>
        <div className="mkt-card-label">DENTISTAS INSCRITOS NA PLATAFORMA</div>
      </div>
    </div>
  </div>
</section>
<section className="compare-section-new" id="comparativo">
  {/* Ambient Glow */}
  <div className="cmp-glow" />

  <div className="cmp-inner">
    {/* Header Section */}
    <header className="cmp-header">
      <div className="cmp-eyebrow">
        <div className="cmp-eyebrow-line" />
        <span>Por que OdontoCompany?</span>
      </div>
      <h2 className="cmp-title">
        Quanto rende R$ 450k nos <em>diferentes investimentos</em>?
      </h2>
      <p className="cmp-sub">
        Antes de decidir, compare o retorno da sua franquia com outras formas de aplicar o mesmo capital.
      </p>
    </header>

    {/* Table Container */}
    <div className="cmp-table-container group">
      {/* Outer blurred glow */}
      <div className="cmp-table-glow group-hover:opacity-50" />
      
      <div className="cmp-table-card">
        <div className="cmp-table-scroll">
          <table className="cmp-table">
            <thead>
              <tr>
                <th className="th-empty"></th>
                <th className="th-highlight rounded-t-lg">OdontoCompany</th>
                <th>Tesouro IPCA+</th>
                <th>FII médio</th>
                <th>CDB 120% CDI</th>
                <th>Clínica solo</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="td-label">Renda mensal média</td>
                <td className="td-highlight">
                  <span className="td-badge">R$ 9–36k</span>
                </td>
                <td>R$ 2.700</td>
                <td>R$ 2.250</td>
                <td>R$ 3.500</td>
                <td className="td-dim">R$ 3–8k*</td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="td-label">Retorno do capital</td>
                <td className="td-highlight font-semibold">18–24 meses</td>
                <td>~14 anos</td>
                <td>~17 anos</td>
                <td>~11 anos</td>
                <td className="td-dim">Indefinido</td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="td-label">Gestão necessária</td>
                <td className="td-highlight">Com suporte total</td>
                <td>Zero</td>
                <td>Zero</td>
                <td>Zero</td>
                <td className="td-dim">100% sozinho</td>
              </tr>
              {/* Row 4 */}
              <tr>
                <td className="td-label">Marca e marketing</td>
                <td className="td-highlight">Incluso + Eliana</td>
                <td className="td-dim">-</td>
                <td className="td-dim">-</td>
                <td className="td-dim">-</td>
                <td className="td-dim">Por conta</td>
              </tr>
              {/* Row 5 */}
              <tr>
                <td className="td-label">Modelo validado</td>
                <td className="td-highlight rounded-b-lg font-semibold">35 anos + 1.000 un.</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Sim</td>
                <td className="td-dim">Sem garantia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Disclaimer */}
    <p className="cmp-disclaimer">
      * Valores médios estimados. Resultados variam conforme mercado, localização e gestão do franqueado. Metodologia OdontoCompany Franchising.
    </p>

    {/* CTA Area */}
    <div className="cmp-cta-area">
      <a className="cmp-cta-btn group" href="#contato">
        <span className="cmp-cta-shimmer group-hover:animate-shimmer" />
        <span className="cmp-cta-content">
          Simular meu investimento
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </a>
    </div>
  </div>
</section>
<section className="benefits-section-new" id="vantagens">
  {/* Ambient background blur elements for light theme */}
  <div className="ben-bg-shape shape-1" />
  <div className="ben-bg-shape shape-2" />

  <div className="ben-inner">
    {/* Header */}
    <div className="ben-header fade-up-item">
      <div className="ben-eyebrow">
        <div className="ben-line" />
        <span>O que você recebe</span>
        <div className="ben-line" />
      </div>
      <h2 className="ben-title">
        Tudo que você precisa para <span className="ben-highlight-text">ter sucesso</span>
      </h2>
      <p className="ben-sub">
        Você cuida da gestão do negócio. A OdontoCompany cuida de todo o resto.
      </p>
    </div>

    {/* Grid */}
    <div className="ben-grid">
      {/* Card 1 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '100ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            <path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Marketing nacional com a Eliana</h3>
        <p className="ben-card-desc">Campanhas nas maiores emissoras do país. Sua clínica aparece na TV, rádio e mídia digital.</p>
      </div>

      {/* Card 2 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '200ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Modelo de baixíssimo risco</h3>
        <p className="ben-card-desc">+1.000 unidades operando. Franquias têm 90% de sobrevivência em 5 anos.</p>
      </div>

      {/* Card 3 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '300ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Você não precisa ser dentista</h3>
        <p className="ben-card-desc">O franqueado é o gestor. Apoiamos na contratação do responsável técnico.</p>
      </div>

      {/* Card 4 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '400ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Tecnologia e CRM inclusos</h3>
        <p className="ben-card-desc">Software de gestão, agendamento digital e plataforma exclusiva.</p>
      </div>

      {/* Card 5 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '500ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Universidade corporativa</h3>
        <p className="ben-card-desc">Capacitação completa para você e sua equipe: operacional, comercial e clínico.</p>
      </div>

      {/* Card 6 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '600ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Suporte de ponta a ponta</h3>
        <p className="ben-card-desc">Da escolha do ponto comercial à inauguração. Especialistas em obras e mercado.</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-grid-pattern py-20 px-4 md:py-28 flex flex-col items-center justify-center w-full" id="numeros">
  <div className="max-w-6xl w-full mx-auto flex flex-col items-center gap-12">
    {/* Header */}
    <div className="text-center space-y-4">
      <h2 className="text-white text-4xl md:text-5xl tracking-tight font-black leading-tight">
        Os números da <br/><span className="text-[var(--lime)]">sua futura franquia</span>
      </h2>
      <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-medium">
        Projeções baseadas na média da rede. Valores sujeitos ao mercado local e à gestão do franqueado.
      </p>
    </div>

    {/* Financial Metrics Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 text-center glow-card flex flex-col justify-center min-h-[160px] transition-transform duration-300 hover:scale-105">
        <span className="text-slate-700 font-bold text-[11px] md:text-xs uppercase tracking-tight mb-2 leading-tight">
          FATURAMENTO MÉDIO<br/>POR ANO
        </span>
        <span className="text-[#38d838] text-3xl md:text-4xl font-extrabold whitespace-nowrap">R$ 1,4M</span>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 text-center glow-card flex flex-col justify-center min-h-[160px] transition-transform duration-300 hover:scale-105">
        <span className="text-slate-700 font-bold text-[11px] md:text-xs uppercase tracking-tight mb-2 leading-tight">
          INVESTIMENTO INICIAL<br/>TOTAL
        </span>
        <span className="text-[#38d838] text-3xl md:text-4xl font-extrabold whitespace-nowrap">R$ 450k</span>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 text-center glow-card flex flex-col justify-center min-h-[160px] transition-transform duration-300 hover:scale-105">
        <span className="text-slate-700 font-bold text-[11px] md:text-xs uppercase tracking-tight mb-2 leading-tight">
          LUCRATIVIDADE MÉDIA<br/>MENSAL
        </span>
        <span className="text-[#38d838] text-3xl md:text-4xl font-extrabold whitespace-nowrap">20-30%</span>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-3xl p-8 text-center glow-card flex flex-col justify-center min-h-[160px] transition-transform duration-300 hover:scale-105">
        <span className="text-slate-700 font-bold text-[11px] md:text-xs uppercase tracking-tight mb-2 leading-tight">
          PRAZO MÉDIO DE<br/>RETORNO
        </span>
        <span className="text-[#38d838] text-3xl md:text-4xl font-extrabold whitespace-nowrap">18 meses</span>
      </div>
    </div>

    {/* Detailed Info List */}
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-4 mx-auto mt-4">
      {/* Item 1 */}
      <div className="flex items-start gap-4 text-white">
        <div className="text-[var(--lime)] mt-1 flex-shrink-0">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
        <p className="text-sm leading-relaxed text-white/90">
          <span className="font-bold text-white">Investimento inclui tudo:</span> taxa de franquia, reforma do imóvel, equipamentos e capital de giro.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex items-start gap-4 text-white">
        <div className="text-[var(--lime)] mt-1 flex-shrink-0">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <p className="text-sm leading-relaxed text-white/90">
          <span className="font-bold text-white">Ponto de equilíbrio a partir do 6º mês</span> de operação, antes de completar o primeiro semestre.
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex items-start gap-4 text-white">
        <div className="text-[var(--lime)] mt-1 flex-shrink-0">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m-5 11h.01" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <p className="text-sm leading-relaxed text-white/90">
          <span className="font-bold text-white">Modelos de clínica</span> para diferentes portes de cidade, médias e capitais.
        </p>
      </div>

      {/* Item 4 */}
      <div className="flex items-start gap-4 text-white">
        <div className="text-[var(--lime)] mt-1 flex-shrink-0">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <p className="text-sm leading-relaxed text-white/90">
          <span className="font-bold text-white">Alta recorrência de clientes</span>, tratamentos geram retorno e fidelização natural.
        </p>
      </div>
    </div>

    {/* CTA Center */}
    <div className="w-full flex justify-center mt-6">
      <button 
        className="btn-solid-green text-white font-bold w-full max-w-sm md:w-auto px-10 py-4 text-base"
        onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
      >
        AGENDAR AVALIAÇÃO
      </button>
    </div>
  </div>
</section>





<section className="roadmap-section" id="suporte">
  <div className="roadmap-container">
    {/* Header */}
    <div className="roadmap-header">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="w-6 h-[2px] bg-[#38B549]"></div>
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#2D7270]">ETAPAS DO NOSSO PROCESSO</span>
        <div className="w-6 h-[2px] bg-[#38B549]"></div>
      </div>
      <h2 className="text-slate-800 text-4xl md:text-5xl font-black tracking-tight leading-tight">
        Passo a passo para se tornar um <br/><span className="text-[#38B549]">franqueado de sucesso!</span>
      </h2>
      <p className="text-slate-500 font-semibold text-sm md:text-base mt-4">
        É mais rápido do que você imagina.
      </p>
    </div>

    {/* Horizontal Roadmap timeline (Scrollable on mobile) */}
    <div className="roadmap-timeline-wrapper overflow-x-auto pb-6">
      <div className="roadmap-timeline-inner">
        <div className="roadmap-svg-bg">
          <svg viewBox="0 0 1000 320" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="svg-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2D7270" floodOpacity="0.12"/>
              </filter>
            </defs>
            <path
              d="M 55.5 202 L 166.6 118 L 277.7 202 L 388.8 118 L 500 202 L 611.1 118 L 722.2 202 L 833.3 118 L 944.4 202"
              stroke="#38B549"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeOpacity="0.8"
              filter="url(#svg-shadow)"
            />
          </svg>
        </div>
        
        <div className="roadmap-grid-timeline">
          {roadmapSteps.map((step, index) => {
            const isTop = step.position === 'top';
            return (
              <div key={index} className={`roadmap-step-col ${isTop ? 'col-top' : 'col-bottom'}`}>
                <div className="roadmap-card-wrapper">
                  {isTop && (
                    <div className="roadmap-card-label-container top">
                      <span className="roadmap-step-num">{step.number}</span>
                      <h4 className="roadmap-card-label">{step.title}</h4>
                    </div>
                  )}
                  
                  <div className="roadmap-card-leaf">
                    <div className="roadmap-card-bg-layer"></div>
                    <div className={`roadmap-card-fg-layer ${step.featured ? 'featured' : ''}`}>
                      <div className="roadmap-card-icon">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {!isTop && (
                    <div className="roadmap-card-label-container bottom">
                      <span className="roadmap-step-num">{step.number}</span>
                      <h4 className="roadmap-card-label">{step.title}</h4>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  </div>
</section>

<section className="media-section-redesign" id="midia">
  <div className="container">
    <div className="media-layout">
      {/* Coluna Esquerda */}
      <div className="media-text-side">
        <div className="media-eyebrow">
          <div className="media-eyebrow-bars">
            <div></div><div></div>
          </div>
          <span>PODER DE MÍDIA</span>
        </div>
        <h2 className="media-title">Sua franquia no horário <br/><em className="italic-teal">nobre da TV aberta</em></h2>
        <p className="media-sub">Nenhum outro franqueado no setor odontológico tem esse diferencial. Enquanto seus concorrentes locais pagam por anúncio, seus pacientes já ouviram sobre a OdontoCompany na TV.</p>
        
        <div className="media-box-dark">
          <h3 className="media-box-title">Visibilidade Nacional Inclusa</h3>
          <p className="media-box-sub">Campanhas e ações estruturadas nas maiores emissoras do Brasil.</p>
          
          <div className="media-table">
            <div className="media-row">
              <span className="media-cell-left">TV Globo</span>
              <span className="media-cell-right">Horário Nobre</span>
            </div>
            <div className="media-row">
              <span className="media-cell-left">SBT</span>
              <span className="media-cell-right">Programação de Domingo</span>
            </div>
            <div className="media-row">
              <span className="media-cell-left">Record</span>
              <span className="media-cell-right">Jornalismo e Entretenimento</span>
            </div>
            <div className="media-row">
              <span className="media-cell-left">Band</span>
              <span className="media-cell-right">Esportes e Notícias</span>
            </div>
            <div className="media-row">
              <span className="media-cell-left">Google & Meta</span>
              <span className="media-cell-right">Tráfego Pago Nacional</span>
            </div>
          </div>
          <button 
            className="media-box-btn"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            AGENDAR AVALIAÇÃO
          </button>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="media-image-side">
        <div className="media-eliana-card">
          {/* Official Eliana ODC image - already contains text overlay and logo */}
          <img
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/eliana_odc.png"
            alt="Eliana - Embaixadora OdontoCompany"
            className="eliana-img"
          />
          
          {/* Testimonial Box overlaying the bottom of the image */}
          <div className="eliana-testimonial-floating">
            <div className="eliana-test-icon-wrap">
              <svg className="eliana-tv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <div className="eliana-test-content">
              <p className="eliana-test-quote">"A marca já chega com credibilidade. Os pacientes já conheciam a clínica pela TV."</p>
              <span className="eliana-test-author">Marcela S., Franqueada há 2 anos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="media-stats-divider"></div>
    <div className="media-stats-row">
      <div className="media-stat-item">
        <span>seguidores no<br/>Facebook</span>
        <strong>331k</strong>
      </div>
      <div className="media-stat-item border-left">
        <span>seguidores no<br/>Instagram</span>
        <strong>211k</strong>
      </div>
      <div className="media-stat-item border-left">
        <span>impressões<br/>mensais</span>
        <strong>19M+</strong>
      </div>
    </div>
  </div>
</section>
<section className="testimonials-section py-24 px-4 flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden" id="depoimentos">
  {/* Abstract styling backgrounds for premium feel */}
  <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8F5F0]/60 blur-3xl pointer-events-none" />
  <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#EFF8EC]/80 blur-3xl pointer-events-none" />
  
  <div className="container max-w-6xl mx-auto flex flex-col items-center relative z-10">
    <div className="flex flex-col items-center text-center space-y-4 mb-16">
      <div className="inline-flex items-center gap-2">
        <div className="w-6 h-[2px] bg-[#38B549]"></div>
        <span className="text-xs font-black uppercase tracking-wider text-[#2D7270]">Franqueados reais</span>
        <div className="w-6 h-[2px] bg-[#38B549]"></div>
      </div>
      <h2 className="text-slate-800 text-4xl md:text-5xl font-black tracking-tight leading-tight">
        Histórias de quem <br/><span className="text-[#38B549]">já deu o passo</span>
      </h2>
      <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
        Diferentes perfis. Diferentes cidades. Um resultado em comum.
      </p>
    </div>
    
    <CleanTestimonial testimonials={testimonialsData} />
  </div>
</section>
<section className="faq-section" id="faq">
 <div className="container">
 <div className="faq-layout">
 <div className="faq-sticky">
 <div className="section-eyebrow">
 <div className="section-eyebrow-line"></div>
 <span>Dúvidas frequentes</span>
 </div>
 <h2 className="section-title" >Tem dúvidas? <em>Temos as respostas.</em></h2>
 <p className="section-sub" >Perguntas comuns de quem está avaliando o investimento.</p>
 <div className="faq-form-mini">
 <div className="faq-form-mini-title">Ainda tem dúvidas?</div>
 <p className="faq-form-mini-sub">Fale diretamente com um consultor de expansão.</p>
 <button className="form-submit" >Falar com um consultor agora →</button>
 </div>
 </div>
 <div className="faq-list" id="faqList">
    {/* Item 1 */}
    <div className={`faq-item${activeFaq === 0 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(0)}>
        <span className="faq-q-text">Preciso ser dentista para abrir uma clínica OdontoCompany?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">Não. A grande maioria dos nossos franqueados não é dentista. O franqueado é o gestor do negócio, você contrata um dentista responsável técnico ou faz uma parceria com um sócio técnico. A OdontoCompany apoia na seleção e contratação do profissional certo para sua unidade.</div>
      </div>
    </div>

    {/* Item 2 */}
    <div className={`faq-item${activeFaq === 1 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(1)}>
        <span className="faq-q-text">Quanto tempo leva do contrato assinado até a inauguração?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">Em média <strong>4 a 6 meses</strong> entre a assinatura do contrato e a abertura da clínica. Esse prazo inclui a escolha e negociação do ponto comercial, execução das obras, montagem dos equipamentos e treinamento da equipe. O time de implantação da OdontoCompany acompanha cada etapa.</div>
      </div>
    </div>

    {/* Item 3 */}
    <div className={`faq-item${activeFaq === 2 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(2)}>
        <span className="faq-q-text">Qual o prazo real de retorno do investimento?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">A média da rede é <strong>18 a 24 meses</strong> para retorno completo do investimento, com ponto de equilíbrio a partir do 6º mês de operação. Esses números variam conforme a cidade, o ponto comercial, a gestão do franqueado e o perfil de demanda local. Nosso consultor pode mostrar a projeção específica para sua cidade.</div>
      </div>
    </div>

    {/* Item 4 */}
    <div className={`faq-item${activeFaq === 3 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(3)}>
        <span className="faq-q-text">Os R$ 450k cobrem tudo ou haverá custos extras?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">O investimento a partir de R$ 450 mil inclui <strong>taxa de franquia, reforma do imóvel, aquisição de equipamentos e capital de giro</strong>. O valor exato varia conforme o modelo de clínica (porte da cidade) e as condições do imóvel escolhido. Seu consultor apresentará uma planilha detalhada antes de qualquer decisão.</div>
      </div>
    </div>

    {/* Item 5 */}
    <div className={`faq-item${activeFaq === 4 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(4)}>
        <span className="faq-q-text">Como funciona o suporte após a abertura da clínica?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">O suporte é contínuo. Nos primeiros meses, o Núcleo de Acompanhamento Inicial faz um suporte intensivo de crescimento. Após esse período, você conta com equipe de operações, marketing, TI e treinamento de forma permanente, além da plataforma digital Minha OdontoCompany com conteúdos e guias atualizados.</div>
      </div>
    </div>

    {/* Item 6 */}
    <div className={`faq-item${activeFaq === 5 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(5)}>
        <span className="faq-q-text">Posso abrir mais de uma unidade?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">Sim. Temos muitos franqueados multi-unit operando 2, 3 ou mais unidades. Após a estabilização da primeira clínica (geralmente entre 12 e 18 meses), o processo de abertura da segunda fica mais ágil porque você já domina os processos. Existem condições especiais para franqueados que expandem a rede.</div>
      </div>
    </div>

    {/* Item 7 */}
    <div className={`faq-item${activeFaq === 6 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(6)}>
        <span className="faq-q-text">O que diferencia a OdontoCompany das outras franquias odontológicas?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">Três diferenciais que nenhum concorrente tem no mesmo nível: <strong>(1) Escala</strong>, somos a maior rede com +1.000 unidades, o que gera poder de negociação e marca reconhecida. <strong>(2) Mídia</strong>, investimento em TV nacional com a Eliana como embaixadora. <strong>(3) Tecnologia</strong>, plataforma digital própria, CRM integrado e método exclusivo de captação de pacientes via WhatsApp.</div>
      </div>
    </div>

    {/* Item 8 */}
    <div className={`faq-item${activeFaq === 7 ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => toggleFaq(7)}>
        <span className="faq-q-text">Como é o processo para se tornar franqueado?</span>
        <div className="faq-chevron"><svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">São 5 etapas: <strong>(1)</strong> Preenchimento do formulário e recebimento do plano de negócio. <strong>(2)</strong> Reunião com consultor de expansão. <strong>(3)</strong> Visita a uma unidade em operação. <strong>(4)</strong> Aprovação cadastral e assinatura do contrato. <strong>(5)</strong> Início do processo de implantação com suporte da equipe OdontoCompany.</div>
      </div>
    </div>
 </div>
 </div>
 </div>
</section>
<section className="cta-section" id="cta">
 <div className="cta-bg-glow"></div>
 <div className="container">
 <div className="cta-inner">
 <div>
 <div className="section-eyebrow" >
 <div className="section-eyebrow-line" ></div>
 <span >Próximo passo</span>
 </div>
 <h2 className="cta-title">
 Territórios disponíveis na sua cidade, <em>consulte antes que feche</em>
 </h2>
 <p className="cta-sub">A OdontoCompany limita o número de unidades por território para proteger o negócio de cada franqueado. Verifique a disponibilidade da sua cidade agora.</p>
 <div className="cta-urgency">
 <div className="urgency-dot"></div>
 <p className="urgency-text"><strong>Territórios exclusivos</strong> por cidade, uma vez fechado, não abre novamente para o mesmo bairro.</p>
 </div>
 <div className="cta-mini-stats">
 <div className="cta-mini-stat">
 <div className="cta-mini-val">35 anos</div>
 <div className="cta-mini-label">de história</div>
 </div>
 <div className="cta-mini-stat">
 <div className="cta-mini-val">+1.000</div>
 <div className="cta-mini-label">unidades abertas</div>
 </div>
 <div className="cta-mini-stat">
 <div className="cta-mini-val">100%</div>
 <div className="cta-mini-label">presença nacional</div>
 </div>
 </div>
 </div>
 <CtaFunnel />
 </div>
 </div>
</section>
<footer className="footer py-10 border-t border-white/10">
 <div className="container">
   <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-6 border-b border-white/10 w-full">
     <div className="footer-logo">
       <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logo_odontocompany.svg" alt="OdontoCompany" className="h-10 w-auto object-contain opacity-90" />
     </div>
     <div className="footer-info text-center md:text-right text-xs leading-relaxed max-w-md text-white/80">
       <strong>ODONTOCOMPANY FRANCHISING S.A.</strong> · CNPJ 12.817.681/0001-64<br />
       Av. Ibirapuera, 2332 - Torre I - Indianópolis - São Paulo/SP · CEP 04028-900
     </div>
   </div>
   
   <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 text-[11px] text-white/70 w-full">
      <div>
        *Valores sujeitos ao mercado local e à atuação do franqueado.<br />
        Metodologia OdontoCompany Franchising · Todos os direitos reservados.
      </div>
      <div className="flex justify-center w-full sm:w-auto mt-4 sm:mt-0">
        <a href="https://op7.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
          <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/logo/op7/logo.svg" alt="OP7" className="h-8 w-auto object-contain" />
        </a>
      </div>
    </div>
 </div>
</footer>
 </>
  );
}

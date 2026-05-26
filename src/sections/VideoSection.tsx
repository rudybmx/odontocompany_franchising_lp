'use client';

import { useState, useCallback } from 'react';
import { videos, speakers, VideoKey } from '@/data/videos';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<VideoKey>('fundador');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoTab = useCallback((key: VideoKey) => {
    setActiveVideo(key);
    setIsPlaying(true);
  }, []);

  return (
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
              Nosso time de expansão preparou um recado exclusivo para você,
              investidor. Em poucos minutos, você entende o modelo, o suporte e
              o que esperar do processo de abertura.
            </p>

            {/* Tabs */}
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

            {/* Speaker card */}
            {(() => {
              const isActive = activeVideo !== 'clinica';
              const isFelipe = activeVideo === 'expansao';
              const speaker = isFelipe
                ? {
                    name: 'Felipe Naresi',
                    role: 'Diretor de Expansão e Implantação · OdontoCompany',
                    img: 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/felipe_naresi.jpg',
                  }
                : {
                    name: 'Dr. Paulo Zahr',
                    role: 'Fundador OdontoCompany',
                    img: 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/drpaulozahr_2.jpg',
                  };

              return (
                <div
                  className="video-speaker transition-all duration-300"
                  id="videoSpeaker"
                  style={
                    isActive
                      ? {
                          borderColor: 'rgba(181,232,0,0.45)',
                          background: 'rgba(181,232,0,0.08)',
                        }
                      : {}
                  }
                >
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-12 h-12 rounded-full object-cover shadow-lg transition-all duration-300"
                    style={
                      isActive
                        ? { border: '2px solid rgba(181,232,0,0.5)' }
                        : { border: '1px solid rgba(255,255,255,0.1)' }
                    }
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

          {/* Player column */}
          <div className="flex flex-col">
            <div className="video-player-wrap flex-1" id="videoWrap">
              {!isPlaying ? (
                <div
                  className="video-thumb"
                  id="videoThumb"
                  onClick={() => setIsPlaying(true)}
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${videos[activeVideo].split('/embed/')[1].split('?')[0]}/maxresdefault.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="video-thumb-overlay"></div>
                  <div className="video-play-btn">
                    <svg viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div className="video-thumb-label">
                    <strong>Assista agora</strong>
                    Como funciona a franquia OdontoCompany
                  </div>
                  <div className="video-duration">3:42</div>
                </div>
              ) : (
                <iframe
                  id="videoIframe"
                  src={videos[activeVideo]}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    position: 'absolute',
                    inset: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vídeo OdontoCompany"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

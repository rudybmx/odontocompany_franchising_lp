"use client";

export default function MediaSection() {
  return (
    <section className="media-section-redesign" id="midia">
      <div className="container">
        <div className="media-layout">
          {/* Coluna Esquerda */}
          <div className="media-text-side">
            <div className="media-eyebrow">
              <div className="media-eyebrow-bars">
                <div></div>
                <div></div>
              </div>
              <span>PODER DE MÍDIA</span>
            </div>
            <h2 className="media-title">
              Sua franquia no horário <br />
              <em className="italic-teal">nobre da TV aberta</em>
            </h2>
            <p className="media-sub">
              Nenhum outro franqueado no setor odontológico tem esse diferencial.
              Enquanto seus concorrentes locais pagam por anúncio, seus pacientes
              já ouviram sobre a OdontoCompany na TV.
            </p>

            <div className="media-box-dark">
              <h3 className="media-box-title">Visibilidade Nacional Inclusa</h3>
              <p className="media-box-sub">
                Campanhas e ações estruturadas nas maiores emissoras do Brasil.
              </p>

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
                  <span className="media-cell-left">Google &amp; Meta</span>
                  <span className="media-cell-right">Tráfego Pago Nacional</span>
                </div>
              </div>

              <button
                className="media-box-btn"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                AGENDAR AVALIAÇÃO
              </button>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="media-image-side">
            <div className="media-eliana-card">
              <img
                src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/eliana_odc.png"
                alt="Eliana - Embaixadora OdontoCompany"
                className="eliana-img"
              />

              <div className="eliana-testimonial-floating">
                <div className="eliana-test-icon-wrap">
                  <svg
                    className="eliana-tv-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                  </svg>
                </div>
                <div className="eliana-test-content">
                  <p className="eliana-test-quote">
                    &ldquo;A marca já chega com credibilidade. Os pacientes já
                    conheciam a clínica pela TV.&rdquo;
                  </p>
                  <span className="eliana-test-author">
                    Marcela S., Franqueada há 2 anos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="media-stats-divider" />
        <div className="media-stats-row">
          <div className="media-stat-item">
            <span>
              seguidores no<br />
              Facebook
            </span>
            <strong>331k</strong>
          </div>
          <div className="media-stat-item border-left">
            <span>
              seguidores no<br />
              Instagram
            </span>
            <strong>211k</strong>
          </div>
          <div className="media-stat-item border-left">
            <span>
              impressões<br />
              mensais
            </span>
            <strong>19M+</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

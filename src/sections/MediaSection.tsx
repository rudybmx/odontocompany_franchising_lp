"use client";

export default function MediaSection() {
  return (
    <section className="media-section-redesign" id="midia">
      <div className="container">
        <div className="section-kicker section-kicker--light">Poder de mídia</div>
        <div className="media-layout">
          <div className="media-text-side">
            <h2 className="media-title">
              Sua franquia no horário <br />
              <em className="italic-teal">nobre da TV aberta</em>
            </h2>
            <p className="media-sub">
              Nenhum outro franqueado no setor odontológico tem esse diferencial.
              Enquanto seus concorrentes locais pagam por anúncio, seus pacientes
              já ouviram sobre a OdontoCompany na TV.
            </p>

            <div className="media-box-dark media-box-dark--editorial">
              <div className="media-box-badge">ODONTOCOMPANY NA MÍDIA</div>
              <h3 className="media-box-title">
                A presença da marca onde o Brasil assiste, escuta e compartilha.
              </h3>
              <p className="media-box-sub">
                A OdontoCompany busca estar presente na TV aberta e no dia a dia
                das pessoas, impactando milhões de brasileiros em todo o país.
              </p>
              <p className="media-box-sub">
                Nossa marca se destaca com ações de merchandising e publicidade
                nos principais canais, integrando TV, redes sociais e campanhas
                de performance.
              </p>
              <p className="media-box-sub">
                Atuamos em novelas, filmes publicitários, intervalos comerciais,
                programas de auditório, jornalismo, reality shows, esportes,
                matinais, shows e eventos com exibição nacional.
              </p>

              <button
                className="media-box-btn"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Quero ser um franqueado
              </button>
            </div>
          </div>

          <div className="media-image-side">
            <div className="media-video-card">
              <video
                className="media-video"
                src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ratinho_video_formato%20insta.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

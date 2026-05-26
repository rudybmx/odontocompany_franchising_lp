'use client';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">
            <img
              src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logo_odontocompany.svg"
              alt="OdontoCompany"
              height="36"
            />
          </div>
          <div className="nav-links">
            <a href="#vantagens">Vantagens</a>
            <a href="#numeros">Números</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#faq">Dúvidas</a>
          </div>
          <a href="#cta" className="nav-cta">
            Quero investir &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}

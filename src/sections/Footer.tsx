export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-6 border-b border-white/10 w-full">
          <div className="footer-logo">
            <img
              src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logo_odontocompany.svg"
              alt="OdontoCompany"
              className="h-6 w-auto object-contain opacity-90"
            />
          </div>
          <div className="footer-info text-center md:text-right text-xs leading-relaxed max-w-md text-white/60">
            <strong>ODONTOCOMPANY FRANCHISING S.A.</strong> · CNPJ
            12.817.681/0001-64
            <br />
            Av. Ibirapuera, 2332 - Torre I - Indianópolis - São Paulo/SP · CEP
            04028-900
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 text-[11px] text-white/45 w-full">
          <div>
            *Valores sujeitos ao mercado local e à atuação do franqueado.
            <br />
            Metodologia OdontoCompany Franchising · Todos os direitos
            reservados.
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3.5 py-1.5 rounded-xl border border-white/5">
            <span className="font-semibold text-white/40">
              Desenvolvido por:
            </span>
            <a
              href="https://op7.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center"
            >
              <img
                src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/logo/op7/logo.svg"
                alt="OP7"
                className="h-4.5 w-auto object-contain inline-block"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

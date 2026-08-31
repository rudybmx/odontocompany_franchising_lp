"use client";

import { useEffect, useState } from "react";
import { submitCtaForm } from "@/app/actions";
import {
  captureAttribution,
  createEventId,
  getClientTrackingId,
  resolveTrafficSource,
} from "@/lib/tracking";
import {
  CheckCircle2,
  ChevronRight,
  MapPin,
  Wallet,
  User,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const totalSteps = 6;

function isValidEmail(value: string) {
  return /^[A-Za-z0-9_\-.]+@[A-Za-z0-9_\-.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/.test(value);
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const BRAZIL_STATES = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

export default function CtaFunnel({ light = false }: { light?: boolean }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateUf] = useState("");
  const [capital, setCapital] = useState("");
  const [profile, setProfile] = useState("");
  const [prazo, setPrazo] = useState("");
  const [conhecimento, setConhecimento] = useState("");

  useEffect(() => {
    // Captura e persiste UTMs/Click IDs em sessionStorage assim que a página carrega,
    // pra não perder a atribuição se a pessoa navegar/recarregar sem query string.
    captureAttribution();
  }, []);

  const phoneDigits = whatsapp.replace(/\D/g, "").length;
  const emailValid = email === "" || isValidEmail(email);
  const phoneValid = whatsapp === "" || phoneDigits >= 10;

  const handleNext = () => {
    if (step === 1 && (!name || !isValidEmail(email) || phoneDigits < 10)) return;
    if (step === 2 && (!city || !state)) return;
    if (step === 3 && !capital) return;
    if (step === 4 && !profile) return;
    if (step === 5 && !prazo) return;
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (!conhecimento) return;
    setLoading(true);
    setErrorMessage("");
    const eventId = createEventId();
    const attribution = captureAttribution();
    const clientTrackingId = getClientTrackingId();
    const resolved = resolveTrafficSource(attribution.utm_source, attribution.utm_medium, attribution.referrer);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("whatsapp", whatsapp);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("capital", capital);
    formData.append("profile", profile);
    formData.append("prazo", prazo);
    formData.append("conhecimento", conhecimento);
    formData.append("event_id", eventId);
    formData.append("utm_source", attribution.utm_source);
    formData.append("utm_campaign", attribution.utm_campaign);
    formData.append("utm_content", attribution.utm_content);
    formData.append("utm_term", attribution.utm_term);
    formData.append("traffic_source", resolved.source);
    formData.append("traffic_medium", resolved.medium);
    formData.append("gclid", attribution.gclid);
    formData.append("fbclid", attribution.fbclid);
    formData.append("wbraid", attribution.wbraid);
    formData.append("gbraid", attribution.gbraid);
    formData.append("msclkid", attribution.msclkid);
    formData.append("page_url", attribution.page_url);
    formData.append("client_tracking_id", clientTrackingId);

    const res = await submitCtaForm(formData);
    if (res.success) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_form_submit_success",
        event_id: eventId,
        lead_id: res.leadId || "",
        form_id: "lp_investidores_form",
        form_name: "lp_investidores",
        lead_type: "franquia_investidor",
        business_unit: "b2b_franquias",
        conversion_identifier: "LP Investidores OdontoCompany",
        rd_status: "success",
        capital_investimento: capital,
        perfil_investidor: profile,
        prazo_abertura_clinica: prazo,
        conhece_odontocompany: conhecimento,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        utm_content: attribution.utm_content,
        utm_term: attribution.utm_term,
        gclid: attribution.gclid,
        fbclid: attribution.fbclid,
        wbraid: attribution.wbraid,
        gbraid: attribution.gbraid,
        msclkid: attribution.msclkid,
      });
      setSuccess(true);
    } else {
      setErrorMessage(res.message || "Não foi possível enviar seu cadastro. Tente novamente.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className={`cta-form-card${light ? " cta-form-card--light" : ""} flex flex-col items-center justify-center py-12 text-center`}>
        <CheckCircle2 className="w-16 h-16 text-[var(--lime)] mb-4" />
        <h3 className="hero-form-title mb-2">Solicitação enviada.</h3>
        <p className="hero-form-sub mb-6">
          Nossa equipe entrará em contato em até 2 horas úteis pelo WhatsApp.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="form-submit bg-white/5 text-white border border-white/10"
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div className={`cta-form-card${light ? " cta-form-card--light" : ""} overflow-hidden relative`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <div
          className="h-full bg-[var(--lime)] transition-all duration-500 ease-out"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="hero-form-top pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--lime)]">
            Passo {step} de {totalSteps}
          </div>
        </div>
        <div className="hero-form-title">
          {step === 1 && "Para onde enviamos o plano?"}
          {step === 2 && "Onde você deseja abrir?"}
          {step === 3 && "Qual o seu capital?"}
          {step === 4 && "Perfil do investidor"}
          {step === 5 && "Prazo para abrir a clínica"}
          {step === 6 && "Já conhece a OdontoCompany?"}
        </div>
        <p className="hero-form-sub">
          {step === 1 && "Seu plano de negócios personalizado."}
          {step === 2 && "Verifique a disponibilidade de territórios exclusivos."}
          {step === 3 && "Para indicarmos o modelo de clínica ideal."}
          {step === 4 && "Qual perfil mais se encaixa com você?"}
          {step === 5 && "Qual sua expectativa para começar?"}
          {step === 6 && "Nos ajude a personalizar sua experiência."}
        </p>
      </div>

      <div className="relative min-h-[180px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <User className="w-4 h-4" /> Nome completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Seu nome"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <Mail className="w-4 h-4" /> E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="seu@email.com"
                  style={!emailValid ? { borderColor: "#c0392b" } : undefined}
                />
              </div>
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <Phone className="w-4 h-4" /> WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                  className="form-input"
                  placeholder="(00) 00000-0000"
                  style={!phoneValid ? { borderColor: "#c0392b" } : undefined}
                />
              </div>
              <button
                onClick={handleNext}
                disabled={!name || !isValidEmail(email) || phoneDigits < 10}
                className="form-submit flex items-center justify-center gap-2 disabled:opacity-50"
              >
                Próximo <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Cidade de interesse
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-input"
                  placeholder="Ex: Maringá"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Estado (UF)
                </label>
                <div className="relative">
                  <select
                    value={state}
                    onChange={(e) => setStateUf(e.target.value)}
                    className="form-input select-dark appearance-none w-full"
                  >
                    <option value="" disabled>
                      Selecione o estado
                    </option>
                    {BRAZIL_STATES.map((uf) => (
                      <option key={uf} value={uf}>
                        {uf}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="form-submit bg-white/5 border border-white/10 !w-1/3"
                >
                  Voltar
                </button>
                <button
                  onClick={handleNext}
                  disabled={!city || !state}
                  className="form-submit flex items-center justify-center gap-2 flex-1 disabled:opacity-50"
                >
                  Próximo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <Wallet className="w-4 h-4" /> Capital disponível para investimento
                </label>
                <div className="relative">
                  <select
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    className="form-input select-dark appearance-none w-full"
                  >
                    <option value="" disabled>
                      Selecione uma faixa
                    </option>
                    <option value="450k-600k">R$ 450k - R$ 600k</option>
                    <option value="600k-900k">R$ 600k - R$ 900k</option>
                    <option value="900k+">Acima de R$ 900k (multi-unit)</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(2)}
                  className="form-submit bg-white/5 border border-white/10 !w-1/3"
                >
                  Voltar
                </button>
                <button
                  onClick={handleNext}
                  disabled={!capital}
                  className="form-submit flex items-center justify-center gap-2 flex-1 disabled:opacity-50"
                >
                  Próximo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Perfil do investidor
                </label>
                <div className="relative">
                  <select
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    className="form-input select-dark appearance-none w-full"
                  >
                    <option value="" disabled>
                      Selecione seu perfil
                    </option>
                    <option value="investidor">Investidor</option>
                    <option value="dentista">Dentista</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(3)}
                  className="form-submit bg-white/5 border border-white/10 !w-1/3"
                >
                  Voltar
                </button>
                <button
                  onClick={handleNext}
                  disabled={!profile}
                  className="form-submit flex items-center justify-center gap-2 flex-1 disabled:opacity-50"
                >
                  Próximo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Prazo para abrir a clínica
                </label>
                <div className="relative">
                  <select
                    value={prazo}
                    onChange={(e) => setPrazo(e.target.value)}
                    className="form-input select-dark appearance-none w-full"
                  >
                    <option value="" disabled>
                      Selecione um prazo
                    </option>
                    <option value="ate-3">Até 3 meses</option>
                    <option value="3-6">3 a 6 meses</option>
                    <option value="6-12">6 a 12 meses</option>
                    <option value="pesquisando">Só pesquisando</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(4)}
                  className="form-submit bg-white/5 border border-white/10 !w-1/3"
                >
                  Voltar
                </button>
                <button
                  onClick={handleNext}
                  disabled={!prazo}
                  className="form-submit flex items-center justify-center gap-2 flex-1 disabled:opacity-50"
                >
                  Próximo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Já conhece a OdontoCompany?
                </label>
                <div className="relative">
                  <select
                    value={conhecimento}
                    onChange={(e) => setConhecimento(e.target.value)}
                    className="form-input select-dark appearance-none w-full"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="conhece-bem">Sim, já conheço bem</option>
                    <option value="conhece-nome">Conheço de nome</option>
                    <option value="nao-conhece">Não conheço ainda</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
                </div>
              </div>
              {errorMessage && (
                <p className="text-sm text-center" style={{ color: "#e57373" }}>
                  {errorMessage}
                </p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(5)}
                  className="form-submit bg-white/5 border border-white/10 !w-1/3"
                  disabled={loading}
                >
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!conhecimento || loading}
                  className="form-submit flex items-center justify-center gap-2 flex-1 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    "Receber Plano"
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="form-trust mt-4">
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>Sem compromisso. Resposta em até 2 horas úteis.</span>
      </div>
    </div>
  );
}

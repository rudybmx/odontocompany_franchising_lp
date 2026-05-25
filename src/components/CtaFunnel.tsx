"use client";

import { useState } from "react";
import { submitCtaForm } from "@/app/actions";
import { CheckCircle2, ChevronRight, MapPin, Wallet, User, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CtaFunnel() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form states
  const [city, setCity] = useState("");
  const [capital, setCapital] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleNext = () => {
    if (step === 1 && !city) return;
    if (step === 2 && !capital) return;
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (!name || !whatsapp) return;
    setLoading(true);
 const formData = new FormData();
 formData.append("city", city);
 formData.append("capital", capital);
 formData.append("name", name);
 formData.append("whatsapp", whatsapp);
 const res = await submitCtaForm(formData);
 if (res.success) {
 setSuccess(true);
 }
 setLoading(false);
 };
 if (success) {
 return (
 <div className="cta-form-card flex flex-col items-center justify-center py-12 text-center">
 <CheckCircle2 className="w-16 h-16 text-[var(--lime)] mb-4" />
 <h3 className="hero-form-title mb-2">Solicitação Enviada.</h3>
 <p className="hero-form-sub mb-6">
 Nossa equipe entrará em contato em até 2 horas úteis pelo WhatsApp.
 </p>
 <button 
          onClick={() => window.location.reload()}
 className="form-submit bg-white/5 text-white border border-white/10"
 >
 Voltar ao Início
 </button>
 </div>
 );
 }
 return (
 <div className="cta-form-card overflow-hidden relative">
 {/* Progress Bar */}
 <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
 <div 
          className="h-full bg-[var(--lime)] transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
 </div>
 <div className="hero-form-top pt-4">
 <div className="flex items-center justify-between mb-2">
 <div className="text-xs font-semibold uppercase tracking-wider text-[var(--lime)]">
 Passo {step} de 3
 </div>
 </div>
 <div className="hero-form-title">
 {step === 1 && "Onde você deseja abrir?"}
 {step === 2 && "Qual o seu capital?"}
 {step === 3 && "Para onde enviamos o plano?"}
 </div>
 <p className="hero-form-sub">
 {step === 1 && "Verifique a disponibilidade de territórios exclusivos."}
 {step === 2 && "Para indicarmos o modelo de clínica ideal."}
 {step === 3 && "Seu plano de negócios personalizado."}
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
 <MapPin className="w-4 h-4" /> Cidade de interesse
 </label>
 <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
 className="form-input"
 placeholder="Ex: Maringá – PR"
 autoFocus
 />
 </div>
 <button 
                onClick={handleNext}
                disabled={!city}
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
 <Wallet className="w-4 h-4" /> Capital disponível para investimento
 </label>
 <select
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
 className="form-input text-white/90 bg-[#0a1f10]"
 >
 <option value="" disabled>Selecione uma faixa</option>
 <option value="450k-600k">R$ 450k – R$ 600k</option>
 <option value="600k-900k">R$ 600k – R$ 900k</option>
 <option value="900k+">Acima de R$ 900k (multi-unit)</option>
 </select>
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
                  disabled={!capital}
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
 <User className="w-4 h-4" /> Nome completo
 </label>
 <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
 className="form-input"
 placeholder="Seu nome"
 />
 </div>
 <div className="form-group">
 <label className="form-label flex items-center gap-2">
 <Phone className="w-4 h-4" /> WhatsApp com DDD
 </label>
 <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
 className="form-input"
 placeholder="(00) 00000-0000"
 />
 </div>
 <div className="flex gap-2">
                <button 
                  onClick={() => setStep(2)}
                  className="form-submit bg-white/5 border border-white/10 !w-1/3"
                  disabled={loading}
                >
 Voltar
 </button>
 <button 
                  onClick={handleSubmit}
                  disabled={!name || !whatsapp || loading}
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
 <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
 <span>Sem compromisso. Resposta em até 2 horas úteis.</span>
 </div>
 </div>
  );
}

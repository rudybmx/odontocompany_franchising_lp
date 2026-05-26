/* eslint-disable react/no-unescaped-entities */
"use client";
import { TestimonialSlider } from '@/components/ui/testimonial-slider';
import { testimonialsData } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section
      className="testimonials-section py-24 px-4 flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden"
      id="depoimentos"
    >
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8F5F0]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#EFF8EC]/80 blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="w-6 h-[2px] bg-[#38B549]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#2D7270]">
              Franqueados reais
            </span>
            <div className="w-6 h-[2px] bg-[#38B549]" />
          </div>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Histórias de quem <br />
            <span className="text-[#38B549]">já deu o passo</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            Diferentes perfis. Diferentes cidades. Um resultado em comum.
          </p>
        </div>

        {/* Slider */}
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  );
}

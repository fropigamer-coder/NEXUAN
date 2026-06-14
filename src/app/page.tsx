"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import NexuanCore from "@/components/NexuanCore";
import ServicesSection from "@/components/ServicesSection";
import TerminalFooter from "@/components/TerminalFooter";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(ctaRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5");
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background Decorativo */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/5 rounded-full blur-[128px]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full">
          {/* Texto Hero */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase tech-border text-accent-blue"
            >
              NEXUAN v3.0 // STARTUP
            </motion.div>
            
            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              AUTOMATIZAMOS EL <span className="text-accent-blue">FUTURO</span>.
            </h1>
            
            <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-white/60 mb-10 max-w-2xl font-light">
              Soluciones de tecnología disruptiva y automatización de procesos de élite para empresas que no temen al cambio.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-accent-blue text-black font-bold tech-border flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
                INICIAR PROYECTO <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 glass-effect font-bold hover:bg-white/10 transition-colors w-full sm:w-auto">
                DESCUBRIR MÁS
              </button>
            </div>
          </div>

          {/* Visual Core */}
          <div className="flex-1 flex justify-center items-center relative py-10 lg:py-0">
            <NexuanCore />
            {/* Anillo decorativo - ajustado para no desbordar en móviles */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-accent-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-accent-green/10 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
          </div>
        </div>

        {/* Footer Info sutil */}
        <div className="absolute bottom-10 left-10 hidden md:block">
          <div className="text-[10px] font-mono text-white/30 space-y-1">
            <div>LOC: 0.0.0.0 // STATUS: OPERATIONAL</div>
            <div>PROTOCOL: NEXUAN_OS_SUPREME</div>
          </div>
        </div>
      </div>
      
      {/* Sección de Servicios */}
      <ServicesSection />

      {/* Footer Terminal */}
      <TerminalFooter />
    </div>
  );
}

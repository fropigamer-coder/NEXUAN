"use client";

import { motion } from "framer-motion";
import { Terminal, Send, Github, Twitter, Linkedin } from "lucide-react";

export default function TerminalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-4 bg-black border-t border-accent-blue/10 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado Izquierdo: Branding & Info */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-blue flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-xl">N</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">NEXUAN</span>
            </div>
            
            <p className="text-white/40 max-w-sm font-light leading-relaxed">
              Liderando la vanguardia en automatización industrial y soluciones de inteligencia artificial para la próxima generación de empresas globales.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-3 glass-effect hover:text-accent-blue transition-colors rounded-sm"><Github size={20} /></a>
              <a href="#" className="p-3 glass-effect hover:text-accent-blue transition-colors rounded-sm"><Twitter size={20} /></a>
              <a href="#" className="p-3 glass-effect hover:text-accent-blue transition-colors rounded-sm"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Lado Derecho: Contact Terminal */}
          <div className="tech-border bg-black/80 overflow-hidden">
            <div className="bg-accent-blue/10 px-4 py-2 border-b border-accent-blue/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-accent-blue" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue/80">NEXUAN_OS_TERMINAL v3.0</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-accent-blue/40" />
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="flex gap-2">
                <span className="text-accent-green">guest@nexuan:~$</span>
                <span className="text-white/80">contact --init</span>
              </div>
              <div className="text-accent-blue/60 italic">
                {">"} Iniciando protocolo de enlace...
              </div>
              
              <form className="space-y-4 pt-2">
                <div className="flex gap-2 items-center">
                  <span className="text-accent-green">EMAIL:</span>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/10"
                  />
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-accent-green">MSG:</span>
                  <textarea 
                    placeholder="Describa su requerimiento de automatización..."
                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/10 resize-none h-20"
                  />
                </div>
                <button className="flex items-center gap-2 text-accent-blue hover:text-accent-green transition-colors font-bold pt-2">
                  [ EJECUTAR_ENVIO ] <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            &copy; {currentYear} NEXUAN STARTUP // ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-accent-blue">Privacy</a>
            <a href="#" className="hover:text-accent-blue">Terms</a>
            <a href="#" className="hover:text-accent-blue">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

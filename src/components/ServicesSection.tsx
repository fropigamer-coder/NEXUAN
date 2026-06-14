"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Shield, BarChart3, Globe, Code2 } from "lucide-react";

const services = [
  {
    title: "IA & MACHINE LEARNING",
    description: "Algoritmos predictivos y modelos de lenguaje personalizados para decisiones basadas en datos.",
    icon: <Cpu className="text-accent-blue" size={32} />,
  },
  {
    title: "AUTOMATIZACIÓN INDUSTRIAL",
    description: "Optimización de flujos de trabajo críticos mediante agentes inteligentes y robótica de software.",
    icon: <Zap className="text-accent-green" size={32} />,
  },
  {
    title: "CIBERSEGURIDAD AVANZADA",
    description: "Protección proactiva de activos digitales con protocolos de encriptación de grado militar.",
    icon: <Shield className="text-accent-blue" size={32} />,
  },
  {
    title: "ANÁLISIS ESTRATÉGICO",
    description: "Dashboards en tiempo real que transforman datos masivos en ventajas competitivas.",
    icon: <BarChart3 className="text-accent-green" size={32} />,
  },
  {
    title: "INFRAESTRUCTURA CLOUD",
    description: "Sistemas escalables y resilientes diseñados para soportar el crecimiento global de tu startup.",
    icon: <Globe className="text-accent-blue" size={32} />,
  },
  {
    title: "DESARROLLO DISRUPTIVO",
    description: "Ingeniería de software de alta fidelidad que rompe los esquemas tradicionales del mercado.",
    icon: <Code2 className="text-accent-green" size={32} />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#080808]">
      {/* Líneas de fondo decorativas */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-accent-blue" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-accent-blue" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-accent-green mb-4"
          >
            NUESTROS MÓDULOS // 02
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            SOLUCIONES DE <br />
            <span className="text-accent-blue">ALTA PRECISIÓN</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-effect p-8 flex flex-col gap-6 group hover:border-accent-blue/50 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Brillo de hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-sm tech-border flex items-center justify-center bg-black/40 relative z-10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                SISTEMA OPERATIVO : ACTIVO
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

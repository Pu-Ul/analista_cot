import React from 'react';
import { motion } from 'motion/react';
import { 
  DraftingCompass, 
  Target, 
  Database, 
  CheckCircle2,
  Box,
  MapPin,
  Truck,
  DollarSign,
  Wallet,
  Brain,
  ShieldAlert,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function MVPDefinition() {
  const variables = [
    { label: 'Bien', sub: 'Producto o servicio', icon: Box },
    { label: 'Lugar', sub: 'Destino de entrega', icon: MapPin },
    { label: 'Transporte', sub: 'Logística y flete', icon: Truck },
    { label: 'Valor', sub: 'Monto estimado', icon: DollarSign },
    { label: 'Pago', sub: 'Términos y plazos', icon: Wallet },
    { label: 'Tipo de Necesidad', sub: 'Urgencia/Clasificación', icon: Brain },
    { label: 'Exclusiones', sub: 'Límites del servicio', icon: ShieldAlert },
    { label: 'Garantía', sub: 'Respaldo y tiempo', icon: ShieldCheck },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-8 md:p-12 max-w-6xl mx-auto"
    >
      <div className="mb-12">
        <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-3 block">Fase 1: Estrategia</span>
        <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter leading-tight max-w-3xl">
          Definición del MVP: <span className="text-primary">Analista de Cotizaciones</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-xl ghost-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <DraftingCompass className="w-16 h-16" />
            </div>
            <h3 className="text-xs font-bold text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-tertiary rounded-full"></span>
              ALCANCE
            </h3>
            <p className="text-2xl font-semibold text-on-surface leading-snug">
              Proyecto acotado para <span className="text-primary italic">equipo novato</span>.
            </p>
            <div className="mt-6 flex items-center gap-3 text-secondary font-bold">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">"CON ESTE GANAMOS EL AÑO"</span>
            </div>
          </div>

          <div className="bg-surface-low p-8 rounded-xl flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full"></span>
              OBJETIVO ESTRATÉGICO
            </h3>
            <p className="text-lg text-on-surface mb-6 leading-relaxed">
              Implementar la IA como el <span className="font-bold">primer filtro inteligente</span> del proceso comercial.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <Target className="w-5 h-5 text-primary mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Inconsistencias</p>
                <p className="text-sm text-on-surface">Detección temprana</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <Database className="w-5 h-5 text-primary mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Reportes</p>
                <p className="text-sm text-on-surface">Generación automática</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 bg-white p-8 rounded-xl ghost-border">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Data Core</h3>
              <h4 className="text-2xl font-black text-on-surface tracking-tight">Variables Obligatorias</h4>
            </div>
            <div className="bg-secondary-container/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-secondary tracking-widest">PROCESAMIENTO IA</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {variables.map((v) => (
              <div key={v.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-low flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{v.label}</p>
                  <p className="text-[11px] text-on-surface-variant">{v.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-12 flex items-center justify-between border-t border-outline-variant pt-6">
        <div className="flex items-center gap-4">
          <div className="h-1 w-24 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary"></div>
          </div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Slide 1 de 3</span>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-low transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </motion.div>
  );
}

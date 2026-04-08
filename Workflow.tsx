import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  BrainCircuit, 
  ClipboardCheck, 
  Zap,
  Gauge,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      id: '01',
      title: 'CARGA',
      desc: 'Sustituye lectura manual de 100 páginas. Procesamiento masivo de documentación técnica y comercial.',
      icon: FileText,
      badge: 'Eficiencia +90%'
    },
    {
      id: '02',
      title: 'ANÁLISIS',
      desc: 'IA busca variables críticas. Identificación de discrepancias, riesgos y oportunidades en milisegundos.',
      icon: BrainCircuit,
      badge: 'Data Driven'
    },
    {
      id: '03',
      title: 'DIAGNÓSTICO',
      desc: 'Reporte de entendimiento vs pendientes. Claridad absoluta sobre el estado actual del proyecto.',
      icon: ClipboardCheck,
      badge: 'Fricción Cero'
    },
    {
      id: '04',
      title: 'ACCIÓN',
      desc: 'Correo a proveedor o registro de contrato. Automatización de salidas para cerrar el ciclo operativo.',
      icon: Zap,
      badge: 'Impacto Real'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 md:p-12 max-w-7xl mx-auto w-full"
    >
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">
          Propuesta Metodológica: <span className="text-primary">El Flujo del MVP</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Transformando la complejidad operativa en un ciclo de ejecución de alta precisión mediante inteligencia cognitiva.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 hidden lg:block z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="group">
              <div className="bg-white rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:kinetic-gradient group-hover:text-white transition-colors">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">Paso {step.id}</span>
                  <h3 className="text-xl font-bold text-on-surface mt-1">{step.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-3xl overflow-hidden relative h-64 shadow-2xl">
          <img 
            alt="Data visualization dashboard" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4YiAPjdcEbWOYIEdda9UdCZX_bbuGc_Sl4XswHUtMvyoOPSBUfTJ0feKlGpqG_7dd7-TWxKm1mzP9bOVet6NgBAxkf6nM9bDwemkNmu2KDYSlHI-urZw-7nWzcu9kYR-vfLuHc207gDOuBVs-GFTDqSInEys_IB2MIugET3Nsya4HExPDXF5SQOW53Gjy1epnIXoVzN0W9tbtUqfP8iAQoQ6_1X9XRSevh6fcsR7alGhIAHHin2q9VNJnX1h61CMgSRQAui-pekHK"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-8">
            <div className="text-white">
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-1">Visualización de Procesos</p>
              <h4 className="text-2xl font-bold">Interconectividad total en cada etapa</h4>
            </div>
          </div>
        </div>
        
        <div className="bg-surface-low rounded-3xl p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Gauge className="w-6 h-6 text-primary" />
              <div>
                <h5 className="font-bold text-on-surface">Alta Velocidad</h5>
                <p className="text-xs text-on-surface-variant">Reducción del 75% en tiempos de respuesta.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <div>
                <h5 className="font-bold text-on-surface">Precisión Cognitiva</h5>
                <p className="text-xs text-on-surface-variant">Eliminación de errores humanos en la transcripción.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <h5 className="font-bold text-on-surface">Escalabilidad IA</h5>
                <p className="text-xs text-on-surface-variant">Capacidad de procesar N contratos simultáneamente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

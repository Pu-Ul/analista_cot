import React from 'react';
import { motion } from 'motion/react';
import { 
  FolderSearch, 
  Settings2, 
  Brain, 
  FileOutput,
  Calendar,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Tasks() {
  const tasks = [
    {
      id: 'R1',
      title: 'Recolección de Insumos Reales',
      desc: 'Coordinación y documentación con el equipo jurídico para la centralización de expedientes y plantillas vigentes.',
      phase: 'Fase 1: Insumos',
      responsible: 'Responsable 1',
      role: 'Documentation with Legal',
      progress: 33,
      icon: FolderSearch,
      color: 'primary'
    },
    {
      id: 'R2',
      title: 'Extracción de Variables Básicas',
      desc: 'Definición técnica de parámetros base y configuración inicial del motor de IA.',
      phase: 'Configuración',
      responsible: 'Responsable 2',
      role: 'AI Configuration',
      icon: Settings2,
      color: 'secondary'
    },
    {
      id: 'R3',
      title: 'Lógica de Clasificación Compleja',
      desc: 'Refinamiento de lógica probabilística y entrenamiento del modelo con casos de borde.',
      phase: 'Core AI',
      responsible: 'Responsable 3',
      role: 'Model Training',
      icon: Brain,
      color: 'tertiary'
    },
    {
      id: 'R4',
      title: 'Generación del Reporte / Salida',
      desc: 'Programación de la salida del sistema y estandarización del formato de mensaje automático para stakeholders.',
      phase: 'Entregable Final',
      responsible: 'Responsable 4',
      role: 'System Output Programming',
      icon: FileOutput,
      color: 'primary',
      final: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-12 bg-surface-low min-h-full"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tighter leading-none mb-2">Distribución de Tareas</h2>
            <p className="text-lg text-primary font-medium tracking-tight">Cronograma: Próximos 8 Días de Ejecución</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-highest/50 px-3 py-1 rounded-full mb-2">Hito de Control</span>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl ghost-border shadow-sm">
              <div className="bg-tertiary/10 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-tertiary" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface uppercase tracking-tighter">Siguiente Reunión</p>
                <p className="text-sm font-extrabold text-tertiary">Miércoles, 06:20 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {tasks.map((task, idx) => (
            <div 
              key={task.id} 
              className={`${idx % 4 === 0 || idx % 4 === 3 ? 'col-span-12 md:col-span-7' : 'col-span-12 md:col-span-5'} bg-white p-8 rounded-2xl ghost-border hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`bg-${task.color}/5 p-4 rounded-2xl group-hover:bg-${task.color}/10 transition-colors`}>
                  <task.icon className={`w-8 h-8 text-${task.color}`} />
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${task.final ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant border border-outline-variant'}`}>
                  {task.phase}
                </span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-on-surface mb-2">{task.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">{task.desc}</p>
              </div>

              <div className="flex items-center justify-between border-t border-outline-variant pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface font-bold text-xs">
                    {task.id}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{task.responsible}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">{task.role}</p>
                  </div>
                </div>
                
                {task.progress !== undefined ? (
                  <div className="flex flex-col items-end">
                    <p className="text-[10px] font-bold text-primary uppercase">Progreso</p>
                    <div className="w-32 h-1.5 bg-surface-low rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${task.progress}%` }}></div>
                    </div>
                  </div>
                ) : task.final ? (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <button className="fixed bottom-8 right-8 bg-on-surface text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all group z-50">
          <span className="font-bold tracking-tight">Ver Cronograma Detallado</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

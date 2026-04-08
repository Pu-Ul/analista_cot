import React from 'react';
import { motion } from 'motion/react';
import { 
  UploadCloud, 
  BarChart3, 
  Activity, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from 'recharts';

const teamData = [
  { name: 'Liderazgo', value: 35, color: '#40589c' },
  { name: 'Gestión', value: 45, color: '#00675f' },
  { name: 'Estrategia', value: 20, color: '#4a40e0' },
];

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 space-y-8 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-primary h-72 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Abstract technology background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_PxyaL8NBRj8SfTdkWKdmYOcJ7wa037TrKneW0vThVDdAdB_iBXa3e1UgaKTvnDLf0QrK79psfI_EEjSsZ3yFO3ckOAWF72fLLVQ3t4tMz7HeFzIw9uJ5EK4AJIEuVMpOX5Asc9dLJvY5naBb_SIFIjwCBFV8IvbRPlPYusDPR-7ayLW7tkcma3AnAmvQuPYAL5EJoo-DyKI4AMje7BcLKFsFHTT5zcZXey8HCTmee8cVVspr9gbm_ot6m18AqJ1HtgKSsESaKT2"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80"></div>
        </div>
        
        <div className="relative z-10 px-12 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest">
            Core Strategy 2024
          </div>
          <h2 className="text-4xl font-black text-white leading-tight tracking-tighter">
            Transformar Datos en Decisiones de Alto Impacto.
          </h2>
          <p className="text-primary-container leading-relaxed font-medium">
            Nuestra misión es acelerar el ciclo de cotización mediante precisión analítica y agilidad operativa, garantizando el liderazgo competitivo del Proyecto Alpha.
          </p>
        </div>

        <div className="absolute right-12 bottom-12 flex gap-4">
          <div className="glass-panel p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-3xl font-black text-primary">94%</span>
            <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Precisión</span>
          </div>
          <div className="glass-panel p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-3xl font-black text-secondary">2.4d</span>
            <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Turnaround</span>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black text-on-surface tracking-tight">Proceso Operativo</h3>
            <p className="text-on-surface-variant text-sm font-medium">Ciclo de vida de la cotización estratégica</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
            Ver detalles del flujo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { id: '01', title: 'Carga', desc: 'Importación masiva y validación sintáctica de peticiones.', icon: UploadCloud, color: 'primary' },
            { id: '02', title: 'Análisis', desc: 'Modelado predictivo y comparación de mercados históricos.', icon: BarChart3, color: 'secondary' },
            { id: '03', title: 'Diagnóstico', desc: 'Identificación de anomalías y optimización de márgenes.', icon: Activity, color: 'tertiary' },
            { id: '04', title: 'Acción', desc: 'Ejecución de ofertas y cierre de negociaciones clave.', icon: Zap, color: 'red' },
          ].map((step) => (
            <div key={step.id} className="group relative bg-surface-low p-8 rounded-3xl hover:bg-white transition-all duration-300 border border-transparent hover:border-outline-variant hover:shadow-2xl">
              <div className={`w-12 h-12 rounded-2xl bg-${step.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className={`w-6 h-6 text-${step.color}`} />
              </div>
              <span className="absolute top-8 right-8 text-4xl font-black text-on-surface-variant opacity-5">{step.id}</span>
              <h4 className="text-xl font-bold text-on-surface mb-2">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Updates */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-on-surface tracking-tight">Project Updates</h3>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
              <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl flex gap-6 items-start border border-outline-variant shadow-sm">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-surface-low overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolfaEPFXBnzk93x1zDcaOilIH_2ukOY7H7y2FBW2dskI3KLAJOoYP5xXiofE0uHNP_u4OVnFv1og-7rK1RCmkSThVXmop_W41IspYAtNJVtl--ZJ7dAPRaGS8yHgsCJoS7deemq6oNB7vfeJbugkHvlhI1Hv1Pvh3yqmoeWdPAx0I67P2QKT1cQ_RK231KQWHGEie1e91jvx7NGtVS6wlSsvtV4S8by7X1T6P97EU42BX7P_7psRxDqoi8BEvV9R067i3flYJwqPq" 
                  alt="Maria González"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-on-surface">Maria González <span className="text-on-surface-variant font-normal">actualizó el Análisis #402</span></h5>
                  <span className="text-[10px] font-bold text-on-surface-variant opacity-60 uppercase">Hace 15 min</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Se detectó una desviación del 12% en costos logísticos. Ajustando modelo de diagnóstico para la región norte.</p>
                <div className="pt-2">
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded text-[10px] font-bold uppercase tracking-wider">Optimización</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl flex gap-6 items-start border border-outline-variant shadow-sm">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-on-surface">Validación de Compliance <span className="text-on-surface-variant font-normal">completada</span></h5>
                  <span className="text-[10px] font-bold text-on-surface-variant opacity-60 uppercase">Ayer</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Todos los contratos de Q3 han sido revisados contra la política de transparencia Alpha 2.0.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Distribution */}
        <div className="bg-white rounded-3xl p-8 flex flex-col h-full border border-outline-variant shadow-lg">
          <h3 className="text-xl font-black text-on-surface mb-2 tracking-tight">Team Distribution</h3>
          <p className="text-on-surface-variant text-xs font-medium mb-8">Estructura de roles operativos</p>
          
          <div className="flex-1 space-y-6">
            {teamData.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  <span>{item.name}</span>
                  <span style={{ color: item.color }}>{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-surface-low rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-surface-low border border-outline-variant">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-secondary" />
              <p className="text-xs font-semibold text-on-surface">Capacidad del equipo al 88%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React from 'react';
import { 
  LayoutDashboard, 
  Rocket, 
  ListTodo, 
  GitBranch, 
  Plus, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { cn } from './utils';
import { View } from './types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Workspace', icon: LayoutDashboard },
    { id: 'mvp', label: 'Definición MVP', icon: Rocket },
    { id: 'tasks', label: 'Listado Tareas', icon: ListTodo },
    { id: 'workflow', label: 'Flujo de Trabajo', icon: GitBranch },
  ] as const;

  return (
    <aside className="hidden md:flex flex-col h-full p-4 w-64 bg-surface-low border-r border-outline-variant font-medium">
      <div className="mb-10 px-2">
        <h1 className="text-lg font-black text-on-surface tracking-tight">Project Alpha</h1>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Active Sprint</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out text-sm",
              currentView === item.id 
                ? "text-primary bg-white shadow-sm" 
                : "text-on-surface-variant hover:bg-surface-container-highest/20"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 space-y-1">
        <button className="w-full mb-6 kinetic-gradient text-white py-2.5 rounded-lg font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 scale-95 active:scale-90 transition-transform">
          <Plus className="w-4 h-4" />
          New Project
        </button>
        
        <button className="w-full flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest/20 rounded-lg transition-all text-sm">
          <HelpCircle className="w-4 h-4" />
          <span>Help</span>
        </button>
        
        <button className="w-full flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest/20 rounded-lg transition-all text-sm">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

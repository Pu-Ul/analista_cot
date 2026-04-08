/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import MVPDefinition from './MVPDefinition';
import Workflow from './Workflow';
import Tasks from './Tasks';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'mvp':
        return <MVPDefinition />;
      case 'workflow':
        return <Workflow />;
      case 'tasks':
        return <Tasks />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>

      {/* Mobile Navigation (Bottom Bar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant px-6 py-2 flex justify-between items-center z-50">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className={`flex flex-col items-center gap-1 ${currentView === 'dashboard' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px] font-bold">Dashboard</span>
        </button>
        <button 
          onClick={() => setCurrentView('mvp')}
          className={`flex flex-col items-center gap-1 ${currentView === 'mvp' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px] font-bold">MVP</span>
        </button>
        <button 
          onClick={() => setCurrentView('tasks')}
          className={`flex flex-col items-center gap-1 ${currentView === 'tasks' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px] font-bold">Tareas</span>
        </button>
        <button 
          onClick={() => setCurrentView('workflow')}
          className={`flex flex-col items-center gap-1 ${currentView === 'workflow' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px] font-bold">Workflow</span>
        </button>
      </nav>
    </div>
  );
}

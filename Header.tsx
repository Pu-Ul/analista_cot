import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 w-full h-16 bg-surface sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-on-surface tracking-tight">Kinetic Engine</span>
        <div className="h-6 w-[1px] bg-outline-variant mx-2"></div>
        <div className="flex items-center bg-surface-low px-3 py-1.5 rounded-full">
          <Search className="w-4 h-4 text-on-surface-variant opacity-50" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-on-surface-variant/50 ml-2" 
            placeholder="Search parameters..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest/20 rounded-full transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest/20 rounded-full transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-3 border-l border-outline-variant pl-6">
          <div className="text-right">
            <p className="text-xs font-bold text-on-surface leading-none">Alex Rivera</p>
            <p className="text-[10px] text-on-surface-variant">Lead Analyst</p>
          </div>
          <img 
            alt="Executive Profile" 
            className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRFmytE7ai71yIYs6M7F-fHMCkhVqu2O0r8yzdLtYwbIEStKGOab7GEpHYTHcsVFWznLUYt03_CHA8_9-6ebYrMc2OHrEhZGSjHfFsg4uCnPeYsScDkfzn6JyfwFM8F3VnvexEw5vQNkTBrkqx6Fij5paf7YI2InGbE7Y_mExGK_OZ3ARw6DOpHJfmLcxsTQpNlToAU4x1FKBP6F2978zKqYgwDTkEfu4dhxvQXZms7a-7X2PUdgXbRN5AWj0lksk7gfQI4008IUNb"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { Sparkles, Shield, Zap, ChevronRight, CreditCard, User } from 'lucide-react';

const Humanizer = () => {
  const [text, setText] = useState('');
  const [model, setModel] = useState('Deep Human');

  return (
    <div className="flex h-screen bg-[#050505] text-white">
      {/* Sidebar - Sleek, Bordered, No Blue */}
      <aside className="w-72 border-r border-[#1a1a1a] flex flex-col p-6">
        <div className="mb-10">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase">Humanwriter</h2>
          <p className="text-[10px] text-zinc-500 mt-1">AI-TO-HUMAN ENGINE</p>
        </div>

        <nav className="flex-1 space-y-1">
          <p className="text-[10px] font-semibold text-zinc-600 mb-3 uppercase tracking-wider">Services</p>
          {['Standard Human', 'Deep Human', 'Literary Pro', 'Academic Bypass'].map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={`w-full flex items-center justify-between px-4 py-3 text-xs rounded-sm border transition-all ${
                model === m ? 'border-zinc-500 bg-zinc-900 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {m}
              {model === m && <div className="w-1 h-1 bg-white rounded-full"></div>}
            </button>
          ))}

          <div className="pt-8">
            <p className="text-[10px] font-semibold text-zinc-600 mb-3 uppercase tracking-wider">Account</p>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-xs text-zinc-500 hover:text-white border border-transparent hover:border-zinc-800 transition-all">
              <CreditCard size={14} /> Subscription
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-xs text-zinc-500 hover:text-white border border-transparent hover:border-zinc-800 transition-all">
              <User size={14} /> Profile Settings
            </button>
          </div>
        </nav>

        <div className="mt-auto p-4 border border-zinc-800 rounded-sm bg-zinc-950">
          <p className="text-[10px] text-zinc-500 mb-2">FREE PLAN LIMITS</p>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-white w-3/5"></div>
          </div>
          <p className="text-[10px] mt-2 text-zinc-400">3/5 Humanizations Left</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        
        {/* Real-time Notification Tab - Middle Top */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-[#111] border border-zinc-800 px-6 py-2 rounded-full flex items-center gap-3 shadow-2xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[11px] font-medium tracking-wide">System: Humanwriter Engine v2.4 Active</span>
          </div>
        </div>

        <div className="p-12 max-w-5xl mx-auto w-full mt-10">
          <div className="mb-10">
            <h1 className="text-3xl font-light tracking-tight">Humanize Content</h1>
            <p className="text-zinc-500 text-sm mt-2">Active Model: <span className="text-zinc-200">{model}</span></p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Input Card */}
            <div className="flex flex-col gap-4">
              <div className="border border-black bg-[#0a0a0a] rounded-sm p-1 focus-within:border-zinc-700 transition-all">
                <textarea
                  className="w-full h-96 bg-transparent p-6 outline-none text-sm text-zinc-300 leading-relaxed resize-none"
                  placeholder="Paste your AI content here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Words: {text.split(' ').filter(x => x).length} / 250</span>
                <button className="bg-white text-black text-[11px] font-bold uppercase px-8 py-3 hover:bg-zinc-200 transition-all">
                  Humanize Text
                </button>
              </div>
            </div>

            {/* Output Card - Black Bordered */}
            <div className="border border-black bg-[#0a0a0a] rounded-sm p-6 relative">
              <div className="absolute top-4 right-4">
                <Shield size={14} className="text-zinc-800" />
              </div>
              <div className="h-full overflow-y-auto text-sm text-zinc-400 leading-relaxed italic">
                The humanized output will appear here. The engine will preserve your meaning while injecting natural linguistic variance and removing AI patterns.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Humanizer;
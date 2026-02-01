import { useState, useEffect } from 'react';
import { Activity, Wifi, Clock } from 'lucide-react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-MY', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-MY', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <header className="glass-card px-6 py-4 flex items-center justify-between mb-6">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
          <img src="/tnb-logo.png" alt="TNB Logo" className="w-8 h-8 object-contain" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            TNB <span className="text-neon-red">Wallboard</span>
          </h1>
          <p className="text-sm text-slate-400">Call Center Supervisor Dashboard</p>
        </div>
      </div>

      {/* Date/Time Section */}
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-sm text-slate-400">{formatDate(currentTime)}</p>
          <p className="text-2xl font-mono font-semibold text-white tracking-wider">
            {formatTime(currentTime)}
          </p>
        </div>
        <div className="w-px h-12 bg-slate-700" />
        <Clock className="w-6 h-6 text-slate-400" />
      </div>

      {/* Right Section: Configure + System Status */}
      <div className="flex items-center gap-4">
        {/* Configure Button */}


        {/* System Status */}
        <div className="flex items-center gap-3 glass-card-inner px-5 py-3">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-emerald-success status-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-5 h-5 text-emerald-success" />
            <span className="text-sm font-medium text-emerald-success">System Online</span>
          </div>
        </div>
      </div>
    </header>
  );
}

import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function MetricCard({ title, value, subtitle, icon: Icon, trend, trendValue, color = 'neon-red' }) {
  const colorClasses = {
    'neon-red': {
      bg: 'bg-neon-red/20',
      text: 'text-neon-red',
      glow: 'glow-red-neon',
      gradient: 'from-neon-red to-orange-400',
    },
    'emerald': {
      bg: 'bg-emerald-500/20',
      text: 'text-emerald-400',
      glow: 'glow-green',
      gradient: 'from-emerald-400 to-green-300',
    },
    'rose': {
      bg: 'bg-rose-500/20',
      text: 'text-rose-400',
      glow: 'glow-red',
      gradient: 'from-rose-400 to-pink-300',
    },
    'amber': {
      bg: 'bg-amber-500/20',
      text: 'text-amber-400',
      glow: '',
      gradient: 'from-amber-400 to-yellow-300',
    },
  };

  const colors = colorClasses[color] || colorClasses['neon-red'];

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-emerald-400';
    if (trend === 'down') return 'text-rose-400';
    return 'text-slate-500';
  };

  return (
    <div className={`glass-card p-5 ${colors.glow} hover:scale-[1.02] transition-transform duration-300`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        {trendValue && (
          <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor()}`}>
            {getTrendIcon()}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <p className={`text-4xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
          {value}
        </p>
        {subtitle && (
          <p className="text-xs text-slate-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

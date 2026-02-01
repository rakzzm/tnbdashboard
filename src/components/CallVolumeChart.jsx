import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { hourlyCallVolume } from '../data/mockData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card-inner px-4 py-3">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-lg font-semibold text-neon-red">
          {payload[0].value} <span className="text-sm text-slate-400">calls</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function CallVolumeChart() {
  const maxCalls = Math.max(...hourlyCallVolume.map((d) => d.calls));

  return (
    <div className="glass-card p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-neon-red/20 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-neon-red" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Call Volume by Hour</h2>
          <p className="text-xs text-slate-400">Imagicle Analytics Data</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={hourlyCallVolume} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" vertical={false} />
            <XAxis
              dataKey="hour"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 31, 31, 0.1)' }} />
            <Bar dataKey="calls" radius={[4, 4, 0, 0]}>
              {hourlyCallVolume.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.calls === maxCalls ? '#FF1F1F' : '#FF1F1F80'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

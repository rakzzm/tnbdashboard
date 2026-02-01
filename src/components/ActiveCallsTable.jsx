import { useState, useEffect } from 'react';
import { Phone, PhoneCall, PhoneOff, Pause } from 'lucide-react';
import { initialActiveCalls, callStatusColors } from '../data/mockData';

export default function ActiveCallsTable() {
  const [calls, setCalls] = useState(initialActiveCalls);

  // Increment duration every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCalls((prevCalls) =>
        prevCalls.map((call) => ({
          ...call,
          duration: call.duration + 1,
        }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Talking':
        return <PhoneCall className="w-4 h-4" />;
      case 'Ringing':
        return <Phone className="w-4 h-4" />;
      case 'Hold':
        return <Pause className="w-4 h-4" />;
      default:
        return <PhoneOff className="w-4 h-4" />;
    }
  };

  const getRowClass = (status) => {
    if (status === 'Ringing') {
      return 'row-ringing';
    }
    return 'hover:bg-slate-800/50 transition-colors';
  };

  return (
    <div className="glass-card p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-neon-red/20 flex items-center justify-center">
          <Phone className="w-5 h-5 text-neon-red" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Active Calls</h2>
          <p className="text-xs text-slate-400">Real-time Call Monitor</p>
        </div>
        <div className="ml-auto">
          <span className="px-3 py-1 rounded-full bg-neon-red/20 text-neon-red text-sm font-medium">
            {calls.length} Active
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-slate-700/50">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-800/80">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Caller ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Agent
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {calls.map((call) => (
              <tr key={call.id} className={getRowClass(call.status)}>
                <td className="px-4 py-3">
                  <span className="font-mono text-sm text-white">{call.callerId}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-sm text-white">{call.targetAgent}</span>
                    <span className="text-xs text-slate-500">Ext. {call.extension}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${callStatusColors[call.status]}20`,
                      color: callStatusColors[call.status],
                    }}
                  >
                    {getStatusIcon(call.status)}
                    {call.status}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span
                    className="font-mono text-sm font-medium tabular-nums"
                    style={{ color: callStatusColors[call.status] }}
                  >
                    {formatDuration(call.duration)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { Users, Clock, Phone } from 'lucide-react';
import { callQueues } from '../data/mockData';

export default function CallQueueStatus() {
  const getWaitTimeColor = (seconds) => {
    if (seconds > 180) return 'text-rose-500'; // > 3 mins
    if (seconds > 60) return 'text-amber-500'; // > 1 min
    return 'text-emerald-500';
  };

  const formatWaitTime = (seconds) => {
    if (seconds === 0) return '-';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-neon-red/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-neon-red" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Call Queue Status</h2>
          <p className="text-xs text-slate-400">Live Waiting Metrics</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Queue Name</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Waiting</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Wait Time</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Staffed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {callQueues.map((queue) => (
              <tr key={queue.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3">
                  <span className="text-sm font-medium text-slate-900">{queue.name}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold ${queue.waiting > 0 ? 'bg-rose-500/20 text-rose-600' : 'bg-slate-200/50 text-slate-500'}`}>
                    {queue.waiting}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className={`flex items-center justify-center gap-1.5 text-sm font-mono font-medium ${getWaitTimeColor(queue.longestWait)}`}>
                    {queue.longestWait > 0 && <Clock className="w-3.5 h-3.5" />}
                    {formatWaitTime(queue.longestWait)}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs">
                    <Phone className="w-3 h-3" />
                    <span className="text-slate-900 font-medium">{queue.agentsTalking}</span>
                    <span className="text-slate-600">/</span>
                    <span>{queue.agentsStaffed}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

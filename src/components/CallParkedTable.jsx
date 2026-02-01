import { PlayCircle, Clock } from 'lucide-react';
import { parkedCalls } from '../data/mockData';

export default function CallParkedTable() {
  return (
    <div className="glass-card p-5 mt-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-neon-red/20 flex items-center justify-center">
          <PlayCircle className="w-5 h-5 text-neon-red" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Call Parked</h2>
          <p className="text-xs text-slate-400">Currently Parked Calls</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-slate-700/50">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-800/80">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Caller ID</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Parked By</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Duration</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Ext</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {parkedCalls.map((call) => (
              <tr key={call.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-4 py-3 text-sm text-white font-mono">{call.callerId}</td>
                <td className="px-4 py-3 text-sm text-slate-300">{call.parkedBy}</td>
                <td className="px-4 py-3 text-center">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-amber-400 border border-slate-700">
                    <Clock className="w-3 h-3" />
                    {call.duration}
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-sm text-slate-400 font-mono">{call.extension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

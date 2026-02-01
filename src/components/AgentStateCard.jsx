import { statusColors } from '../data/mockData';

export default function AgentStateCard({ agent }) {
  const stateLabels = {
    Ready: 'Available',
    Busy: 'On Call',
    Paused: 'Break',
  };

  return (
    <div className="glass-card-inner px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-colors">
      {/* Status Indicator */}
      <div className="relative">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: statusColors[agent.state] }}
        />
        {agent.state === 'Ready' && (
          <div
            className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
            style={{ backgroundColor: statusColors[agent.state], opacity: 0.3 }}
          />
        )}
      </div>

      {/* Agent Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{agent.name}</p>
        <p className="text-xs text-slate-500">Ext. {agent.extension}</p>
      </div>

      {/* State Badge */}
      <div
        className="px-2 py-0.5 rounded text-xs font-medium"
        style={{
          backgroundColor: `${statusColors[agent.state]}20`,
          color: statusColors[agent.state],
        }}
      >
        {stateLabels[agent.state]}
      </div>
    </div>
  );
}

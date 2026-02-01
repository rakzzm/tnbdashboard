import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import AgentStateCard from './AgentStateCard';
import { initialAgents, statusColors } from '../data/mockData';

export default function AgentStatesGrid() {
  const [agents, setAgents] = useState(initialAgents);

  // Randomly change agent status every 5 seconds to simulate CTI websocket events
  useEffect(() => {
    const states = ['Ready', 'Busy', 'Paused'];

    const timer = setInterval(() => {
      setAgents((prevAgents) => {
        const randomIndex = Math.floor(Math.random() * prevAgents.length);
        const currentState = prevAgents[randomIndex].state;
        const availableStates = states.filter((s) => s !== currentState);
        const newState = availableStates[Math.floor(Math.random() * availableStates.length)];

        return prevAgents.map((agent, index) =>
          index === randomIndex ? { ...agent, state: newState } : agent
        );
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Count agents by state
  const stateCounts = agents.reduce(
    (acc, agent) => {
      acc[agent.state] = (acc[agent.state] || 0) + 1;
      return acc;
    },
    { Ready: 0, Busy: 0, Paused: 0 }
  );

  return (
    <div className="glass-card p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-neon-red/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-neon-red" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Agent States</h2>
            <p className="text-xs text-slate-400">CTI Real-time Status</p>
          </div>
        </div>

        {/* Status Summary */}
        <div className="flex items-center gap-4">
          {Object.entries(stateCounts).map(([state, count]) => (
            <div key={state} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: statusColors[state] }}
              />
              <span className="text-sm text-slate-400">
                {count} <span className="hidden sm:inline">{state}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {agents.map((agent) => (
          <AgentStateCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}

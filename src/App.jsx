import { Phone, PhoneOff, Clock, Target } from 'lucide-react';
import Header from './components/Header';
import ActiveCallsTable from './components/ActiveCallsTable';
import MetricCard from './components/MetricCard';
import CallVolumeChart from './components/CallVolumeChart';
import AgentStatesGrid from './components/AgentStatesGrid';
import CallQueueStatus from './components/CallQueueStatus';
import CallParkedTable from './components/CallParkedTable';

import { dailyMetrics } from './data/mockData';

function App() {
  // Dashboard View
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Active Calls & Parked Calls */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <ActiveCallsTable />
          <CallParkedTable />
        </div>

        {/* Right Column - Metrics & Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Total Calls Today"
              value={dailyMetrics.totalCalls.toLocaleString()}
              subtitle="CUCM CDR Data"
              icon={Phone}
              trend="up"
              trendValue="+12%"
              color="neon-red"
            />
            <MetricCard
              title="Abandoned Calls"
              value={dailyMetrics.abandonedCalls}
              subtitle="Target: < 50"
              icon={PhoneOff}
              trend="down"
              trendValue="-8%"
              color="neon-red"
            />
            <MetricCard
              title="Avg Handle Time"
              value={dailyMetrics.aht}
              subtitle="Target: 5:00"
              icon={Clock}
              trend="up"
              trendValue="+0:15"
              color="neon-red"
            />
            <MetricCard
              title="Service Level"
              value={`${dailyMetrics.serviceLevel}%`}
              subtitle="Target: 90%"
              icon={Target}
              trend="up"
              trendValue="+2.4%"
              color="neon-red"
            />
          </div>

          {/* Call Volume Chart */}
          <CallVolumeChart />

          {/* Agent States */}
          <AgentStatesGrid />

          {/* Call Queue Status */}
          <CallQueueStatus />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-xs text-slate-600">
        <p>TNB Supervisor Wallboard</p>
      </footer>
    </div>
  );
}

export default App;

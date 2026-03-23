import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // motion/react o'rniga framer-motion (standart)
import { Activity, Globe, Server, Wifi, AlertTriangle, CheckCircle, Shield, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- DATA & CONSTANTS ---
const INITIAL_NETWORK_DATA = Array.from({ length: 30 }, (_, i) => ({
  time: i,
  traffic: Math.random() * 100 + 50,
  threats: Math.floor(Math.random() * 15),
  blocked: Math.floor(Math.random() * 10),
}));

const CONNECTIONS = [
  { id: 1, ip: '192.168.1.45', location: 'New York, USA', status: 'safe', traffic: '2.4 MB/s', port: 443 },
  { id: 2, ip: '10.0.0.89', location: 'London, UK', status: 'warning', traffic: '1.8 MB/s', port: 8080 },
  { id: 3, ip: '172.16.0.234', location: 'Tokyo, Japan', status: 'blocked', traffic: '0 MB/s', port: 22 },
  { id: 4, ip: '192.168.2.67', location: 'Berlin, Germany', status: 'safe', traffic: '3.2 MB/s', port: 443 },
  { id: 5, ip: '203.0.113.42', location: 'Sydney, Australia', status: 'warning', traffic: '0.9 MB/s', port: 3389 },
];

const ALERTS = [
  { id: 1, type: 'warning', message: 'High CPU usage detected on server-03', time: '30s ago' },
  { id: 2, type: 'critical', message: 'Multiple failed login attempts from 45.33.21.89', time: '1m ago' },
  { id: 3, type: 'info', message: 'System backup completed successfully', time: '5m ago' },
  { id: 4, type: 'warning', message: 'Unusual network traffic pattern detected', time: '8m ago' },
];

// --- REUSABLE COMPONENTS ---

const StatCard = ({ icon: Icon, value, label, color, suffix = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className={`relative p-5 rounded-2xl border-2 border-${color}-500/30 bg-[#0a1628]/60 backdrop-blur-xl overflow-hidden group shadow-lg shadow-${color}-500/5`}
  >
    <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${color}-500/10 rounded-full blur-2xl group-hover:bg-${color}-500/20 transition-all`} />
    <div className="flex justify-between items-start mb-3">
      <div className={`p-2 rounded-lg bg-${color}-500/10 border border-${color}-500/20`}>
        <Icon className={`w-6 h-6 text-${color}-400`} />
      </div>
      <div className={`w-2 h-2 rounded-full bg-${color}-400 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse`} />
    </div>
    <div className="text-3xl font-black text-white tabular-nums">
      {value}<span className="text-lg text-gray-500 ml-1 font-medium">{suffix}</span>
    </div>
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</p>
  </motion.div>
);

// --- MAIN COMPONENT ---

export function RealTimeMonitoring() {
  const [networkData, setNetworkData] = useState(INITIAL_NETWORK_DATA);
  const [stats, setStats] = useState({ active: 1247, threats: 89, bandwidth: 156.7, uptime: 99.8 });

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkData(prev => {
        const last = prev[prev.length - 1];
        return [...prev.slice(1), {
          time: last.time + 1,
          traffic: Math.random() * 100 + 50,
          threats: Math.floor(Math.random() * 15),
          blocked: Math.floor(Math.random() * 10),
        }];
      });

      setStats(prev => ({
        ...prev,
        active: prev.active + Math.floor(Math.random() * 6 - 3),
        bandwidth: Math.max(100, Math.min(250, prev.bandwidth + (Math.random() * 10 - 5))),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 p-6 bg-[#050b15] min-h-screen text-slate-300 font-sans">
      
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase italic">
              CyberShield <span className="text-cyan-500 font-black">Monitoring</span>
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">Security Node Active</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-4">
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-400">ID: CN-8829</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Globe} value={stats.active} label="Active Connections" color="cyan" />
        <StatCard icon={AlertTriangle} value={stats.threats} label="Threats Neutralized" color="red" />
        <StatCard icon={Wifi} value={stats.bandwidth.toFixed(1)} suffix="MB/s" label="Bandwidth" color="purple" />
        <StatCard icon={Server} value={stats.uptime} suffix="%" label="System Uptime" color="green" />
      </div>

      {/* Main Graph Card */}
      <div className="relative p-8 rounded-3xl border-2 border-white/5 bg-[#0a1628]/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 p-8 flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-black text-green-400 tracking-widest uppercase">Live Data</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <Activity className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Network Traffic Analysis</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Real-time packet inspection</p>
          </div>
        </div>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={networkData}>
              <defs>
                <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis dataKey="time" hide />
              <YAxis hide domain={[0, 160]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0a1628', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
              />
              <Area type="monotone" dataKey="traffic" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
              <Area type="monotone" dataKey="threats" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorThreats)" />
              <Area type="monotone" dataKey="blocked" stroke="#10b981" strokeWidth={2} fillOpacity={0} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Sections: Active Connections & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Active Connections List */}
        <div className="p-6 rounded-2xl border border-white/5 bg-[#0a1628]/40 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" /> Active Nodes
            </h3>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Watch</span>
          </div>
          <div className="space-y-3">
            {CONNECTIONS.map((conn, idx) => (
              <motion.div
                key={conn.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    conn.status === 'safe' ? 'bg-green-500' : conn.status === 'warning' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                  }`} />
                  <div>
                    <p className="text-sm font-mono font-bold text-white tracking-wider">{conn.ip}</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase">{conn.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-cyan-500 tracking-tight">{conn.traffic}</p>
                  <p className="text-[10px] text-gray-600 font-bold">PORT {conn.port}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Alerts List */}
        <div className="p-6 rounded-2xl border border-white/5 bg-[#0a1628]/40 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" /> System Logs
            </h3>
            <span className="text-red-500/60 text-[10px] font-black uppercase tracking-widest animate-pulse">Critical Priority</span>
          </div>
          <div className="space-y-3">
            {ALERTS.map((alert, idx) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-4 p-4 rounded-xl border ${
                  alert.type === 'critical' ? 'border-red-500/20 bg-red-500/5' : 
                  alert.type === 'warning' ? 'border-yellow-500/20 bg-yellow-500/5' : 
                  'border-blue-500/20 bg-blue-500/5'
                }`}
              >
                <div className="mt-1">
                  {alert.type === 'critical' ? <AlertTriangle className="w-4 h-4 text-red-500" /> : 
                   alert.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-500" /> : 
                   <CheckCircle className="w-4 h-4 text-blue-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white leading-tight">{alert.message}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{alert.time}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-700" />
                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Event ID: 0x{Math.floor(Math.random()*999)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

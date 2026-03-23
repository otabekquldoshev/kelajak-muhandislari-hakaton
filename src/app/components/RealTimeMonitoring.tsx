import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Globe, Server, Wifi, AlertTriangle, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialNetworkData = Array.from({ length: 30 }, (_, i) => ({
  time: i,
  traffic: Math.random() * 100 + 50,
  threats: Math.floor(Math.random() * 10),
  blocked: Math.floor(Math.random() * 8),
}));

const activeConnections = [
  { id: 1, ip: '192.168.1.45', location: 'New York, USA', status: 'safe', traffic: '2.4 MB/s', port: 443 },
  { id: 2, ip: '10.0.0.89', location: 'London, UK', status: 'warning', traffic: '1.8 MB/s', port: 8080 },
  { id: 3, ip: '172.16.0.234', location: 'Tokyo, Japan', status: 'blocked', traffic: '0 MB/s', port: 22 },
  { id: 4, ip: '192.168.2.67', location: 'Berlin, Germany', status: 'safe', traffic: '3.2 MB/s', port: 443 },
  { id: 5, ip: '203.0.113.42', location: 'Sydney, Australia', status: 'warning', traffic: '0.9 MB/s', port: 3389 },
];

const systemAlerts = [
  { id: 1, type: 'warning', message: 'High CPU usage detected on server-03', time: '30s ago' },
  { id: 2, type: 'critical', message: 'Multiple failed login attempts from 45.33.21.89', time: '1m ago' },
  { id: 3, type: 'info', message: 'System backup completed successfully', time: '5m ago' },
  { id: 4, type: 'warning', message: 'Unusual network traffic pattern detected', time: '8m ago' },
];

export function RealTimeMonitoring() {
  const [networkData, setNetworkData] = useState(initialNetworkData);
  const [liveStats, setLiveStats] = useState({
    activeConnections: 1247,
    threatsBlocked: 89,
    bandwidth: 156.7,
    uptime: 99.8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkData((prev) => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: prev[prev.length - 1].time + 1,
          traffic: Math.random() * 100 + 50,
          threats: Math.floor(Math.random() * 10),
          blocked: Math.floor(Math.random() * 8),
        });
        return newData;
      });

      setLiveStats((prev) => ({
        activeConnections: prev.activeConnections + Math.floor(Math.random() * 10 - 5),
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 3),
        bandwidth: Math.max(100, Math.min(200, prev.bandwidth + (Math.random() * 20 - 10))),
        uptime: 99.8,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50" />
        <h2 className="text-2xl font-black text-white tracking-wider uppercase">NETWORK SURVEILLANCE</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative p-5 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-[#0a1628]/90 to-[#0f1f3a]/90 backdrop-blur-xl overflow-hidden group hover:border-cyan-400/60 transition-all shadow-xl shadow-cyan-500/10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
          <div className="relative flex items-center justify-between mb-3">
            <Globe className="w-7 h-7 text-cyan-400" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
            />
          </div>
          <p className="relative text-3xl font-black text-white mb-1">{liveStats.activeConnections}</p>
          <p className="relative text-xs text-gray-400 font-bold uppercase tracking-widest">ACTIVE CONNECTIONS</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative p-5 rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-500/10 via-[#0a1628]/90 to-[#0f1f3a]/90 backdrop-blur-xl overflow-hidden group hover:border-red-400/60 transition-all shadow-xl shadow-red-500/10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all" />
          <div className="relative flex items-center justify-between mb-3">
            <AlertTriangle className="w-7 h-7 text-red-400" />
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-400/50"
            />
          </div>
          <p className="relative text-3xl font-black text-white mb-1">{liveStats.threatsBlocked}</p>
          <p className="relative text-xs text-gray-400 font-bold uppercase tracking-widest">THREATS NEUTRALIZED</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative p-5 rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-[#0a1628]/90 to-[#0f1f3a]/90 backdrop-blur-xl overflow-hidden group hover:border-purple-400/60 transition-all shadow-xl shadow-purple-500/10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
          <div className="relative flex items-center justify-between mb-3">
            <Wifi className="w-7 h-7 text-purple-400" />
            <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse" />
          </div>
          <p className="relative text-3xl font-black text-white mb-1">{liveStats.bandwidth.toFixed(1)}<span className="text-lg ml-1 text-gray-400">MB/s</span></p>
          <p className="relative text-xs text-gray-400 font-bold uppercase tracking-widest">BANDWIDTH USAGE</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative p-5 rounded-2xl border-2 border-green-500/40 bg-gradient-to-br from-green-500/10 via-[#0a1628]/90 to-[#0f1f3a]/90 backdrop-blur-xl overflow-hidden group hover:border-green-400/60 transition-all shadow-xl shadow-green-500/10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all" />
          <div className="relative flex items-center justify-between mb-3">
            <Server className="w-7 h-7 text-green-400" />
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <p className="relative text-3xl font-black text-white mb-1">{liveStats.uptime}<span className="text-lg ml-1 text-gray-400">%</span></p>
          <p className="relative text-xs text-gray-400 font-bold uppercase tracking-widest">SYSTEM UPTIME</p>
        </motion.div>
      </div>

      {/* Real-Time Traffic Chart */}
      <div className="relative p-6 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-[#0a1628]/90 to-[#0f1f3a]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30">
              <Activity className="w-5 h-5 text-cyan-300" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-wider">NETWORK TRAFFIC ANALYSIS</h3>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-400/40">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
            />
            <span className="text-xs text-green-300 font-bold uppercase tracking-wider">LIVE FEED</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={networkData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2942" opacity={0.3} />
            <XAxis dataKey="time" stroke="#4a5f7f" tick={{ fill: '#7a8fa5' }} />
            <YAxis stroke="#4a5f7f" tick={{ fill: '#7a8fa5' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0a1628',
                border: '1px solid #00f0ff',
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="traffic"
              stroke="#00f0ff"
              strokeWidth={2}
              dot={false}
              name="Traffic"
            />
            <Line
              type="monotone"
              dataKey="threats"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              name="Threats"
            />
            <Line
              type="monotone"
              dataKey="blocked"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              name="Blocked"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Connections */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Active Connections
          </h3>
          <div className="space-y-3">
            {activeConnections.map((conn, index) => (
              <motion.div
                key={conn.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${
                  conn.status === 'safe' ? 'border-green-500/20 bg-green-500/5' :
                  conn.status === 'warning' ? 'border-yellow-500/20 bg-yellow-500/5' :
                  'border-red-500/20 bg-red-500/5'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      conn.status === 'safe' ? 'bg-green-500' :
                      conn.status === 'warning' ? 'bg-yellow-500 animate-pulse' :
                      'bg-red-500'
                    }`} />
                    <span className="text-sm text-white font-mono">{conn.ip}</span>
                  </div>
                  <span className="text-xs text-gray-400">Port {conn.port}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{conn.location}</span>
                  <span className="text-cyan-400">{conn.traffic}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            System Alerts
          </h3>
          <div className="space-y-3">
            {systemAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${
                  alert.type === 'critical' ? 'border-red-500/30 bg-red-500/5' :
                  alert.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/5' :
                  'border-blue-500/30 bg-blue-500/5'
                }`}
              >
                <div className="flex items-start gap-2">
                  {alert.type === 'critical' && (
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                    </motion.div>
                  )}
                  {alert.type === 'warning' && (
                    <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />
                  )}
                  {alert.type === 'info' && (
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-white">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
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
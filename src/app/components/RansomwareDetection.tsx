import { motion } from 'motion/react';
import { AlertTriangle, Shield, Database, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const detectionData = [
  { name: 'WannaCry', detected: 23, blocked: 23, color: '#ef4444' },
  { name: 'Ryuk', detected: 17, blocked: 17, color: '#f59e0b' },
  { name: 'LockBit', detected: 12, blocked: 11, color: '#eab308' },
  { name: 'Conti', detected: 8, blocked: 8, color: '#10b981' },
  { name: 'REvil', detected: 5, blocked: 5, color: '#06b6d4' },
];

const recentThreats = [
  { id: 1, type: 'Ransomware.WannaCry.v2', ip: '192.168.1.145', timestamp: '2 min ago', severity: 'critical', action: 'Quarantined' },
  { id: 2, type: 'Ransomware.Ryuk.variant', ip: '10.0.0.89', timestamp: '7 min ago', severity: 'high', action: 'Blocked' },
  { id: 3, type: 'Ransomware.LockBit.3.0', ip: '172.16.0.234', timestamp: '12 min ago', severity: 'critical', action: 'Isolated' },
  { id: 4, type: 'Ransomware.Unknown', ip: '192.168.2.67', timestamp: '18 min ago', severity: 'medium', action: 'Analyzing' },
];

export function RansomwareDetection() {
  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <div>
              <p className="text-2xl font-bold text-white">65</p>
              <p className="text-xs text-gray-400">Threats Detected</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">64</p>
              <p className="text-xs text-gray-400">Successfully Blocked</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-cyan-400" />
            <div>
              <p className="text-2xl font-bold text-white">98.5%</p>
              <p className="text-xs text-gray-400">Model Accuracy</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <TrendingDown className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">-23%</p>
              <p className="text-xs text-gray-400">vs Last Week</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Detection Chart */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" />
            Ransomware Detection by Type
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={detectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2942" opacity={0.3} />
              <XAxis dataKey="name" stroke="#4a5f7f" tick={{ fill: '#7a8fa5', fontSize: 12 }} />
              <YAxis stroke="#4a5f7f" tick={{ fill: '#7a8fa5' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0a1628',
                  border: '1px solid #00f0ff',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="detected" radius={[8, 8, 0, 0]}>
                {detectionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Model Status */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4">AI Detection Model Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Pattern Recognition</span>
                <span className="text-cyan-400">97.2%</span>
              </div>
              <div className="h-2 bg-[#1a2942] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '97.2%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Behavioral Analysis</span>
                <span className="text-green-400">99.1%</span>
              </div>
              <div className="h-2 bg-[#1a2942] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '99.1%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Signature Matching</span>
                <span className="text-purple-400">98.8%</span>
              </div>
              <div className="h-2 bg-[#1a2942] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '98.8%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Neural Network</span>
                <span className="text-orange-400">96.5%</span>
              </div>
              <div className="h-2 bg-[#1a2942] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '96.5%' }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Detections */}
      <div className="p-6 rounded-xl border border-red-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
        <h3 className="text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Recent Ransomware Detections
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/10">
                <th className="text-left py-3 px-4 text-sm text-gray-400">Threat Type</th>
                <th className="text-left py-3 px-4 text-sm text-gray-400">Source IP</th>
                <th className="text-left py-3 px-4 text-sm text-gray-400">Time</th>
                <th className="text-left py-3 px-4 text-sm text-gray-400">Severity</th>
                <th className="text-left py-3 px-4 text-sm text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentThreats.map((threat, index) => (
                <motion.tr
                  key={threat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-cyan-500/5 hover:bg-cyan-500/5 transition-colors"
                >
                  <td className="py-3 px-4 text-sm text-white font-mono">{threat.type}</td>
                  <td className="py-3 px-4 text-sm text-gray-300">{threat.ip}</td>
                  <td className="py-3 px-4 text-sm text-gray-400">{threat.timestamp}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      threat.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      threat.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {threat.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-green-400">{threat.action}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

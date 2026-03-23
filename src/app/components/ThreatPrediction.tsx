import { motion } from 'motion/react';
import { TrendingUp, Brain, Target, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const predictionData = [
  { time: '00:00', predicted: 45, actual: 42, confidence: 85 },
  { time: '04:00', predicted: 52, actual: 50, confidence: 88 },
  { time: '08:00', predicted: 78, actual: 75, confidence: 92 },
  { time: '12:00', predicted: 95, actual: 98, confidence: 90 },
  { time: '16:00', predicted: 112, actual: 108, confidence: 94 },
  { time: '20:00', predicted: 87, actual: null, confidence: 91 },
  { time: '24:00', predicted: 65, actual: null, confidence: 89 },
];

const threatTypes = [
  { type: 'DDoS Attack', probability: 78, trend: 'up', impact: 'High' },
  { type: 'Ransomware', probability: 65, trend: 'down', impact: 'Critical' },
  { type: 'Phishing', probability: 82, trend: 'up', impact: 'Medium' },
  { type: 'SQL Injection', probability: 45, trend: 'down', impact: 'High' },
  { type: 'Zero-Day Exploit', probability: 23, trend: 'up', impact: 'Critical' },
];

const mlModels = [
  { name: 'LSTM Neural Network', accuracy: 94.3, status: 'Training', lastUpdate: '5m ago' },
  { name: 'Random Forest', accuracy: 91.7, status: 'Active', lastUpdate: '1m ago' },
  { name: 'XGBoost Classifier', accuracy: 93.2, status: 'Active', lastUpdate: '2m ago' },
  { name: 'Deep Learning CNN', accuracy: 95.8, status: 'Active', lastUpdate: '30s ago' },
];

export function ThreatPrediction() {
  return (
    <div className="space-y-6">
      {/* Prediction Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-cyan-400" />
            <div>
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-xs text-gray-400">Active ML Models</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">93.7%</p>
              <p className="text-xs text-gray-400">Prediction Accuracy</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-2xl font-bold text-white">112</p>
              <p className="text-xs text-gray-400">Predicted Threats (24h)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">91%</p>
              <p className="text-xs text-gray-400">Confidence Level</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Prediction Chart */}
      <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
        <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Threat Prediction Timeline (Next 24 Hours)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={predictionData}>
            <defs>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
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
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="#00f0ff"
              strokeWidth={3}
              fill="url(#colorPredicted)"
              name="Predicted"
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorActual)"
              name="Actual"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Probability */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Predicted Threats by Type
          </h3>
          <div className="space-y-4">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={threat.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-lg border border-cyan-500/10 bg-cyan-500/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white">{threat.type}</span>
                    {threat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-red-400" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-green-400 rotate-180" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      threat.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      threat.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {threat.impact}
                    </span>
                    <span className="text-sm font-bold text-cyan-400">{threat.probability}%</span>
                  </div>
                </div>
                <div className="h-2 bg-[#1a2942] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${threat.probability}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${
                      threat.probability > 70 ? 'bg-red-500' :
                      threat.probability > 50 ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ML Models Status */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            ML Models Performance
          </h3>
          <div className="space-y-4">
            {mlModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-purple-500/10 bg-purple-500/5"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm text-white font-medium">{model.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Updated {model.lastUpdate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      model.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'
                    }`} />
                    <span className="text-xs text-gray-400">{model.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-[#1a2942] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${model.accuracy}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                  <span className="text-sm font-bold text-purple-400">{model.accuracy}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

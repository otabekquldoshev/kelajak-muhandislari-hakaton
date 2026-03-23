import { motion } from 'motion/react';
import { Mail, AlertCircle, CheckCircle, Brain, BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const phishingData = [
  { name: 'Legitimate', value: 8234, color: '#10b981' },
  { name: 'Phishing', value: 1456, color: '#ef4444' },
  { name: 'Suspicious', value: 892, color: '#f59e0b' },
  { name: 'Spam', value: 2341, color: '#6b7280' },
];

const nlpMetrics = [
  { metric: 'Sentiment Analysis', score: 94.7, color: 'cyan' },
  { metric: 'Entity Recognition', score: 96.2, color: 'green' },
  { metric: 'Intent Classification', score: 93.8, color: 'purple' },
  { metric: 'Language Detection', score: 99.1, color: 'blue' },
];

const recentEmails = [
  {
    id: 1,
    subject: 'Urgent: Verify your account immediately',
    sender: 'security@paypa1.com',
    classification: 'Phishing',
    confidence: 98.7,
    features: ['Urgency keywords', 'Spoofed domain', 'Suspicious links'],
  },
  {
    id: 2,
    subject: 'Your invoice #INV-2024-0345',
    sender: 'billing@company.com',
    classification: 'Legitimate',
    confidence: 96.2,
    features: ['Known sender', 'Valid domain', 'Expected format'],
  },
  {
    id: 3,
    subject: 'You won $1,000,000!',
    sender: 'prize@lottery-winner.net',
    classification: 'Phishing',
    confidence: 99.4,
    features: ['Too good to be true', 'Unknown sender', 'Prize scam'],
  },
];

export function PhishingDetection() {
  return (
    <div className="space-y-6">
      {/* NLP Model Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {nlpMetrics.map((metric, index) => (
          <motion.div
            key={metric.metric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <Brain className={`w-4 h-4 text-${metric.color}-400`} />
              <p className="text-xs text-gray-400">{metric.metric}</p>
            </div>
            <p className="text-2xl font-bold text-white">{metric.score}%</p>
            <div className="mt-2 h-1 bg-[#1a2942] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.score}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                className={`h-full bg-${metric.color}-500`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Email Classification Chart */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Email Classification (Last 24h)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={phishingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {phishingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0a1628',
                  border: '1px solid #00f0ff',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {phishingData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-300">{item.name}: {item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NLP Processing Pipeline */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
          <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            NLP Processing Pipeline
          </h3>
          <div className="space-y-4">
            {[
              { step: 'Text Preprocessing', status: 'active', progress: 100 },
              { step: 'Tokenization', status: 'active', progress: 100 },
              { step: 'Feature Extraction', status: 'active', progress: 87 },
              { step: 'BERT Classification', status: 'processing', progress: 65 },
              { step: 'Ensemble Voting', status: 'pending', progress: 0 },
            ].map((item, index) => (
              <div key={item.step}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.status === 'active' && <CheckCircle className="w-4 h-4 text-green-400" />}
                    {item.status === 'processing' && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <AlertCircle className="w-4 h-4 text-cyan-400" />
                      </motion.div>
                    )}
                    {item.status === 'pending' && <div className="w-4 h-4 rounded-full border-2 border-gray-600" />}
                    <span className="text-sm text-gray-300">{item.step}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.progress}%</span>
                </div>
                <div className="h-1.5 bg-[#1a2942] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`h-full ${
                      item.status === 'active' ? 'bg-green-500' :
                      item.status === 'processing' ? 'bg-cyan-500' :
                      'bg-gray-600'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Email Analysis */}
      <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
        <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5" />
          Recent Email Analysis
        </h3>
        <div className="space-y-4">
          {recentEmails.map((email, index) => (
            <motion.div
              key={email.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${
                email.classification === 'Phishing'
                  ? 'border-red-500/30 bg-red-500/5'
                  : 'border-green-500/30 bg-green-500/5'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <p className="text-white font-medium">{email.subject}</p>
                  </div>
                  <p className="text-sm text-gray-400">From: {email.sender}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    email.classification === 'Phishing'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {email.classification}
                  </span>
                  <span className="text-xs text-gray-500">
                    Confidence: {email.confidence}%
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {email.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

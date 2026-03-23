import { useState } from 'react';
import { Shield, Search, Activity, AlertTriangle, Mail, TrendingUp, Eye, Brain, Zap, Lock, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { RansomwareDetection } from './components/RansomwareDetection';
import { PhishingDetection } from './components/PhishingDetection';
import { ThreatPrediction } from './components/ThreatPrediction';
import { RealTimeMonitoring } from './components/RealTimeMonitoring';
import { DeepfakeAnalysis } from './components/DeepfakeAnalysis';

type TabType = 'monitoring' | 'ransomware' | 'phishing' | 'deepfake' | 'prediction';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('monitoring');

  const tabs = [
    { id: 'monitoring' as TabType, name: 'REAL-TIME MONITORING', icon: Activity, color: 'cyan' },
    { id: 'ransomware' as TabType, name: 'RANSOMWARE SHIELD', icon: AlertTriangle, color: 'red' },
    { id: 'phishing' as TabType, name: 'PHISHING GUARD', icon: Mail, color: 'orange' },
    { id: 'deepfake' as TabType, name: 'DEEPFAKE DETECTOR', icon: Eye, color: 'purple' },
    { id: 'prediction' as TabType, name: 'THREAT INTELLIGENCE', icon: TrendingUp, color: 'green' },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00f0ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <header className="relative border-b border-cyan-500/30 bg-[#0a1628]/90 backdrop-blur-2xl sticky top-0 z-50 shadow-xl shadow-cyan-500/5">
        <div className="max-w-[2000px] mx-auto px-8 py-5">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                />
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50">
                  <Shield className="w-10 h-10 text-cyan-300" />
                </div>
              </div>
              <div>
                <motion.h1 
                  className="text-4xl font-black tracking-wider"
                  style={{
                    background: 'linear-gradient(90deg, #00f0ff 0%, #a855f7 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
                  }}
                >
                  CYBERSHIELD NETWORK
                </motion.h1>
                <div className="flex items-center gap-2 mt-1">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <p className="text-sm text-gray-400 font-medium tracking-widest">AI-POWERED SECURITY PLATFORM</p>
                </div>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative max-w-xl w-full group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="SEARCH THREATS, IPS, MODELS, EVENTS..."
                  className="w-full pl-14 pr-5 py-3.5 bg-[#0a1628]/80 border-2 border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30 backdrop-blur-xl transition-all uppercase text-sm font-semibold tracking-wide"
                />
              </div>
            </motion.div>

            {/* Status Indicators */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/40 shadow-lg shadow-green-500/20">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                />
                <span className="text-sm font-bold text-green-300 tracking-wide uppercase">ONLINE</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20">
                <Brain className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-bold text-cyan-300 tracking-wide uppercase">AI: 7/7</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap overflow-hidden group ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${
                          tab.color === 'cyan' ? 'from-cyan-500/30 to-blue-500/30' :
                          tab.color === 'red' ? 'from-red-500/30 to-orange-500/30' :
                          tab.color === 'orange' ? 'from-orange-500/30 to-yellow-500/30' :
                          tab.color === 'purple' ? 'from-purple-500/30 to-pink-500/30' :
                          'from-green-500/30 to-emerald-500/30'
                        }`
                      : 'bg-[#0a1628]/60 group-hover:bg-[#0a1628]'
                  }`} />
                  
                  {/* Border */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all ${
                    isActive
                      ? `${
                          tab.color === 'cyan' ? 'border-cyan-400/60 shadow-lg shadow-cyan-500/30' :
                          tab.color === 'red' ? 'border-red-400/60 shadow-lg shadow-red-500/30' :
                          tab.color === 'orange' ? 'border-orange-400/60 shadow-lg shadow-orange-500/30' :
                          tab.color === 'purple' ? 'border-purple-400/60 shadow-lg shadow-purple-500/30' :
                          'border-green-400/60 shadow-lg shadow-green-500/30'
                        }`
                      : 'border-cyan-500/20 group-hover:border-cyan-500/40'
                  }`} />

                  {/* Glow Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-xl ${
                        tab.color === 'cyan' ? 'bg-cyan-500/10' :
                        tab.color === 'red' ? 'bg-red-500/10' :
                        tab.color === 'orange' ? 'bg-orange-500/10' :
                        tab.color === 'purple' ? 'bg-purple-500/10' :
                        'bg-green-500/10'
                      } blur-xl`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Content */}
                  <Icon className={`relative w-5 h-5 ${
                    isActive
                      ? `${
                          tab.color === 'cyan' ? 'text-cyan-300' :
                          tab.color === 'red' ? 'text-red-300' :
                          tab.color === 'orange' ? 'text-orange-300' :
                          tab.color === 'purple' ? 'text-purple-300' :
                          'text-green-300'
                        }`
                      : 'text-gray-400 group-hover:text-cyan-400'
                  }`} />
                  <span className="relative text-sm tracking-wider">{tab.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="indicator"
                      className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${
                        tab.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-blue-400' :
                        tab.color === 'red' ? 'bg-gradient-to-r from-red-400 to-orange-400' :
                        tab.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-yellow-400' :
                        tab.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                        'bg-gradient-to-r from-green-400 to-emerald-400'
                      } shadow-lg`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-[2000px] mx-auto px-8 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'monitoring' && <RealTimeMonitoring />}
          {activeTab === 'ransomware' && <RansomwareDetection />}
          {activeTab === 'phishing' && <PhishingDetection />}
          {activeTab === 'deepfake' && <DeepfakeAnalysis />}
          {activeTab === 'prediction' && <ThreatPrediction />}
        </motion.div>
      </main>

      {/* Footer Stats Bar */}
      <footer className="relative border-t border-cyan-500/30 bg-[#0a1628]/95 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5">
        <div className="max-w-[2000px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  UPTIME: <span className="text-green-400 ml-1">99.98%</span>
                </span>
              </div>
              <div className="w-px h-4 bg-cyan-500/30" />
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  ACTIVE SCANS: <span className="text-cyan-400 ml-1">847</span>
                </span>
              </div>
              <div className="w-px h-4 bg-cyan-500/30" />
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  THREATS: <span className="text-red-400 ml-1">156</span>
                </span>
              </div>
              <div className="w-px h-4 bg-cyan-500/30" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  BLOCKED: <span className="text-green-400 ml-1">154</span>
                </span>
              </div>
              <div className="w-px h-4 bg-cyan-500/30" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  RESPONSE TIME: <span className="text-yellow-400 ml-1">0.8ms</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
              <Globe className="w-3 h-3" />
              <span>CYBERSHIELD v2.4.1 | LAST UPDATED: 23 MARCH 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface MLStatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

export function MLStatsCard({ title, value, change, trend, icon }: MLStatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      {/* Glassmorphism card */}
      <div className="relative p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(0, 153, 255, 0.05) 100%)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <div className="text-cyan-400">
                {icon}
              </div>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
              trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}>
              {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {change}
            </div>
          </div>
          
          <div>
            <p className="text-3xl font-bold text-white mb-1">{value}</p>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        </div>
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  );
}

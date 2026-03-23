import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function DeepfakeDetector() {
  const [progress, setProgress] = useState(0);
  const targetProgress = 87;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return Math.min(prev + 1, targetProgress);
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-48 h-48">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* SVG Circle */}
        <svg className="w-48 h-48 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="96"
            cy="96"
            r="70"
            stroke="#1a2942"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="96"
            cy="96"
            r="70"
            stroke="#00f0ff"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))',
            }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="text-4xl font-bold text-cyan-400"
          >
            {progress}%
          </motion.div>
          <p className="text-sm text-gray-400 mt-1">Confidence</p>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-cyan-400 mb-2">Deepfake Detection</h3>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <p className="text-sm text-gray-300">Analysis Complete</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">Last scan: 3 minutes ago</p>
      </div>
    </div>
  );
}

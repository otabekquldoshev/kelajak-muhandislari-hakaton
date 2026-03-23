import { motion } from 'motion/react';
import { AlertTriangle, Shield, Activity, Zap } from 'lucide-react';

interface ThreatAlert {
  id: string;
  type: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  time: string;
  source: string;
}

const threats: ThreatAlert[] = [
  { id: '1', type: 'critical', title: 'DDoS Attack Detected', time: '2m ago', source: '192.168.1.45' },
  { id: '2', type: 'high', title: 'Suspicious Login Attempt', time: '5m ago', source: '10.0.0.234' },
  { id: '3', type: 'critical', title: 'Malware Signature Found', time: '8m ago', source: '172.16.0.89' },
  { id: '4', type: 'medium', title: 'Unusual Port Scan', time: '12m ago', source: '192.168.2.101' },
  { id: '5', type: 'high', title: 'SQL Injection Attempt', time: '15m ago', source: '203.0.113.42' },
  { id: '6', type: 'low', title: 'Rate Limit Exceeded', time: '18m ago', source: '198.51.100.7' },
];

export function ThreatAlertSidebar() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      case 'high':
        return <Zap className="w-4 h-4" />;
      case 'medium':
        return <Activity className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-red-500 bg-red-500/10';
      case 'high':
        return 'border-orange-500 bg-orange-500/10';
      case 'medium':
        return 'border-yellow-500 bg-yellow-500/10';
      default:
        return 'border-blue-500 bg-blue-500/10';
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-400';
      case 'high':
        return 'text-orange-400';
      case 'medium':
        return 'text-yellow-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-cyan-400">Threat Alerts</h2>
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-red-500"
        />
      </div>
      <div className="space-y-3 overflow-y-auto pr-2">
        {threats.map((threat, index) => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg border backdrop-blur-sm ${getColor(threat.type)}`}
          >
            <div className="flex items-start gap-2">
              <div className={`mt-0.5 ${getTextColor(threat.type)}`}>
                {getIcon(threat.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/90 truncate">{threat.title}</p>
                <p className="text-xs text-gray-400 mt-1">From: {threat.source}</p>
                <p className="text-xs text-gray-500 mt-0.5">{threat.time}</p>
              </div>
              {(threat.type === 'critical' || threat.type === 'high') && (
                <motion.div
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className={`w-2 h-2 rounded-full ${threat.type === 'critical' ? 'bg-red-500' : 'bg-orange-500'}`}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

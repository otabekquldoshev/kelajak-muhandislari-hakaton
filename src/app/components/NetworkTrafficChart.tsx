import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function NetworkTrafficChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Initialize with sample data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: `${i}s`,
      incoming: Math.random() * 100 + 50,
      outgoing: Math.random() * 80 + 30,
    }));
    setData(initialData);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)];
        newData.push({
          time: `${prevData.length}s`,
          incoming: Math.random() * 100 + 50,
          outgoing: Math.random() * 80 + 30,
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorIncoming" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorOutgoing" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0099ff" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#0099ff" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1a2942" opacity={0.3} />
        <XAxis 
          dataKey="time" 
          stroke="#4a5f7f" 
          tick={{ fill: '#7a8fa5' }}
          axisLine={{ stroke: '#1a2942' }}
        />
        <YAxis 
          stroke="#4a5f7f" 
          tick={{ fill: '#7a8fa5' }}
          axisLine={{ stroke: '#1a2942' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#0a1628', 
            border: '1px solid #00f0ff', 
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
          }}
          labelStyle={{ color: '#00f0ff' }}
          itemStyle={{ color: '#e0e0e0' }}
        />
        <Area 
          type="monotone" 
          dataKey="incoming" 
          stroke="#00f0ff" 
          strokeWidth={2}
          fill="url(#colorIncoming)" 
          name="Incoming"
        />
        <Area 
          type="monotone" 
          dataKey="outgoing" 
          stroke="#0099ff" 
          strokeWidth={2}
          fill="url(#colorOutgoing)" 
          name="Outgoing"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Video, Image, Mic, Eye, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';

const analysisResults = [
  {
    id: 1,
    type: 'video',
    filename: 'press_conference_2024.mp4',
    status: 'authentic',
    confidence: 96.8,
    frameAnalysis: 1247,
    audioSync: 98.2,
    facialAnomalies: 2,
  },
  {
    id: 2,
    type: 'image',
    filename: 'executive_photo.jpg',
    status: 'deepfake',
    confidence: 94.3,
    pixelManipulation: 87,
    metadata: 'Inconsistent',
    artifacts: 15,
  },
  {
    id: 3,
    type: 'audio',
    filename: 'voice_message.mp3',
    status: 'suspicious',
    confidence: 78.5,
    spectralAnalysis: 'Anomalous',
    voicePrint: 'No match',
    duration: '00:45',
  },
];

const detectionFeatures = [
  { name: 'Facial Landmark Detection', accuracy: 98.7, status: 'active' },
  { name: 'Temporal Consistency', accuracy: 96.3, status: 'active' },
  { name: 'Audio-Visual Sync', accuracy: 97.9, status: 'active' },
  { name: 'GAN Artifact Detection', accuracy: 95.1, status: 'active' },
  { name: 'Metadata Analysis', accuracy: 99.2, status: 'active' },
  { name: 'Neural Pattern Recognition', accuracy: 94.8, status: 'training' },
];

export function DeepfakeAnalysis() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (isScanning && scanProgress < 100) {
      const timer = setTimeout(() => {
        setScanProgress((prev) => Math.min(prev + 2, 100));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isScanning, scanProgress]);

  const startScan = () => {
    setScanProgress(0);
    setIsScanning(true);
  };

  return (
    <div className="space-y-6">
      {/* Deepfake Scanner */}
      <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
        <h3 className="text-purple-400 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          AI-Powered Deepfake Scanner
        </h3>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-64 h-64 mb-6">
            {/* Outer scanning ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-500/20"
              animate={{
                rotate: isScanning ? 360 : 0,
                scale: isScanning ? [1, 1.05, 1] : 1,
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity },
              }}
            />
            
            {/* Progress ring */}
            <svg className="absolute inset-0 w-64 h-64 transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="#1a2942"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="128"
                cy="128"
                r="110"
                stroke="#a855f7"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 110}
                strokeDashoffset={2 * Math.PI * 110 * (1 - scanProgress / 100)}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))',
                }}
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Eye className="w-12 h-12 text-purple-400 mb-3" />
              <p className="text-3xl font-bold text-white">{scanProgress}%</p>
              <p className="text-sm text-gray-400 mt-1">
                {isScanning ? 'Scanning...' : 'Ready to Scan'}
              </p>
            </div>
          </div>

          <button
            onClick={startScan}
            disabled={isScanning && scanProgress < 100}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning && scanProgress < 100 ? 'Scanning Media...' : 'Start Deep Scan'}
          </button>
        </div>
      </div>

      {/* Detection Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {detectionFeatures.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {feature.status === 'active' ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-4 h-4 text-orange-400" />
                  </motion.div>
                )}
                <span className="text-xs text-gray-400">{feature.status}</span>
              </div>
              <span className="text-sm font-bold text-cyan-400">{feature.accuracy}%</span>
            </div>
            <p className="text-sm text-white">{feature.name}</p>
            <div className="mt-2 h-1 bg-[#1a2942] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.accuracy}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analysis Results */}
      <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628]/80 to-[#0f1f3a]/60 backdrop-blur-xl">
        <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Recent Analysis Results
        </h3>
        <div className="space-y-4">
          {analysisResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${
                result.status === 'authentic' ? 'border-green-500/30 bg-green-500/5' :
                result.status === 'deepfake' ? 'border-red-500/30 bg-red-500/5' :
                'border-yellow-500/30 bg-yellow-500/5'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {result.type === 'video' && <Video className="w-5 h-5 text-cyan-400" />}
                  {result.type === 'image' && <Image className="w-5 h-5 text-purple-400" />}
                  {result.type === 'audio' && <Mic className="w-5 h-5 text-orange-400" />}
                  <div>
                    <p className="text-white font-medium">{result.filename}</p>
                    <p className="text-xs text-gray-400 mt-1">Type: {result.type.toUpperCase()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block mb-1 ${
                    result.status === 'authentic' ? 'bg-green-500/20 text-green-400' :
                    result.status === 'deepfake' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {result.status.toUpperCase()}
                  </span>
                  <p className="text-xs text-gray-400">Confidence: {result.confidence}%</p>
                </div>
              </div>

              {/* Detailed metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3 pt-3 border-t border-cyan-500/10">
                {result.type === 'video' && (
                  <>
                    <div className="text-xs">
                      <span className="text-gray-400">Frames Analyzed:</span>
                      <span className="text-white ml-2">{result.frameAnalysis}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Audio Sync:</span>
                      <span className="text-cyan-400 ml-2">{result.audioSync}%</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Anomalies:</span>
                      <span className={result.facialAnomalies > 5 ? 'text-red-400' : 'text-green-400'}>
                        {result.facialAnomalies}
                      </span>
                    </div>
                  </>
                )}
                {result.type === 'image' && (
                  <>
                    <div className="text-xs">
                      <span className="text-gray-400">Manipulation:</span>
                      <span className="text-red-400 ml-2">{result.pixelManipulation}%</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Metadata:</span>
                      <span className="text-yellow-400 ml-2">{result.metadata}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Artifacts:</span>
                      <span className="text-orange-400 ml-2">{result.artifacts}</span>
                    </div>
                  </>
                )}
                {result.type === 'audio' && (
                  <>
                    <div className="text-xs">
                      <span className="text-gray-400">Spectral:</span>
                      <span className="text-yellow-400 ml-2">{result.spectralAnalysis}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Voice Print:</span>
                      <span className="text-red-400 ml-2">{result.voicePrint}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white ml-2">{result.duration}</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

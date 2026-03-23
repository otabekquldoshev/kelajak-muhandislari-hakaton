import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
      <input
        type="text"
        placeholder="Search threats, IPs, or events..."
        className="w-full pl-12 pr-4 py-3 bg-[#0a1628]/60 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-xl transition-all"
      />
    </div>
  );
}

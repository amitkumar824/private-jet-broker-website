import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export default function Discover() {
  return (
    <div className="pt-40 px-6 max-w-7xl mx-auto min-h-screen text-center">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-serif mb-8"
      >
        Discover Exclusives
      </motion.h1>
      <p className="text-neutral-400 font-light mb-12">Search our off-market architectural database.</p>
      <div className="max-w-2xl mx-auto flex items-center border border-white/10 p-2 bg-obsidian-light">
        <Search className="w-6 h-6 text-gold ml-4" />
        <input 
          type="text" 
          placeholder="Enter location or style..." 
          className="bg-transparent border-none outline-none w-full p-4 text-white"
        />
      </div>
    </div>
  );
}

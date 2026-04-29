import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Saved() {
  return (
    <div className="pt-40 px-6 max-w-7xl mx-auto min-h-screen text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center"
      >
        <Heart className="w-16 h-16 text-gold/20 mb-8 stroke-[1px]" />
        <h1 className="text-6xl font-serif mb-8">Your Curated Collection</h1>
        <p className="text-neutral-400 font-light">Saved properties will appear here for your review.</p>
      </motion.div>
    </div>
  );
}

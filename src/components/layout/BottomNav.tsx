import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function BottomNav() {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'COLLECTION', path: '/', icon: Home },
    { name: 'DISCOVER', path: '/discover', icon: Search },
    { name: 'SAVED', path: '/saved', icon: Star },
    { name: 'CONCIERGE', path: '/concierge', icon: MessageSquare },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-obsidian/90 backdrop-blur-xl border-t border-gold/10 pb-safe">
      <div className="flex justify-around items-center h-20">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              id={`mobile-nav-${item.name.toLowerCase()}`}
              className={`flex flex-col items-center justify-center w-1/4 h-full gap-1 transition-colors relative ${
                isActive ? 'text-gold' : 'text-neutral-500'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="mobile-nav-active"
                  className="absolute top-0 w-full h-0.5 bg-gold"
                />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'fill-gold/20' : ''}`} />
              <span className="font-sans text-[9px] uppercase tracking-widest font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

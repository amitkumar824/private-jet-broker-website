import { Link, useLocation } from 'react-router-dom';
import { Menu, User, ChevronDown } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercentage(Math.round(scrolled));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'FLEET', path: '/' },
    { name: 'EXPLORE', isDropdown: true, items: [
      { name: 'DESTINATIONS', path: '/discover' },
      { name: 'SAVED', path: '/saved' },
    ]},
    { name: 'SERVICES', isDropdown: true, items: [
      { name: 'CONCIERGE', path: '/concierge' },
      { name: 'SERVICES', path: '/services' },
    ]},
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 md:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 flex items-center px-2 md:px-4 ${
        isScrolled 
          ? 'w-[92%] md:w-[60%] lg:w-[50%] h-16 bg-obsidian/50 backdrop-blur-3xl border border-gold/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
          : 'w-full h-20 bg-transparent border-b border-white/5 rounded-none'
      }`}
    >
      <div className="w-full h-full px-4 md:px-8 flex items-center justify-between relative">
        {/* Left: Menu & Scroll Pct */}
        <div className="flex items-center gap-3">
          <button id="nav-menu-btn" className="p-1.5 text-neutral-400 hover:text-gold transition-colors">
            <Menu className="w-5 h-5 md:w-6 h-6" />
          </button>
          
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            className="hidden md:block font-sans text-[9px] text-gold tracking-widest font-bold"
          >
            {scrollPercentage}%
          </motion.span>
        </div>

        {/* Center: Brand */}
        <Link 
          to="/" 
          id="nav-brand-logo"
          className={`absolute left-1/2 -translate-x-1/2 font-serif tracking-[0.4em] text-gold uppercase font-light transition-all duration-500 ${
            isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
          }`}
        >
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6 ml-8">
          {navItems.map((item) => (
            item.isDropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => {
                    if (item.name === 'EXPLORE') {
                      setExploreDropdownOpen(!exploreDropdownOpen);
                      setServicesDropdownOpen(false);
                    } else if (item.name === 'SERVICES') {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                      setExploreDropdownOpen(false);
                    }
                  }}
                  className={`font-label-caps text-[9px] pb-1 transition-all relative flex items-center gap-1 ${
                    (item.name === 'EXPLORE' && (pathname === '/discover' || pathname === '/saved')) ||
                    (item.name === 'SERVICES' && (pathname === '/concierge' || pathname === '/services'))
                      ? 'text-gold' : 'text-neutral-400 hover:text-gold'
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`w-3 h-3 transition-transform ${
                    (item.name === 'EXPLORE' && exploreDropdownOpen) ||
                    (item.name === 'SERVICES' && servicesDropdownOpen)
                      ? 'rotate-180' : ''
                  }`} />
                  {((item.name === 'EXPLORE' && (pathname === '/discover' || pathname === '/saved')) ||
                    (item.name === 'SERVICES' && (pathname === '/concierge' || pathname === '/services'))) && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                    />
                  )}
                </button>
                <AnimatePresence>
                  {((item.name === 'EXPLORE' && exploreDropdownOpen) ||
                    (item.name === 'SERVICES' && servicesDropdownOpen)) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 bg-obsidian/95 backdrop-blur-xl border border-gold/20 rounded-lg overflow-hidden min-w-[120px]"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            if (item.name === 'EXPLORE') setExploreDropdownOpen(false);
                            if (item.name === 'SERVICES') setServicesDropdownOpen(false);
                          }}
                          className={`block px-4 py-3 text-[9px] transition-all ${
                            pathname === subItem.path ? 'text-gold bg-gold/10' : 'text-neutral-400 hover:text-gold hover:bg-white/5'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                id={`nav-item-${item.name.toLowerCase()}`}
                className={`font-label-caps text-[9px] pb-1 transition-all relative ${
                  pathname === item.path ? 'text-gold' : 'text-neutral-400 hover:text-gold'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                  />
                )}
              </Link>
            )
          ))}
        </div>

        {/* Right: Profile */}
        <div className="flex items-center gap-3">
           <motion.span 
            animate={{ opacity: isScrolled ? 1 : 0 }}
            className="md:hidden font-sans text-[9px] text-gold font-bold"
          >
            {scrollPercentage}%
          </motion.span>
          
          <button id="nav-profile-btn" className="w-8 h-8 md:w-10 h-10 rounded-full border border-gold/20 overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAam6klsfSP8EmPl52tualrPm6BK0zVITIaY618YyxZTLKKjVsrGDpeKNxIm9RjIHsgxj_MmuQCqLQ8ZOxHk9Smqs00DWE4q6VikwT967scLu3wxPuCoWVis7fKQsl9GEZTKGlc3f3oPlbBDtlLRurtRCSb3mS-36wjwUWbfsn6junqm04zxobc9kccnH5wNiVXuorp8zgK9rfDQkkYtpOPHMQrCsrKEczgQRgJ3qc8isKBZ0dbjcehxaEhdN_-M2q34KNcZ-_upZA" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>

        {/* Scroll Progress Bar - Contained within rounded pill */}
        <div className="absolute bottom-1 left-12 right-12 h-[1px] overflow-hidden pointer-events-none">
          <motion.div
            id="nav-scroll-progress"
            className="w-full h-full bg-gold/30 origin-left"
            style={{ scaleX }}
          />
        </div>
      </div>
    </nav>
  );
}

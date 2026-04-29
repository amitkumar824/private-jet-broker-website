import { motion } from 'motion/react';
import { Plane, Search, Fuel, FileText, Globe, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Jet Charter',
      desc: 'On-demand private jet charter to any destination worldwide',
    },
    {
      icon: Plane,
      title: 'Empty Leg Flights',
      desc: 'Exclusive deals on repositioning flights at reduced rates',
    },
    {
      icon: Fuel,
      title: 'Fuel Management',
      desc: 'Comprehensive fuel planning and cost optimization',
    },
    {
      icon: FileText,
      title: 'Flight Planning',
      desc: 'Complete itinerary management and logistics coordination',
    },
    {
      icon: Globe,
      title: 'Global Access',
      desc: '24/7 access to aircraft across six continents',
    },
    {
      icon: Shield,
      title: 'Safety First',
      desc: 'ARG/US platinum-rated operators with highest safety standards',
    },
  ];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif mb-8 text-center"
      >
        Our Services
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 font-light text-lg text-center max-w-3xl mx-auto mb-16"
      >
        Comprehensive private aviation services tailored to your unique travel needs and aspirations.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-obsidian-light/30 border border-white/10 p-8 hover:border-gold/30 transition-all duration-300 group"
          >
            <service.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
            <p className="text-neutral-400 font-light leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 p-12"
      >
        <h2 className="text-3xl font-serif mb-4">Bespoke Aviation</h2>
        <p className="text-neutral-300 font-light max-w-2xl mx-auto">
          Every journey is unique. Contact us to discuss how we can create a customized flight experience 
          tailored specifically to your travel requirements.
        </p>
      </motion.div>
    </div>
  );
}

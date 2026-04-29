import { motion } from 'motion/react';
import { Award, Users, Plane, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif mb-8 text-center"
      >
        About Us
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 font-light text-lg text-center max-w-3xl mx-auto mb-16"
      >
        We are the world's premier private jet charter broker, connecting discerning travelers with exclusive aircraft and bespoke aviation experiences.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          { icon: Award, title: 'Excellence', desc: 'Over 20 years of aviation expertise' },
          { icon: Users, title: 'Clients', desc: '5,000+ satisfied travelers worldwide' },
          { icon: Plane, title: 'Fleet', desc: 'Access to 2,500+ aircraft globally' },
          { icon: Globe, title: 'Global', desc: 'Flights to 200+ countries' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-obsidian-light/30 border border-white/10 p-8 text-center hover:border-gold/30 transition-all duration-300"
          >
            <stat.icon className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-2">{stat.title}</h3>
            <p className="text-neutral-400 text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-obsidian-light/20 border border-white/10 p-12"
      >
        <h2 className="text-3xl font-serif mb-6 text-center">Our Philosophy</h2>
        <p className="text-neutral-300 font-light leading-relaxed text-center max-w-4xl mx-auto">
          We believe that flying is more than transportation—it's about the journey. Our team of aviation experts 
          works tirelessly to curate exceptional flight experiences that embody luxury, safety, and personalized service. 
          Every aircraft in our network has been personally vetted to ensure it meets our exacting standards of excellence 
          and safety. From moment to moment, we ensure your journey is nothing short of extraordinary.
        </p>
      </motion.div>
    </div>
  );
}

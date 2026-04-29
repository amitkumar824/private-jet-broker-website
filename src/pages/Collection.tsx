import { Search, MapPin, Users, Clock, Plane, Filter, Mail, User, Phone, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const jets = [
  {
    id: 'gulfstream-g650',
    name: 'Gulfstream G650ER',
    location: 'Heavy Jet',
    price: '$12,500/hour',
    capacity: 16,
    range: '7,500 nm',
    speed: 'Mach 0.925',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    featured: true,
  },
  {
    id: 'bombardier-global-7500',
    name: 'Bombardier Global 7500',
    location: 'Ultra Long Range',
    price: '$14,000/hour',
    capacity: 19,
    range: '7,700 nm',
    speed: 'Mach 0.925',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    featured: false,
  }
];

export default function Collection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    departure: '',
    arrival: '',
    departureDate: '',
    returnDate: '',
    departureTime: '',
    passengers: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trip request submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="pb-32 pt-0 md:pt-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] w-screen overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: 'linear' }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8yLhy8NaRLUsZeLGrS3IpSzDu1AbvRZZFpJoNuBr7zwtb5usp8xGD7XxkyzYYUliO13EZcUMMf4jr8H_pn-MQRwTl4TaSroiGOpb6lSGUElCnkVr7NRzzNpX0JhIYBMCla-7L70EpkORTQ4qwWVWubf_J6VBHBzuwW9HQ5F72gK9qeqLxwuwkgAYpp3dtfSgYn9SAZocwxhqwRFN5jymmZsfr4lkMNps8SHimCJgJ6svv069EG6BkvtrAbGC0Zp-7PGTEYnCLB5M" 
            alt="Hero Exterior" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif mb-6 leading-tight"
          >
            Elevate Your Journey.<br />Beyond First Class.
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-light tracking-wide"
          >
            Experience unparalleled luxury and privacy with our private jet charter services. Fly on your schedule to any destination worldwide.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-3xl flex flex-col md:flex-row bg-obsidian-light/60 backdrop-blur-2xl border border-white/10 group focus-within:border-gold/50 transition-all duration-500 overflow-hidden"
          >
            <div className="flex-grow flex items-center px-6 py-4">
              <Search className="w-5 h-5 text-gold mr-4" />
              <input 
                type="text" 
                placeholder="Search by destination, jet type, or route..." 
                className="bg-transparent border-none outline-none w-full text-white placeholder-neutral-500"
              />
            </div>
            <button className="bg-transparent border-t md:border-t-0 md:border-l border-white/10 px-10 py-4 font-label-caps text-xs text-gold hover:bg-gold hover:text-obsidian transition-colors">
              Explore
            </button>
          </motion.div>
        </div>
      </section>

      {/* Grid Content */}
      <main className="container mx-auto px-6 mt-12">
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 pb-4 border-b border-white/5">
          <h2 className="text-4xl md:text-5xl font-serif">Our Fleet</h2>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <button className="flex items-center gap-2 text-neutral-400 hover:text-gold transition-colors font-label-caps text-[10px]">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <Link to="/portfolio" className="text-gold border-b border-gold/40 pb-1 font-label-caps text-[10px] hover:text-white hover:border-white transition-all">
              View Complete Portfolio
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {jets.map((jet, idx) => (
            <motion.div
              key={jet.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`${jet.featured ? 'col-span-12 lg:col-span-6' : 'col-span-12 md:col-span-6 lg:col-span-4'} group`}
            >
              <Link to={`/property/${jet.id}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    src={jet.image} 
                    alt={jet.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  {jet.featured && (
                    <div className="absolute top-6 left-6 bg-obsidian-light/80 backdrop-blur-md px-4 py-1.5 border border-gold/30">
                      <span className="text-gold font-label-caps text-[9px]">Exclusive</span>
                    </div>
                  )}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none" />
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif group-hover:text-gold transition-colors">{jet.name}</h3>
                    <p className="flex items-center gap-2 text-neutral-500 mt-1 font-light italic">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {jet.location}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-xl font-light tracking-wide">{jet.price}</p>
                    <div className="flex gap-4 mt-2 text-[10px] text-neutral-500 font-label-caps tracking-[0.1em]">
                      <span>{jet.capacity} PASSENGERS</span>
                      <span>{jet.range} RANGE</span>
                      <span>{jet.speed} SPEED</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Call to action block */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 bg-obsidian-light/60 p-12 md:p-24 border border-white/5 flex flex-col justify-center mt-12"
          >
            <Plane className="w-12 h-12 text-gold mb-8 stroke-[1px]" />
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Beyond Travel.</h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl mb-12">
              We don't just book flights; we curate experiences. Our fleet represents the pinnacle of aviation luxury, offering unparalleled privacy, comfort, and bespoke service for the discerning traveler.
            </p>
            <button className="w-fit px-10 py-5 border border-gold text-gold font-label-caps text-xs hover:bg-gold hover:text-obsidian transition-all">
              Request a Quote
            </button>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 mt-16"
          >
            <div className="bg-obsidian-light/30 border border-white/10 p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif mb-4">Request Your Flight</h2>
                <p className="text-neutral-400 font-light max-w-2xl mx-auto">
                  Begin your journey to extraordinary travel. Our team is ready to arrange your perfect flight experience.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">NAME</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">EMAIL</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">DEPARTURE CITY</label>
                    <div className="relative">
                      <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="text"
                        value={formData.departure}
                        onChange={(e) => setFormData({...formData, departure: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                        placeholder="e.g., New York, JFK"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">ARRIVAL CITY</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="text"
                        value={formData.arrival}
                        onChange={(e) => setFormData({...formData, arrival: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                        placeholder="e.g., London, LHR"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">DEPARTURE DATE</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => setFormData({...formData, departureDate: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">RETURN DATE</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="date"
                        value={formData.returnDate}
                        onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">DEPARTURE TIME</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="time"
                        value={formData.departureTime}
                        onChange={(e) => setFormData({...formData, departureTime: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">PASSENGERS</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={formData.passengers}
                        onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                        className="w-full bg-obsidian/50 border border-white/10 p-4 pl-12 text-white focus:border-gold/50 outline-none transition-colors"
                        placeholder="Number of passengers"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-400 font-label-caps tracking-wider">ADDITIONAL REQUESTS</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-obsidian/50 border border-white/10 p-4 text-white focus:border-gold/50 outline-none transition-colors resize-none"
                    placeholder="Catering, ground transportation, special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-obsidian font-semibold py-4 font-label-caps tracking-wider hover:bg-gold/90 transition-colors"
                >
                  REQUEST FLIGHT
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

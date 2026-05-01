import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, 
  Plane, 
  Gauge, 
  ChevronLeft, 
  ChevronRight, 
  Wifi,
  Wine,
  Armchair,
  Utensils,
  Download,
  Mail,
  Phone
} from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();

  // Jet data based on ID
  const jets: Record<string, typeof defaultJet> = {
    'gulfstream-g650': {
      name: 'Gulfstream G650ER',
      location: 'Heavy Jet',
      price: '$12,500/hour',
      passengers: 16,
      range: '7,500 nm',
      speed: 'Mach 0.925',
      heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
      description1: 'The Gulfstream G650ER represents the pinnacle of ultra-long-range business aviation. With its exceptional range and unmatched cabin comfort, this aircraft connects distant cities non-stop while providing an oasis of tranquility at 51,000 feet.',
      description2: 'Every element of the cabin has been meticulously engineered for comfort— whisper-quiet acoustics, 100% fresh air replenished every two minutes, and panoramic windows flooding the interior with natural light. The G650ER redefines what\'s possible in business aviation.',
      features: [
        { id: 1, title: 'High-Speed Wi-Fi', desc: 'Ka-band connectivity for streaming and video calls.', icon: Wifi },
        { id: 2, title: 'Premium Bar', desc: 'Fully stocked bar with crystal glassware.', icon: Wine },
        { id: 3, title: 'Lie-Flat Seats', desc: '16 handcrafted seats converting to berths.', icon: Armchair },
        { id: 4, title: 'Gourmet Galley', desc: 'Full kitchen with convection and microwave ovens.', icon: Utensils },
      ],
      agent: {
        name: 'Alexander Wright',
        role: 'Senior Aviation Consultant',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2zqcXAEVwjx-vkZF7VpdEeRfKKwazx_NjiLhLbYNBricq3BJT-yLjMpnjFiqk-aDaDQS-P1EAgFwbPBK2qrPKTdP6OSbpiQoiqLjfiyf3DIqFloyPyNdDXdQj84WX67eZt0XNI-2SU0wheeX2mWuWs8_vywNREvNCMLLbaMXjrwiQeKLRD55BMmXRQIlAY-5lbk_lV4GkTlUFBvZLptMYaycKimo9zuskHa70FPkCx8iIMCiodff52Ltis5wK1jMBiQXaPaY2oPQ'
      }
    },
    'bombardier-global-7500': {
      name: 'Bombardier Global 7500',
      location: 'Ultra Long Range',
      price: '$14,000/hour',
      passengers: 19,
      range: '7,700 nm',
      speed: 'Mach 0.925',
      heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description1: 'The Bombardier Global 7500 is the world\'s largest and longest-range business jet, offering four distinct living spaces and a dedicated crew suite. With its revolutionary wings and next-generation engines, this aircraft delivers unprecedented performance.',
      description2: 'The revolutionary Nuage seat introduces the first new seating architecture in business aviation in 30 years. Combined with the smoothest ride technology and the quietest cabin in its class, the Global 7500 ensures you arrive refreshed and ready.',
      features: [
        { id: 1, title: 'High-Speed Wi-Fi', desc: 'Seamless global connectivity.', icon: Wifi },
        { id: 2, title: 'Premium Bar', desc: 'Champagne and spirits selection.', icon: Wine },
        { id: 3, title: 'Lie-Flat Seats', desc: '19 Nuage seats with zero-gravity position.', icon: Armchair },
        { id: 4, title: 'Gourmet Galley', desc: 'Large aft galley for five-star dining.', icon: Utensils },
      ],
      agent: {
        name: 'Victoria Chen',
        role: 'Director of Charter Operations',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
      }
    }
  };

  const defaultJet = {
    name: 'Gulfstream G650ER',
    location: 'Heavy Jet',
    price: '$12,500/hour',
    passengers: 16,
    range: '7,500 nm',
    speed: 'Mach 0.925',
    heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    description1: 'The Gulfstream G650ER represents the pinnacle of ultra-long-range business aviation. With its exceptional range and unmatched cabin comfort, this aircraft connects distant cities non-stop while providing an oasis of tranquility at 51,000 feet.',
    description2: 'Every element of the cabin has been meticulously engineered for comfort— whisper-quiet acoustics, 100% fresh air replenished every two minutes, and panoramic windows flooding the interior with natural light.',
    features: [
      { id: 1, title: 'High-Speed Wi-Fi', desc: 'Ka-band connectivity for streaming and video calls.', icon: Wifi },
      { id: 2, title: 'Premium Bar', desc: 'Fully stocked bar with crystal glassware.', icon: Wine },
      { id: 3, title: 'Lie-Flat Seats', desc: '16 handcrafted seats converting to berths.', icon: Armchair },
      { id: 4, title: 'Gourmet Galley', desc: 'Full kitchen with convection and microwave ovens.', icon: Utensils },
    ],
    agent: {
      name: 'Alexander Wright',
      role: 'Senior Aviation Consultant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2zqcXAEVwjx-vkZF7VpdEeRfKKwazx_NjiLhLbYNBricq3BJT-yLjMpnjFiqk-aDaDQS-P1EAgFwbPBK2qrPKTdP6OSbpiQoiqLjfiyf3DIqFloyPyNdDXdQj84WX67eZt0XNI-2SU0wheeX2mWuWs8_vywNREvNCMLLbaMXjrwiQeKLRD55BMmXRQIlAY-5lbk_lV4GkTlUFBvZLptMYaycKimo9zuskHa70FPkCx8iIMCiodff52Ltis5wK1jMBiQXaPaY2oPQ'
    }
  };

  const jet = id && jets[id] ? jets[id] : defaultJet;

  return (
    <div className="pb-32">
      {/* Hero Gallery */}
      <section className="relative w-full h-[75vh] overflow-hidden group">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={jet.heroImage} 
          alt={jet.name} 
          className="w-full h-full object-cover grayscale-[10%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-12 z-10 max-w-7xl mx-auto left-1/2 -translate-x-1/2">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label-caps text-gold text-xs mb-4"
          >
            {jet.location}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            {jet.name}
          </motion.h1>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <p className="text-4xl font-light text-white">{jet.price}</p>
            <div className="hidden sm:block h-6 w-px bg-white/20" />
            <div className="flex gap-8 text-neutral-400 font-label-caps text-[10px] tracking-widest">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-gold" /> {jet.passengers} PASSENGERS</span>
              <span className="flex items-center gap-2"><Plane className="w-4 h-4 text-gold" /> {jet.range} RANGE</span>
              <span className="flex items-center gap-2"><Gauge className="w-4 h-4 text-gold" /> {jet.speed} SPEED</span>
            </div>
          </div>
        </div>

        {/* Gallery Controls */}
        <div className="absolute bottom-12 right-16 hidden md:flex items-center gap-4 z-20">
          <button className="w-12 h-12 border border-gold/40 flex items-center justify-center text-white hover:bg-gold hover:text-obsidian transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 border border-gold/40 flex items-center justify-center text-white hover:bg-gold hover:text-obsidian transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
          <Link to="/concierge" className="px-6 h-12 border border-gold/40 bg-obsidian/40 backdrop-blur-md flex items-center justify-center font-label-caps text-[10px] text-white cursor-pointer hover:bg-gold hover:text-obsidian transition-colors">
            REQUEST CHARTER
          </Link>
        </div>
      </section>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-24">
          <section>
            <h2 className="text-3xl md:text-4xl font-serif border-b border-white/10 pb-8 mb-10">
              The Pinnacle of Aviation Excellence
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed mb-8">
              {jet.description1}
            </p>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              {jet.description2}
            </p>
          </section>

          {/* Features */}
          <section>
            <h3 className="font-label-caps text-gold text-[10px] mb-10">KEY FEATURES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jet.features.map(feat => {
                const Icon = feat.icon;
                return (
                  <div key={feat.id} className="bg-obsidian-light p-8 border border-white/5 flex flex-col items-start gap-6 hover:border-gold/30 transition-all group">
                    <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-all">
                      <Icon className="w-5 h-5 stroke-[1px]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{feat.title}</h4>
                      <p className="text-sm text-neutral-500 font-light">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Secondary Gallery */}
          <section className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] overflow-hidden border border-white/5">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOehfNk6Ins_fxkJpgMwUNHYulcGNS5dbAt8wVS9SPela2SUO7h-eKjOh8dxUMxoXnpneWMXcyh8S4GcQVO5ApCGTr-U3smSyzeNnUsGXKI3lNSnTTbqI7yiy86Nb9hbYKfeuGuTUl7b5ZTOxljsAf3KsEILIHFBkkPA3ECoRaQWockUwG2BkMRxlx2YVvnoI6N2bPLXJ8MLR7naB_SXG_ygrfxXhmmRfhRU2goFYY1UkESMRiwq61GtXsYO2ZvCCGyztzbFrTmuQ" className="w-full h-full object-cover" alt="Interior Detail" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-white/5">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFVyJAOhSj9BOCy8NKS_V6GnBtkTE709qRDLnQWA4lE3vgITo_13YkLOgM8i-oNO6PRH0kmS5zB1RlAchFX0rVaoFQq8raI6jWo5jYHgz2w6qong-n7Yiq-5gVZSpgtlId4nOPeVQCC2eyZE1OojrYYPTX1iKFA9MaNzJoEYJlNcdsmJGy7yziFdJSRwKjcEA48Ns2ZB_DIf6DXuO1uX0913H1Jl1zKIxOiqVTTp5qZJQS9ypfQbIe8Spg3wcLbxFkTyKRmuZzpXM" className="w-full h-full object-cover" alt="Living Area" referrerPolicy="no-referrer" />
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 relative">
          <div className="sticky top-32 bg-obsidian-light p-8 md:p-12 border border-white/10 flex flex-col gap-10 shadow-2xl">
            <div>
              <p className="font-label-caps text-gold text-[10px] mb-2 uppercase">OFFERED AT</p>
              <p className="text-3xl font-serif text-white">{jet.price}</p>
            </div>

            <Link to="/concierge" className="w-full py-5 px-6 border border-gold text-gold font-label-caps text-[10px] hover:bg-gold hover:text-obsidian transition-all text-center block">
              REQUEST A QUOTE
            </Link>

            <button className="w-full flex items-center justify-center gap-3 text-neutral-400 font-label-caps text-[10px] hover:text-white transition-colors border-b border-transparent hover:border-gold pb-2">
              <Download className="w-4 h-4" />
              DOWNLOAD SPECS
            </button>

            <div className="pt-10 border-t border-white/10">
              <p className="font-label-caps text-gold text-[10px] mb-6">CHARTER CONSULTANT</p>
              <div className="flex items-center gap-6">
                <img 
                  src={jet.agent.image} 
                  alt={jet.agent.name} 
                  className="w-16 h-16 object-cover border border-gold/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-lg font-serif">{jet.agent.name}</h5>
                  <p className="text-xs text-neutral-500 font-light">{jet.agent.role}</p>
                  <Link to="/concierge" className="text-gold text-xs font-light hover:underline mt-2 inline-block">Contact Consultant</Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

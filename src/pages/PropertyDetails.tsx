import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Bed, 
  Bath, 
  Maximize, 
  ChevronLeft, 
  ChevronRight, 
  Waves, 
  Wine, 
  Car, 
  Film, 
  Download,
  Mail,
  Phone
} from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();

  // In a real app, we'd fetch data for this 'id'
  const property = {
    name: 'The Obsidian Residence',
    location: 'Beverly Hills, California',
    price: '$45,000,000',
    beds: 6,
    baths: 8,
    sqft: '12,500',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwZKUKFT21D_cMM8Su_giWtwDzZCSf-o9apqYPBD5ApLdnvgc2e82wucSFf44Wu62KoD4ZxmKx8AvHkfLUT9jWPvpyayhH3UTap2duue2J6yabs80bntWGXiBZIOzEVje9HI_5cGg_AuepcRJR7kyZm46OaPp0aQJIf5lgYmmHOCD4rTVS6vfuOBpR1XuMq58Mx1UGnHTM5xVOY_hMHYi79ynNlNpgbJGhfeZcHLtdThCFdEfWOU0Pb-iCLo7RrteJLGNfVWv535Q',
    description1: 'Nestled in the prestigious hills overlooking the city, The Obsidian Residence is a triumph of contemporary design and uncompromising luxury. Designed by internationally acclaimed architect Marcus Vahn, this estate redefines indoor-outdoor living with sweeping, uninterrupted vistas from every vantage point.',
    description2: 'The material palette is a study in restrained opulence—rare black marble, brushed bronze accents, and hand-troweled plaster walls create a serene, gallery-like atmosphere. Every detail has been meticulously curated to showcase rather than compete with the natural surroundings and the owner\'s art collection.',
    features: [
      { id: 1, title: 'Infinity Edge Pool', desc: 'Heated, zero-edge overlooking the canyon.', icon: Waves },
      { id: 2, title: 'Wine Cellar', desc: 'Climate-controlled, 2,000 bottle capacity.', icon: Wine },
      { id: 3, title: 'Showroom Garage', desc: '6-car subterranean display gallery.', icon: Car },
      { id: 4, title: 'Private Cinema', desc: 'Acoustically tuned, 12-seat tiered theater.', icon: Film },
    ],
    agent: {
      name: 'Alexander Wright',
      role: 'Senior Director, Luxury Estates',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2zqcXAEVwjx-vkZF7VpdEeRfKKwazx_NjiLhLbYNBricq3BJT-yLjMpnjFiqk-aDaDQS-P1EAgFwbPBK2qrPKTdP6OSbpiQoiqLjfiyf3DIqFloyPyNdDXdQj84WX67eZt0XNI-2SU0wheeX2mWuWs8_vywNREvNCMLLbaMXjrwiQeKLRD55BMmXRQIlAY-5lbk_lV4GkTlUFBvZLptMYaycKimo9zuskHa70FPkCx8iIMCiodff52Ltis5wK1jMBiQXaPaY2oPQ'
    }
  };

  return (
    <div className="pb-32">
      {/* Hero Gallery */}
      <section className="relative w-full h-[75vh] overflow-hidden group">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={property.heroImage} 
          alt={property.name} 
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
            {property.location}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            {property.name}
          </motion.h1>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <p className="text-4xl font-light text-white">{property.price}</p>
            <div className="hidden sm:block h-6 w-px bg-white/20" />
            <div className="flex gap-8 text-neutral-400 font-label-caps text-[10px] tracking-widest">
              <span className="flex items-center gap-2"><Bed className="w-4 h-4 text-gold" /> {property.beds} BEDS</span>
              <span className="flex items-center gap-2"><Bath className="w-4 h-4 text-gold" /> {property.baths} BATHS</span>
              <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-gold" /> {property.sqft} SQ FT</span>
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
          <div className="px-6 h-12 border border-gold/40 bg-obsidian/40 backdrop-blur-md flex items-center justify-center font-label-caps text-[10px] text-white cursor-pointer hover:bg-gold/10 transition-colors">
            VIEW GALLERY (24)
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-24">
          <section>
            <h2 className="text-3xl md:text-4xl font-serif border-b border-white/10 pb-8 mb-10">
              A Masterpiece of Modern Architecture
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed mb-8">
              {property.description1}
            </p>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              {property.description2}
            </p>
          </section>

          {/* Features */}
          <section>
            <h3 className="font-label-caps text-gold text-[10px] mb-10">KEY FEATURES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.features.map(feat => {
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
              <p className="text-3xl font-serif text-white">{property.price}</p>
            </div>

            <button className="w-full py-5 px-6 border border-gold text-gold font-label-caps text-[10px] hover:bg-gold hover:text-obsidian transition-all">
              SCHEDULE A PRIVATE TOUR
            </button>

            <button className="w-full flex items-center justify-center gap-3 text-neutral-400 font-label-caps text-[10px] hover:text-white transition-colors border-b border-transparent hover:border-gold pb-2">
              <Download className="w-4 h-4" />
              DOWNLOAD DOSSIER
            </button>

            <div className="pt-10 border-t border-white/10">
              <p className="font-label-caps text-gold text-[10px] mb-6">LISTING AGENT</p>
              <div className="flex items-center gap-6">
                <img 
                  src={property.agent.image} 
                  alt={property.agent.name} 
                  className="w-16 h-16 object-cover border border-gold/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-lg font-serif">{property.agent.name}</h5>
                  <p className="text-xs text-neutral-500 font-light">{property.agent.role}</p>
                  <Link to="/concierge" className="text-gold text-xs font-light hover:underline mt-2 inline-block">Contact Agent</Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

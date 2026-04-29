import { Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Concierge() {
  const agent = {
    name: 'Alexander Sterling',
    role: 'SENIOR PARTNER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOjfRNNBvv_984-64s72_HULd2tf3bnLRbvYqQ9-b_voMaEoi-VAFVCUxRf6gXae6AQ5IohdtLt_Wz0i0_Ea7wbdLKRL-bkueAPH97N5spPgzonaoc7GX0-BRz7-VTByDEYZr8_j8dVTUWr6qXgfySjSPa0fvgL_RGB8oSeqgUvbZ62bA18W2l206Y38TeSxEO0O-GTjifE-pHkOkA_fIEVUZpTVKzJMatniKY7V72HwY_WKB714y-RnP7r0rCRDmEej2oWsaaSp0',
    bio: 'With over two decades of experience curating portfolios for ultra-high-net-worth individuals, Alexander offers unmatched discretion and global market insight.',
    phone: '+1 (212) 555-0198',
    email: 'a.sterling@estate.com'
  };

  return (
    <div className="pt-32 pb-48">
      <div className="max-w-3xl mx-auto text-center px-6 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif mb-8"
        >
          Concierge Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-neutral-400 font-light leading-relaxed"
        >
          Connecting you with our distinguished agents for unparalleled access to the world's most exclusive properties.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Agent Profile Column */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] relative overflow-hidden border border-gold/20 group"
          >
            <img 
              src={agent.image} 
              alt={agent.name} 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-obsidian to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-px bg-gold" />
                <span className="font-label-caps text-[10px] text-gold tracking-[0.3em]">{agent.role}</span>
              </div>
              <h2 className="text-4xl font-serif text-white">{agent.name}</h2>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-obsidian-light p-10 border border-white/5 space-y-8"
          >
            <p className="text-lg text-neutral-400 font-light leading-relaxed italic">
              "{agent.bio}"
            </p>
            <div className="space-y-6">
              <a href={`tel:${agent.phone}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <Phone className="w-4 h-4 text-gold group-hover:text-obsidian" />
                </div>
                <span className="text-lg font-light tracking-wider hover:text-gold transition-colors">{agent.phone}</span>
              </a>
              <a href={`mailto:${agent.email}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <Mail className="w-4 h-4 text-gold group-hover:text-obsidian" />
                </div>
                <span className="text-lg font-light tracking-wider hover:text-gold transition-colors">{agent.email}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bg-obsidian-light/40 p-8 md:p-16 border border-white/10 relative"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold/30" />
          
          <h3 className="text-3xl md:text-4xl font-serif mb-12">Request a Private Consultation</h3>
          
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input type="text" id="firstName" className="peer w-full bg-transparent border-0 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors" placeholder=" " />
                <label htmlFor="firstName" className="absolute left-0 top-4 text-neutral-500 font-light transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  First Name
                </label>
              </div>
              <div className="relative group">
                <input type="text" id="lastName" className="peer w-full bg-transparent border-0 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors" placeholder=" " />
                <label htmlFor="lastName" className="absolute left-0 top-4 text-neutral-500 font-light transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative group">
              <input type="email" id="email" className="peer w-full bg-transparent border-0 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors" placeholder=" " />
              <label htmlFor="email" className="absolute left-0 top-4 text-neutral-500 font-light transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Email Address
              </label>
            </div>

            <div className="relative">
              <select className="w-full bg-transparent border-0 border-b border-white/20 py-4 outline-none focus:border-gold appearance-none cursor-pointer text-white">
                <option value="" className="bg-obsidian">Select Area of Interest</option>
                <option value="acquisition" className="bg-obsidian">Property Acquisition</option>
                <option value="listing" className="bg-obsidian">Private Listing</option>
                <option value="portfolio" className="bg-obsidian">Portfolio Management</option>
              </select>
              <ChevronDown className="absolute right-0 top-5 w-5 h-5 text-neutral-500 pointer-events-none" />
            </div>

            <div className="relative group">
              <textarea id="message" rows={4} className="peer w-full bg-transparent border-0 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors resize-none placeholder-transparent" placeholder=" " />
              <label htmlFor="message" className="absolute left-0 top-4 text-neutral-500 font-light transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Message / Inquiry Details
              </label>
            </div>

            <button type="button" className="group w-full md:w-fit px-12 py-5 border border-gold text-gold font-label-caps text-xs flex items-center justify-center gap-4 hover:bg-gold hover:text-obsidian transition-all">
              SUBMIT INQUIRY
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

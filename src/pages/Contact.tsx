import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Plane } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif mb-8 text-center"
      >
        Contact Us
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 font-light text-lg text-center max-w-3xl mx-auto mb-16"
      >
        Reach out to our aviation experts to begin your journey to extraordinary travel.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="bg-obsidian-light/30 border border-white/10 p-8">
            <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-neutral-400 font-light">
                    9560 Wilshire Boulevard<br />
                    Beverly Hills, CA 90212<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-neutral-400 font-light">+1 (310) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-neutral-400 font-light">concierge@luxuryestate.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-neutral-400 font-light">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-obsidian-light/30 border border-white/10 p-8">
            <h2 className="text-2xl font-serif mb-6">Flight Inquiries</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-neutral-400">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-obsidian/50 border border-white/10 p-3 text-white focus:border-gold/50 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-neutral-400">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-obsidian/50 border border-white/10 p-3 text-white focus:border-gold/50 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-neutral-400">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-obsidian/50 border border-white/10 p-3 text-white focus:border-gold/50 outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gold text-obsidian font-semibold py-3 hover:bg-gold/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="h-full min-h-[500px]"
        >
          <div className="bg-obsidian-light/30 border border-white/10 h-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.064296565064!2d-118.40303608478273!3d34.06884148060467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2s9560%20Wilshire%20Blvd%2C%20Beverly%20Hills%2C%20CA%2090212!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

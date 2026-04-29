import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/10 py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl text-gold mb-4 tracking-widest">AERO</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Exclusive access to the world's finest private jet charter services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label-caps text-gold text-xs mb-4 tracking-widest">EXPLORE</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 text-sm hover:text-gold transition-colors">Fleet</Link></li>
              <li><Link to="/discover" className="text-neutral-400 text-sm hover:text-gold transition-colors">Destinations</Link></li>
              <li><Link to="/saved" className="text-neutral-400 text-sm hover:text-gold transition-colors">Saved</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-label-caps text-gold text-xs mb-4 tracking-widest">SERVICES</h4>
            <ul className="space-y-2">
              <li><Link to="/concierge" className="text-neutral-400 text-sm hover:text-gold transition-colors">Concierge</Link></li>
              <li><Link to="/services" className="text-neutral-400 text-sm hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-neutral-400 text-sm hover:text-gold transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label-caps text-gold text-xs mb-4 tracking-widest">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">9560 Wilshire Blvd<br />Beverly Hills, CA 90212</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-neutral-400 text-sm">+1 (310) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-neutral-400 text-sm">charter@aeroelite.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-400 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-neutral-500 text-xs">
            © 2026 Aero Elite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

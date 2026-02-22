import { Reveal } from './Reveal';
import { Search, ShoppingBag, User, Menu, Instagram, Facebook, Twitter } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="md:hidden">
            <Menu size={24} />
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs tracking-widest uppercase text-gray-900 hover:text-rosegold transition-colors">Shop</a>
            <a href="#" className="text-xs tracking-widest uppercase text-gray-900 hover:text-rosegold transition-colors">Custom</a>
            <a href="#" className="text-xs tracking-widest uppercase text-gray-900 hover:text-rosegold transition-colors">Story</a>
          </nav>
        </div>

        <a href="/" className="font-serif text-2xl tracking-widest uppercase text-gray-900">
          Glitter<span className="text-honey">&</span>Glow
        </a>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block hover:text-rosegold transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:block hover:text-rosegold transition-colors">
            <User size={20} />
          </button>
          <button className="relative hover:text-rosegold transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-honey text-[10px] flex items-center justify-center rounded-full text-gray-900 font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <h3 className="font-serif text-3xl mb-6 tracking-widest uppercase">Glitter<span className="text-honey">&</span>Glow</h3>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Handmade premium snow globe tumblers with custom glitter blends. Bringing magic to your daily routine, one sparkle at a time.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-honey transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-honey transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-honey transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-honey mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-honey mb-8">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Join our community for exclusive drops and magic updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-honey w-full"
              />
              <button className="bg-honey text-gray-900 px-6 py-3 text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-[10px] tracking-widest uppercase text-gray-500">
          <p>© 2024 Glitter & Glow Boutique. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

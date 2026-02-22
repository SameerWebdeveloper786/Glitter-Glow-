import { Reveal } from './Reveal';

export default function ParallaxSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/glitter-parallax/1920/1080" 
          alt="Glitter Swirl" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block">The Best of</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl mb-8">Classic Craftsmanship</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <button className="px-8 py-4 bg-rosegold text-white tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-300">
            Shop Now
          </button>
        </Reveal>
      </div>
    </section>
  );
}

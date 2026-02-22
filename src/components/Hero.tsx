import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafafa]">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://picsum.photos/seed/tumbler-hero/1920/1080?blur=2"
          alt="Premium Snow Globe Tumbler"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-rosegold mb-4 block">
            Handmade Sparkle, Crafted for You
          </span>
          <h1 className="font-serif text-gray-900 leading-tight mb-8">
            Glitter & Glow:<br />
            <span className="italic text-honey">Premium</span> Snow Globe Tumblers
          </h1>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Specializing in handmade snow globe tumblers with custom glitter blends designed to bring a touch of magic to your daily routine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white font-sans tracking-widest uppercase hover:bg-honey hover:text-gray-900 transition-all duration-300">
              Shop Collection
            </button>
            <button className="px-8 py-4 border border-gray-900 text-gray-900 font-sans tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
              Custom Order
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="w-[1px] h-12 bg-gray-300 mx-auto" />
        <span className="text-[10px] tracking-[0.2em] uppercase mt-2 block">Scroll</span>
      </motion.div>
    </section>
  );
}

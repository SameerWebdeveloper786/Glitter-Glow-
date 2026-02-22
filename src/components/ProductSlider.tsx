import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ProductCard from './ProductCard';
import { Reveal } from './Reveal';

const PRODUCTS = [
  { id: 1, name: "Rose Gold Sparkle", price: "£22.00", category: "Best Seller", image: "https://picsum.photos/seed/tg1/600/800" },
  { id: 2, name: "Honey Drip Globe", price: "£18.00", category: "New Arrival", image: "https://picsum.photos/seed/tg2/600/800" },
  { id: 3, name: "Midnight Galaxy", price: "£20.00", category: "Limited Edition", image: "https://picsum.photos/seed/tg3/600/800" },
  { id: 4, name: "Ocean Mist Custom", price: "£22.00", category: "Bespoke", image: "https://picsum.photos/seed/tg4/600/800" },
  { id: 5, name: "Golden Hour", price: "£19.00", category: "Best Seller", image: "https://picsum.photos/seed/tg5/600/800" },
  { id: 6, name: "Lavender Dream", price: "£21.00", category: "New Arrival", image: "https://picsum.photos/seed/tg6/600/800" },
];

export default function ProductSlider() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-honey mb-4 block">The Collection</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl text-gray-900">New Arrivals</h2>
          </Reveal>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-[350px] md:min-w-[450px]">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

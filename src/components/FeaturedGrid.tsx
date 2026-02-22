import { Reveal } from './Reveal';
import ProductCard from './ProductCard';

const FEATURED = [
  { id: 10, name: "Rose Gold Sparkle", price: "£22.00", category: "Best Seller", image: "https://picsum.photos/seed/tg10/600/800" },
  { id: 11, name: "Honey Drip Globe", price: "£18.00", category: "New Arrival", image: "https://picsum.photos/seed/tg11/600/800" },
  { id: 12, name: "Midnight Galaxy", price: "£20.00", category: "Limited Edition", image: "https://picsum.photos/seed/tg12/600/800" },
  { id: 13, name: "Ocean Mist Custom", price: "£22.00", category: "Bespoke", image: "https://picsum.photos/seed/tg13/600/800" },
];

export default function FeaturedGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-honey mb-4 block mx-auto">Handpicked</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl text-gray-900">Best Sellers</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURED.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Reveal delay={0.4}>
            <button className="px-10 py-4 bg-gray-900 text-white tracking-widest uppercase hover:bg-honey hover:text-gray-900 transition-all duration-300">
              View All Products
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

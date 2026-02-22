import { Reveal } from './Reveal';

const CATEGORIES = [
  { name: "Basics", image: "https://picsum.photos/seed/glitter-basic/600/800" },
  { name: "Custom", image: "https://picsum.photos/seed/glitter-custom/600/800" },
  { name: "Glossy", image: "https://picsum.photos/seed/glitter-glossy/600/800" },
  { name: "Premium", image: "https://picsum.photos/seed/glitter-premium/600/800" },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-gray-900 text-xs tracking-widest uppercase font-bold">
                    {cat.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

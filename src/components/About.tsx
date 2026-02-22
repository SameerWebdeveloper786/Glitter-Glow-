import { Reveal } from './Reveal';
import { Heart, Truck, Sparkles } from 'lucide-react';

const FEATURES = [
  { icon: <Heart className="text-rosegold" />, title: "Handmade with Love", desc: "Every tumbler is uniquely crafted by hand." },
  { icon: <Truck className="text-honey" />, title: "Secure UK Delivery", desc: "UK Shipping | 3–5 Days tracked delivery." },
  { icon: <Sparkles className="text-rosegold" />, title: "Easy Custom Orders", desc: "Bespoke custom designs available on request." },
];

export default function About() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img 
                  src="https://picsum.photos/seed/about-glow/800/1000" 
                  alt="Crafting Process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Reveal>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-honey/10 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-honey mb-4 block">Our Story</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl text-gray-900 mb-8 leading-tight">
                Crafting Magic into Your Daily Routine
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-sans text-gray-600 mb-12 leading-relaxed text-lg">
                Specializing in handmade snow globe tumblers with custom glitter blends designed to bring a touch of magic to your daily routine. Each piece is a labor of love, combining premium materials with artistic flair.
              </p>
            </Reveal>

            <div className="grid gap-8">
              {FEATURES.map((feature, i) => (
                <Reveal key={i} delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-gray-900 mb-1">{feature.title}</h4>
                      <p className="font-sans text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-gray-100 py-16 text-center">
          <Reveal delay={0.1}>
            <div>
              <span className="block font-serif text-5xl text-gray-900 mb-2">680+</span>
              <span className="text-xs tracking-widest uppercase text-gray-400">Instagram Followers</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <span className="block font-serif text-5xl text-gray-900 mb-2">100%</span>
              <span className="text-xs tracking-widest uppercase text-gray-400">Handmade Quality</span>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="col-span-2 md:col-span-1">
            <div>
              <span className="block font-serif text-5xl text-gray-900 mb-2">3-5</span>
              <span className="text-xs tracking-widest uppercase text-gray-400">Days UK Delivery</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

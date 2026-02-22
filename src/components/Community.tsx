import { Reveal } from './Reveal';
import { Instagram } from 'lucide-react';

const INSTA_POSTS = [
  "https://picsum.photos/seed/insta1/400/400",
  "https://picsum.photos/seed/insta2/400/400",
  "https://picsum.photos/seed/insta3/400/400",
  "https://picsum.photos/seed/insta4/400/400",
];

export default function Community() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-rosegold mb-4 block mx-auto">Social Proof</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl text-gray-900 mb-6">Join Our Community</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-gray-500 max-w-xl mx-auto">
              Follow our journey on Instagram and see how we bring sparkle to homes across the UK.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTA_POSTS.map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <img 
                  src={img} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-rosegold text-white font-sans text-sm tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 rounded-full">
            <Instagram size={18} />
            @GlitterAndGlow
          </button>
        </div>
      </div>
    </section>
  );
}

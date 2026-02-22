import { Reveal } from './Reveal';

export default function DiscountBanner() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative z-10 max-w-xl">
            <Reveal>
              <h2 className="font-serif text-5xl md:text-6xl mb-6">First time <span className="italic text-honey">here?</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-400 text-lg mb-8">
                We are pleased to offer you a <span className="text-honey font-bold">10% DISCOUNT</span> on your first purchase.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 px-6 py-4 text-sm focus:outline-none focus:border-honey w-full"
                />
                <button className="bg-honey text-gray-900 px-8 py-4 text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors">
                  Submit
                </button>
              </div>
            </Reveal>
          </div>
          
          <div className="relative z-10 w-full md:w-1/3 aspect-square">
            <Reveal delay={0.3}>
              <div className="w-full h-full rounded-full border-2 border-honey/30 p-4 animate-pulse">
                <div className="w-full h-full rounded-full border-2 border-honey/50 p-4">
                  <div className="w-full h-full rounded-full bg-honey/10 flex items-center justify-center text-honey font-serif text-4xl italic">
                    10% OFF
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Background Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-honey/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}

import { Reveal } from './Reveal';

const STEPS = [
  { title: "Design", desc: "We sketch and plan the custom glitter blend for each tumbler.", img: "https://picsum.photos/seed/step1/400/300" },
  { title: "Craft", desc: "Carefully layering glitter and solution for that perfect flow.", img: "https://picsum.photos/seed/step2/400/300" },
  { title: "Seal", desc: "Ensuring a leak-proof finish with premium materials.", img: "https://picsum.photos/seed/step3/400/300" },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-rosegold mb-4 block mx-auto">Our Method</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl text-gray-900">The Handmade Process</h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="aspect-video overflow-hidden rounded-xl mb-6">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-serif text-2xl mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

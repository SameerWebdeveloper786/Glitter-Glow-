import { Reveal } from './Reveal';
import { Heart, Truck, ShieldCheck } from 'lucide-react';

const TRUST = [
  { icon: <Heart className="text-rosegold" />, title: "Handmade with Love", desc: "Every tumbler is uniquely crafted by hand." },
  { icon: <Truck className="text-honey" />, title: "Secure UK Delivery", desc: "UK Shipping | 3–5 Days tracked delivery." },
  { icon: <ShieldCheck className="text-rosegold" />, title: "Secure Checkout", desc: "Safe and encrypted payment processing." },
];

export default function TrustFeatures() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {TRUST.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-[#fafafa] rounded-2xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

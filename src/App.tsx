/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import { Header, Footer } from './components/Layout';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import ProductSlider from './components/ProductSlider';
import ParallaxSection from './components/ParallaxSection';
import FeaturedGrid from './components/FeaturedGrid';
import Community from './components/Community';
import Process from './components/Process';
import DiscountBanner from './components/DiscountBanner';
import TrustFeatures from './components/TrustFeatures';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-honey/30">
      <Preloader />
      <Header />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Categories */}
        <Categories />

        {/* Section 3: About Us (Stats + Story) */}
        <About />
        
        {/* Section 4: New Arrivals (Product Slider) */}
        <ProductSlider />

        {/* Section 5: Parallax Depth / Big Image */}
        <ParallaxSection />

        {/* Section 6: Featured Collection (Grid) */}
        <FeaturedGrid />

        {/* Section 7: Community / Testimonials */}
        <Community />

        {/* Section 8: Blog / Process (Handmade steps) */}
        <Process />

        {/* Section 9: Newsletter / Discount Banner */}
        <DiscountBanner />

        {/* Section 10: Trust Features */}
        <TrustFeatures />
      </main>

      <Footer />
    </div>
  );
}

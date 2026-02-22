import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative w-32 h-48 border-4 border-honey rounded-b-3xl rounded-t-lg overflow-hidden flex items-end">
            {/* Glitter Fill */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${progress}%` }}
              className="w-full bg-honey relative"
            >
              {/* Sparkling dots */}
              <div className="absolute inset-0 opacity-50">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random(),
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Honey Pot Handle/Rim Detail */}
            <div className="absolute top-0 left-0 w-full h-4 bg-honey/20" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <h2 className="font-serif text-2xl text-rosegold tracking-widest uppercase">Glitter & Glow</h2>
            <p className="font-sans text-xs text-gray-400 mt-2 tracking-[0.2em] uppercase">Crafting Magic...</p>
          </motion.div>
          
          <div className="absolute bottom-12 w-48 h-[2px] bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              className="w-full h-full bg-rosegold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

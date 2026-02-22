import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, delay = 0, width = "fit-content" }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

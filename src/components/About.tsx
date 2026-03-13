import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full px-4 md:px-[10px] py-12 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="text-lg md:text-xl font-serif italic opacity-80 leading-relaxed">
            <p className="mb-6">
              Finding Form is an interdisciplinary design studio exploring the evolving language of space, experience, and visual storytelling.
            </p>
            <p className="mb-6">
              We work across architecture, interior design, graphic design, furniture, and more — crafting thoughtful, expressive solutions that blur boundaries and challenge conventions gently, not loudly.
            </p>
          </div>
          <div className="aspect-[4/5] bg-black/5 overflow-hidden">
            <img 
              src="https://i.postimg.cc/CLXw39MP/Whats-App-Image-2025-08-06-at-12-20-19-PM-(2).jpg" 
              alt="About Trubuild"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="w-full px-4 md:px-[10px] py-12 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-16">Get in Touch</h1>
        
        <div className="flex flex-col gap-12 max-w-2xl">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-4">Phone</h3>
            <a href="tel:+918667769108" className="text-xl md:text-2xl font-serif italic hover:opacity-50 transition-opacity">
              +91 86677 69108
            </a>
          </div>
          
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-4">Studio</h3>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
              Finding Form<br />
              XHQV P5R, Vasanth Nagar,<br />
              Bengaluru, Karnataka 560052
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

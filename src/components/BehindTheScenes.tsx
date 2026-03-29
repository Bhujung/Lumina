import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function BehindTheScenes() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section id="gear" ref={containerRef} className="py-32 bg-[#020202] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-6"
        >
          The Arsenal
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 max-w-xl text-lg font-light"
        >
          We use industry-leading cinema cameras, vintage lenses, and advanced stabilization to ensure every frame meets the highest standard of visual excellence.
        </motion.p>
      </div>

      {/* Scrolling Marquees */}
      <div className="space-y-8 relative z-10">
        <motion.div style={{ x: x1 }} className="flex gap-8 w-max px-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={`row1-${i}`} className="w-[400px] h-[250px] relative grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={`https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop&sig=${i}`} 
                alt="Camera Gear" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-8 w-max px-6">
          {[5, 6, 7, 8].map((i) => (
            <div key={`row2-${i}`} className="w-[300px] h-[200px] relative grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={`https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop&sig=${i}`} 
                alt="Camera Lens" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

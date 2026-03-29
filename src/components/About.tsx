import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-clip">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image with Parallax */}
          <div ref={ref} className="relative h-[600px] overflow-hidden rounded-sm">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img 
                src="https://images.unsplash.com/photo-1554046920-90dcac0536d1?q=80&w=2069&auto=format&fit=crop" 
                alt="Director behind the camera" 
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                We don't just record events. <br />
                <span className="italic text-white/60">We craft legacies.</span>
              </h2>
              
              <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
                <p>
                  Founded by visionary director Marcus Chen, Lumina is a boutique creative studio specializing in high-end cinematography and editorial photography.
                </p>
                <p>
                  Our approach is rooted in cinema. We believe every brand, every couple, and every project has a unique narrative waiting to be uncovered. We use light, shadow, and motion to evoke emotion and create timeless visual art.
                </p>
                <p>
                  Based in New York, available worldwide.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-3xl font-serif mb-2">10+</h4>
                  <p className="text-xs uppercase tracking-widest text-white/40">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif mb-2">250+</h4>
                  <p className="text-xs uppercase tracking-widest text-white/40">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

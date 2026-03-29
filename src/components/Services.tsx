import React from 'react';
import { motion } from 'motion/react';
import { Film, Camera, Aperture } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    icon: <Film size={32} />,
    title: 'Cinematic Films',
    description: 'High-end video production for brands, documentaries, and luxury weddings. Shot on RED and ARRI cinema cameras.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: <Camera size={32} />,
    title: 'Editorial Photography',
    description: 'Striking, magazine-quality imagery focused on lighting, composition, and authentic emotion.',
    image: 'https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=2000&auto=format&fit=crop',
  },
  {
    icon: <Aperture size={32} />,
    title: 'Creative Direction',
    description: 'Full-service conceptualization, storyboarding, and art direction to bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Expertise</p>
          <h2 className="text-4xl md:text-6xl font-serif">Our Disciplines</h2>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.title} className={cn("flex flex-col gap-12 items-center", index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row")}>
              
              {/* Image that pops on scroll */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden rounded-sm"
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12"
              >
                <div className="text-white/30 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-5xl font-serif mb-6">{service.title}</h3>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  {service.description}
                </p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

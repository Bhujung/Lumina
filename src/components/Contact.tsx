import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              Let's Create <br />
              <span className="italic text-white/50">Together.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-lg mb-12 max-w-md font-light"
            >
              Available for commercial projects, editorial shoots, and destination weddings worldwide.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <a href="mailto:ruhulmail@gmail.com" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors w-fit">
                <Mail size={24} className="text-white/50" />
                ruhulmail@gmail.com
              </a>
              <div className="flex gap-6 pt-4">
                <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Project Type</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors text-lg appearance-none">
                  <option value="" className="bg-black">Select a category</option>
                  <option value="commercial" className="bg-black">Commercial</option>
                  <option value="wedding" className="bg-black">Wedding</option>
                  <option value="editorial" className="bg-black">Editorial</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button className="w-full py-4 bg-white text-black uppercase tracking-widest text-sm font-medium hover:bg-white/90 transition-colors">
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

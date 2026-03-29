import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Lumina didn't just film our wedding; they captured the very essence of our love story. Watching their film feels like living the day all over again, but somehow even more beautifully.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    quote: "Working with Marcus and his team elevated our brand campaign to a level we didn't think was possible. Their eye for detail and cinematic approach is unmatched in the industry.",
    author: "David Chen",
    role: "Creative Director, Vespera"
  },
  {
    quote: "True artists. They have a unique ability to find the extraordinary in the ordinary. The final deliverables exceeded every expectation we had.",
    author: "Elena Rodriguez",
    role: "Documentary Producer"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] text-white/[0.02] font-serif leading-none pointer-events-none">
        &ldquo;
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Quote className="mx-auto text-white/20 mb-8" size={48} />
                  <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-12 text-balance">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-lg font-medium tracking-wide uppercase">{testimonial.author}</h4>
                    <p className="text-sm text-white/50 mt-2">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={scrollPrev}
            className="p-4 border border-white/10 hover:bg-white hover:text-black transition-colors rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollNext}
            className="p-4 border border-white/10 hover:bg-white hover:text-black transition-colors rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-section-gap-md md:py-section-gap-lg bg-canvas-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-4">Our Legacy</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-on-surface font-bold leading-tight">Leading Excellence for Over a Century</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>Founded in 1858, Jagannath University stands as a beacon of knowledge and cultural heritage. We blend centuries-old academic traditions with cutting-edge research and modern technology.</p>
              <p>Our core values center around Integrity, Innovation, and Inclusivity, ensuring every student finds their path to success in an increasingly complex global landscape.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-primary bg-surface-container-low shadow-sm">
                <p className="text-primary font-bold text-4xl mb-1">165+</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Years of History</p>
              </div>
              <div className="p-6 border-l-4 border-secondary bg-surface-container-low shadow-sm">
                <p className="text-secondary font-bold text-4xl mb-1">50k+</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Global Alumni</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl z-10 relative">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSs08JhAAqhloXC3g0byUxK2or4kZztHJMzFuMfO1BqzAUOQiwF0P_lilMlPluBjwF2X_hThk530VRYDW_ww4LHeF-OdSb1iiZ1qXntJbsxwG5Oxs0xzPIyDLzigeuhHPEx3kPBc7mMS2fXIDTFO9kts23mCCiqB55j54p59_-JIl-QM4vn_aXdBd8SbMKt6a0TTnZBY7vnZf7gBBao6uwzKs9jdK1dpgvCUC6OwFrekkDqBq027Wb2gvgpZm-FF6oLF2NM-JClg" 
                alt="Students collaborating at Jagannath University"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-xl -z-0 hidden md:block border border-primary/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

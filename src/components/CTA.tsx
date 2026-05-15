import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-section-gap-md md:py-section-gap-lg bg-canvas-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-high rounded-3xl p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-sm"
        >
          <div className="relative z-10 w-full md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-6 font-bold leading-tight">Visit Our Campus</h2>
            <p className="text-on-surface-variant text-xl max-w-md leading-relaxed mb-10">
              Experience the vibrant life, historic architecture, and modern facilities firsthand. Schedule your personalized tour today.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-10 py-5 rounded-md font-bold text-lg hover:shadow-lg transition-all"
            >
              Book a Tour
            </motion.button>
          </div>

          <div className="w-full md:w-1/2 h-[350px] rounded-2xl overflow-hidden shadow-2xl relative z-10 group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvdFfqTOYRRKcwFXQqEGOBZ-jJXEQ-7n5rXqmtunRDz1mMNuRs3_I0rxqwWkk6LVJhRVhw6vCfErpchaTi-BBY6MBDXqP8lM37tMBWGrzlmRMZUDGFaP0W7dVzj8vQv97tlk1C1jGXmig5H6YVMiWGTi1PquBE33f7EARe8RLIXx94O3T_njxUIc3O3bo0DYcmcglXT8IEAA7iZn61DFRUaE9c4qZCpPUSPUn0PpdcjkfilRMiTPh6Vf-K-NKRm6YDuJ2Hfq-UiJw" 
              alt="Golden Hour at Campus"
              referrerPolicy="no-referrer"
            />
          </div>

          {}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

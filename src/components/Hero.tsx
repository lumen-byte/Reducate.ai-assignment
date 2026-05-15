import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL61mldG6ES-XW-ayz4C47PDr8hWbXYgIPLIm1wc6gWZmc6BEo6cornNeyjpT_zvKONbAifKYkCHr2lq5duFMJ5gkI6lR5Fvzrvex4MmRFs3f_ZhDajTFfJBXZpmnN1S6BL495swOOqlTlsj4eXPhafqgPG2bKn5g0MQiWz5e78VYer-Myet0rc0yhTZG_W5drt3z_1s4NnJvgjujygYwtiLD1U7QaNLOmXKbISWoiB3hL-sc5jlGsyLbu7hNTF_NfXhiYAHf-yD4" 
          alt="Jagannath University Historic Campus"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-on-primary"
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight font-bold tracking-tight">
            Empowering Minds, <br /> Shaping Futures
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed font-light">
            A heritage of excellence since 1858, cultivating the next generation of global leaders, innovators, and thinkers.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-canvas-white text-primary px-10 py-5 rounded-md font-bold text-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all"
            >
              Apply for 2024
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              className="border-2 border-canvas-white text-on-primary px-10 py-5 rounded-md font-bold text-lg transition-all"
            >
              Explore Campus
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

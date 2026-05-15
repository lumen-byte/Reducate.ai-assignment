import { motion } from "framer-motion";
import { Hammer, Palette, Scale, Briefcase, ArrowRight } from "lucide-react";

export const AcademicPrograms = () => {
  return (
    <section className="py-section-gap-md md:py-section-gap-lg bg-canvas-subtle">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface font-bold">Academic Programs</h2>
          <p className="text-on-surface-variant mt-4 text-lg">Discover your passion across our diverse faculties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[650px]">
          {/* Engineering */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl border border-border-light bg-canvas-white shadow-sm"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHDNI5jere_fWR93lt8YQgRT__wesjz1gUhpmi31ywDdZMCkmtXj4_mSI7mQb9fv8LjPxCv1uTeOgQKfw4t5zaPzeAeFoZZffUtXP4ZKU8VFaa_PHZCoZMGru1Ka-fiucIX1mu5EKYffmU5s2W051qlnPjjWkNytafdz-qMe9AlnLwU-QCkTMrqvGqrsMQpLqBvbHLS5LSXNcbfP_wEo1bcOgew2OdsB-xl5qQOX_vM5ahuYy7UIDubfEL8JOQ5WgGuYf2RU2_VgM" 
              alt="Engineering Lab"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-canvas-white font-serif text-3xl font-bold mb-3">Engineering & Tech</h3>
              <p className="text-canvas-white/90 text-lg mb-6">Innovation at the intersection of science and software.</p>
              <span className="text-secondary-fixed font-bold flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all">
                View Faculty <ArrowRight size={20} />
              </span>
            </div>
          </motion.div>

          {/* Management */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 group relative overflow-hidden rounded-xl border border-border-light bg-canvas-white shadow-sm"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKhAnGlQCUgUpcZZlDauBCM2y6OIUXDw3LeGAf9DOMYciYnIGDs9uey-6BICHTk9kBxeIuVdrOp8iCeuB4DOGI7YVIZxVfjLIr4WORrh_DDcHiDHumeSoJcrl5JJ0uXUuwMt34HiJ4wKQHaWXIJvx1daYQ2fmQgSHE_5OGSv4QquCg7dY8wCpNF3HxNz4kwCafo0skK3m7gvYp4PO5k7r8k0qmxTTDlKhYAXfuga7CgwUJa0xOh-G7e_OMdx-tc3V8-A4ZJ2Z8eWE" 
              alt="Business School"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-canvas-white font-serif text-2xl font-bold mb-2 flex items-center gap-3">
                <Briefcase size={24} className="text-secondary-fixed" /> Management
              </h3>
              <p className="text-canvas-white/80">Shaping future global business leaders.</p>
            </div>
          </motion.div>

          {/* Law */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl border border-border-light bg-canvas-white shadow-sm p-8 flex flex-col border-t-8 border-primary"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Scale size={32} className="text-primary" />
            </div>
            <h3 className="text-on-surface font-serif text-2xl font-bold mb-3">Law</h3>
            <p className="text-on-surface-variant flex-grow">Upholding justice through rigorous legal training and ethics.</p>
            <span className="text-primary font-bold mt-6 flex items-center gap-2 cursor-pointer group-hover:text-primary/70">
              Explore <ArrowRight size={18} />
            </span>
          </motion.div>

          {/* Arts */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl border border-border-light bg-canvas-white shadow-sm p-8 flex flex-col border-t-8 border-secondary"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Palette size={32} className="text-secondary" />
            </div>
            <h3 className="text-on-surface font-serif text-2xl font-bold mb-3">Arts</h3>
            <p className="text-on-surface-variant flex-grow">Fostering creativity and critical humanities thinking in a global era.</p>
            <span className="text-secondary font-bold mt-6 flex items-center gap-2 cursor-pointer group-hover:text-secondary/70">
              Explore <ArrowRight size={18} />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

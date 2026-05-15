import { motion } from "framer-motion";
import { Briefcase, Globe, Microscope } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Briefcase size={32} className="text-primary" />,
      title: "100% Placement",
      description: "Dedicated career cell with partnerships across 500+ global corporations and startups."
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: "Global Faculty",
      description: "Learn from PhD scholars and industry experts from top-tier world universities and labs."
    },
    {
      icon: <Microscope size={32} className="text-primary" />,
      title: "Research Excellence",
      description: "State-of-the-art labs and dedicated funding for breakthrough innovative student projects."
    }
  ];

  return (
    <section className="py-section-gap-md md:py-section-gap-lg bg-canvas-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-10 bg-surface-container-low rounded-xl border border-border-light hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/10">
                {feature.icon}
              </div>
              <h4 className="font-serif text-2xl text-on-surface font-bold mb-4">{feature.title}</h4>
              <p className="text-on-surface-variant text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

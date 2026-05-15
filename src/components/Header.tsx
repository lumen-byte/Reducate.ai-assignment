import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-canvas-white shadow-sm border-b border-border-light h-20">
      <div className="flex items-center justify-between px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-surface-container-low transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
          <h1 className="font-serif text-2xl md:text-3xl text-primary font-bold tracking-tight">
            Jagannath University
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-gutter">
          <nav className="flex gap-8">
            <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">About</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Programs</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Admissions</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Campus</a>
          </nav>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:bg-primary/90 active:scale-95 transition-all shadow-md">
            Apply Now
          </button>
        </div>

        <button className="md:hidden bg-primary text-on-primary px-6 py-2 rounded-md font-bold text-sm shadow-md">
          Apply
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-canvas-white border-b border-border-light md:hidden shadow-xl"
        >
          <nav className="flex flex-col p-6 gap-4">
            <a href="#" className="text-primary font-bold py-2 border-b border-border-light">About</a>
            <a href="#" className="text-on-surface-variant py-2 border-b border-border-light">Programs</a>
            <a href="#" className="text-on-surface-variant py-2 border-b border-border-light">Admissions</a>
            <a href="#" className="text-on-surface-variant py-2">Campus</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

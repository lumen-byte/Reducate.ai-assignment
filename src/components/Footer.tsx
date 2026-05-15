import { Facebook, Twitter, Youtube, MapPin, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-border-light relative w-full pt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-1">
          <h2 className="font-serif text-3xl text-primary font-bold tracking-tight mb-8">Jagannath University</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Leading excellence in education and research since 1858. Shaping the global leaders of tomorrow.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-on-surface mb-8 uppercase tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-4 text-on-surface-variant font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Strategic Plan 2030</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Annual Reports</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Faculty Directory</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Alumni Network</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-on-surface mb-8 uppercase tracking-[0.2em]">Resources</h4>
          <ul className="space-y-4 text-on-surface-variant font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Admissions Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Interactive Map</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Central Library</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Research Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-on-surface mb-8 uppercase tracking-[0.2em]">Contact us</h4>
          <ul className="space-y-6 text-on-surface-variant">
            <li className="flex items-start gap-4">
              <MapPin size={24} className="text-primary shrink-0" />
              <span className="leading-snug font-medium">9-10, Chittaranjan Avenue, Dhaka-1100, Bangladesh</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={24} className="text-primary shrink-0" />
              <span className="font-medium">admissions@jnu.ac.bd</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-light py-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:row justify-between items-center gap-4 text-on-surface-variant text-sm font-medium">
          <p>© 2024 Jagannath University. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

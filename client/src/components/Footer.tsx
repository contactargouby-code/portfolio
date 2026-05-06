import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-black text-xl">A</span>
              </div>
              <span className="text-foreground font-display text-2xl font-bold tracking-tight">
                ARGOUBY<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed mb-8">
              Concevoir l'avenir du web à travers des designs audacieux et une ingénierie d'excellence. 
              Chaque projet est une nouvelle aventure vers la perfection digitale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Projets', 'Compétences', 'À Propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Social</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.linkedin.com/in/ahmed-argouby-41457136a/" className="text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/contactargouby-code" className="text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            <p>© {currentYear} Ahmed Argouby. Tous droits réservés.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            ↑
          </motion.button>
        </div>
      </div>

      {/* Large Decorative Text */}
      <div className="absolute -bottom-20 left-0 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[20vw] font-display font-black leading-none whitespace-nowrap">
          AHMED ARGOUBY
        </h2>
      </div>
    </footer>
  );
}

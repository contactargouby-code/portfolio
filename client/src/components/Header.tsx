import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projets', href: 'projects' },
    { name: 'Compétences', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled ? 'glass shadow-2xl border-white/10' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10 bg-accent rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-accent-foreground font-black text-xl">A</span>
              <div className="absolute inset-0 bg-accent rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-display text-xl font-bold tracking-tight leading-none">
                ARGOUBY<span className="text-accent">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold mt-1">ahmed_argouby.tn</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-foreground text-background rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-semibold shadow-lg active:scale-95"
            >
              Me contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 overflow-hidden"
          >
            <div className="container py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-display font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe size={14} />
                <span className="text-xs uppercase tracking-widest">ahmed_argouby.tn</span>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full max-w-xs py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-lg"
              >
                Me contacter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

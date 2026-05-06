import { motion } from 'framer-motion';
import { ArrowDown, Globe } from 'lucide-react';

/**
 * Hero Section - Ultra Pro Premium
 * Ahmed Argouby - Web Developer
 */
export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side: Text content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <Globe size={16} className="text-accent" />
              <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">ahmed_argouby.tn</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] text-gradient"
            >
              Ahmed Argouby <br /> 
              <span className="italic font-light text-3xl md:text-5xl block mt-4">Full-Stack Developer</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Développeur Full-Stack Junior avec 1 an d'expérience. Je conçois des applications web 
              efficaces et intelligentes en utilisant React, PHP, Python et l'IA.
            </motion.p>


            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Voir mes projets</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              
              <a 
                href="#contact"
                className="group flex items-center gap-2 text-foreground font-semibold hover:text-accent transition-colors py-4"
              >
                Collaborons ensemble
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Right side: AI Avatar - Full Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-[4rem] overflow-hidden border-4 border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
              <img 
                src="/professional_avatar.png" 
                alt="Ahmed Argouby" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Subtle gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}

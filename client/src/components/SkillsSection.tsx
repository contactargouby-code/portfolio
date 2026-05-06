import { motion } from 'framer-motion';
import { Code, Layout, Database, Zap, Globe, Cpu } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

const skills: Skill[] = [
  {
    icon: <Layout size={28} />,
    title: 'Modern Frontend',
    description: 'Création d\'interfaces réactives et élégantes avec React, en mettant l\'accent sur une UX fluide et moderne.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: <Code size={28} />,
    title: 'PHP & Backend',
    description: 'Développement d\'architectures backend robustes avec PHP, utilisant le modèle MVC pour une structure propre.',
    tags: ['PHP 8+', 'MVC Architecture', 'MySQL', 'REST APIs'],
    color: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    icon: <Database size={28} />,
    title: 'Python & Django',
    description: 'Conception d\'applications web performantes et sécurisées avec le framework Django et Python.',
    tags: ['Django', 'Python', 'SQL', 'Authentication'],
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: <Cpu size={28} />,
    title: 'AI & Integration',
    description: 'Intégration de l\'Intelligence Artificielle (Google Gemini) pour créer des applications intelligentes et interactives.',
    tags: ['Google Gemini API', 'Chatbot AI', 'Prompt Engineering'],
    color: 'from-amber-500/20 to-orange-500/20'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 bg-[#080808] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-accent" />
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase">Expertise Technique</span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Maîtrise du Web <br />
              <span className="text-muted-foreground italic font-light">Moderne & Dynamique.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-md"
            >
              Je combine la puissance du PHP avec l'agilité de React pour créer des solutions digitales 
              sur mesure, performantes et scalables.
            </motion.p>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 lg:p-12 rounded-[2rem] glass-card overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 group-hover:text-white transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed group-hover:text-white/80 transition-colors">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="absolute top-8 right-12 text-8xl font-display font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Database, Layout } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Voyage Pro ✈️',
    category: 'Full-Stack PHP MVC',
    description: 'Une solution de gestion de voyages robuste et ultra-moderne alliant PHP MVC et design Glassmorphism.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/contactargouby-code/agence',
    tags: ['PHP', 'MVC', 'Glassmorphism', 'MySQL']
  },
  {
    id: 2,
    title: 'iTeam Smart Library 📚',
    category: 'AI-Powered System',
    description: 'Gestion de bibliothèque intelligente avec Django, Python et intégration de l\'IA Google Gemini.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop',
    link: 'https://github.com/contactargouby-code/Biblioth-que-intelligente',
    tags: ['Django', 'Python', 'Google Gemini AI', 'Chatbot']
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent text-sm font-bold tracking-widest uppercase">Projets Sélectionnés</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Applications Web & <br />
              <span className="text-muted-foreground italic font-light">Sites Dynamiques.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-end"
          >
            <div className="flex gap-4 mb-4">
              <Database className="text-accent/50" />
              <Layout className="text-accent/50" />
            </div>
            <p className="text-muted-foreground max-w-xs text-right italic">
              "Focus sur l'architecture des données et l'expérience utilisateur moderne."
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted mb-8 shadow-2xl border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">{project.category}</p>
                    <p className="text-foreground text-lg mb-8 max-w-xs mx-auto">{project.description}</p>
                    <div className="flex justify-center gap-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] border border-white/20 px-3 py-1 rounded-full text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner button */}
                <div className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>

              <div className="flex items-start justify-between px-2">
                <div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <ArrowRight className="text-white group-hover:text-accent-foreground transition-colors" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a href="https://github.com/contactargouby-code" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg font-bold group">
            <span className="relative">
              Explorer mon GitHub
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <Github size={20} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
import { Github } from 'lucide-react';

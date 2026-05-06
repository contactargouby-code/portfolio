import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message envoyé avec succès !');
    }, 1500);
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-argouby-41457136a/' },
    { icon: <Github size={20} />, name: 'GitHub', href: 'https://github.com/contactargouby-code' },
    { icon: <Twitter size={20} />, name: 'Twitter/X', href: 'https://x.com/argouby16549' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left side: Content & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase">Contact</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Démarrons un Nouveau <br />
                <span className="text-muted-foreground italic font-light">Projet Ensemble.</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
                Disponible pour des projets freelance ou des opportunités de collaboration 
                en tant que développeur web expert.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  { icon: <Mail />, label: 'Email', value: 'contact.argouby@gmail.com' },
                  { icon: <Phone />, label: 'Téléphone', value: '+216 93 572 618' },
                  { icon: <MapPin />, label: 'Localisation', value: 'Tunisie' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/50 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
              <div className="relative glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Nom Complet</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent transition-all"
                        placeholder="Ahmed Argouby"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent transition-all"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent transition-all resize-none"
                      placeholder="Comment puis-je vous aider ?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground font-bold py-5 rounded-2xl hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        Envoyer le Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

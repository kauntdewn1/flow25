import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import { Users, ChevronDown, BarChart, Users2, Heart, Target, MessageSquare, TrendingUp } from 'lucide-react';

const SiteHitech2025 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-8"
          >
            <img src="https://raw.githubusercontent.com/your-repo/logo.png" alt="Logo" className="h-full" />
          </motion.div>
          <nav>
            <ul className="flex gap-8">
              {['Home', 'Sobre', 'Serviços', 'Equipe'].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link 
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    className="text-white/70 hover:text-[#FF1493] transition-all cursor-pointer text-sm font-medium"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#FF1493]/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] opacity-30 mix-blend-overlay"></div>
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block mb-6 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-sm font-medium text-[#FF1493]">Flow Marketing Digital 2025</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF1493]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Marketing Digital Transformador
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-12 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Estratégias inovadoras para impulsionar seu negócio no mundo digital
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link 
              to="servicos"
              smooth={true}
              duration={800}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF1493] to-[#FF1493]/80 rounded-full text-lg font-semibold hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-[#FF1493]/20"
            >
              Conheça Nossos Serviços
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 w-full text-center"
        >
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white/50" />
        </motion.div>
      </motion.section>

      <section id="sobre" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF1493]/10 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF1493]">
              Sobre Nós
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Somos uma agência especializada em marketing digital, focada em resultados e inovação.
              Nossa missão é transformar sua presença digital e impulsionar seu crescimento através
              de estratégias personalizadas e eficientes.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#FF1493]/5 to-black"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF1493]"
          >
            Nossos Serviços
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <BarChart className="w-8 h-8" />, title: "Strategic Marketing Planning", desc: "Planejamento estratégico personalizado" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Flow 360", desc: "Solução completa de marketing digital" },
              { icon: <Users2 className="w-8 h-8" />, title: "Consulting", desc: "Consultoria para equipes internas" },
              { icon: <MessageSquare className="w-8 h-8" />, title: "Community Management", desc: "Gestão de comunidades online" },
              { icon: <Heart className="w-8 h-8" />, title: "Loyalty Strategy", desc: "Estratégias de fidelização" },
              { icon: <Target className="w-8 h-8" />, title: "Paid Traffic", desc: "Gestão de tráfego e campanhas" }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl p-6 border border-white/[0.08] hover:border-[#FF1493]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF1493]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-[#FF1493] mb-4 p-2 bg-white/5 rounded-xl inline-block">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/50">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="equipe" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#FF1493]/5 to-black"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF1493]">
              Nossa Equipe
            </h2>
            <p className="text-white/70">Profissionais especializados em transformação digital</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "specialist1.jpg", name: "João Silva", role: "Estrategista Digital" },
              { img: "specialist2.jpg", name: "Pedro Santos", role: "Growth Specialist" },
              { img: "specialist3.jpg", name: "Maria Oliveira", role: "Marketing Manager" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl p-6 border border-white/[0.08] hover:border-[#FF1493]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF1493]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-b from-[#FF1493] to-[#FF1493]/50 p-1">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#FF1493]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#FF1493]/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/50">
              © 2025 Flow Marketing Digital. Transformando negócios através do digital.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default SiteHitech2025;
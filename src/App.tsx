import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { 
  ChevronDown, 
  Lightbulb,
  Layers,
  MonitorSmartphone,
  MessageCircle,
  Bot,
  BarChart,
  Users,
  Heart,
  Target,
  Globe
} from 'lucide-react';

const SiteHitech2025 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Lightbulb, title: "Assessoria e Consultoria Estratégica", description: " Plano estratégico de marketing personalizado para seu negócio" },
    { icon: Layers, title: "Flow 360 - Estratégia exclusiva", description: "Estratégia integrada FlowOFF que combina múltiplos canais digitais para maximizar alcance e engajamento" },
    { icon: MonitorSmartphone, title: "Sites e Performance", description: "Desenvolvimento de páginas para captação e conversão, com funil de vendas." },
    { icon: MessageCircle, title: "Gestão de Comunidades e Engajamento Digital", description: "Criação, Moderação e crescimento de comunidades. Com automação de interação e gamificação" },
    { icon: Bot, title: "Desenvolvimento de Bots Inteligentes", description: "Implementação personalizada de IA para criar experiências únicas e interações relevantes." },
    { icon: BarChart, title: "Business Intelligence & Insights", description: "Com nossos dashboards personalizados, você acompanha em tempo real todo o desenvolvimento e performance de suas campanhas." }
  ];

  const teamMembers = [
    {
      name: "Netto Mello",
      role: "Fundador e Estrategista",
      desc: "Visionário, especializado em marketing e tecnologia.",
      image: "https://res.cloudinary.com/dgyocpguk/image/upload/v1741844645/team1_k0tdq7.jpg"
    },
    {
      name: "Enrique Lopes",
      role: "Designer e UI/UX",
      desc: "Criação visual e experiência do usuário.",
      image: "https://res.cloudinary.com/dgyocpguk/image/upload/v1741844645/team2_bmbo7k.jpg"
    },
    {
      name: "Bella Cintra",
      role: "Branding e Comunicação",
      desc: "Posicionamento de marca e storytelling.",
      image: "https://res.cloudinary.com/dgyocpguk/image/upload/v1741844645/team3_eks8an.jpg"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80' : 'bg-black'} backdrop-blur-lg border-b border-white/5`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
          </motion.div>
          <nav>
            <ul className="flex gap-4 md:gap-8">
              {['Home', 'Sobre', 'Serviços', 'Equipe', 'Contato'].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link 
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    className="nav-link text-white/70 hover:text-[#ff0477] transition-all cursor-pointer text-xs md:text-sm font-medium"
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
        className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dgyocpguk/image/upload/v1741844967/ASFDF_stdu9a.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            opacity: 1.4
          }}
        ></div>
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 md:px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div 
              className="logo-container relative flex justify-center items-center mx-auto w-[320px] h-[120px] sm:w-[400px] sm:h-[150px] md:w-[700px] md:h-[250px] lg:w-[800px] lg:h-[300px]"
              style={{
                backgroundImage: "url('https://res.cloudinary.com/dgyocpguk/image/upload/v1741878155/FlowOFF_Logo_ivgy0f_yx0jhk.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
          </motion.div>

          <motion.div className="space-y-4 md:space-y-6">
            <motion.h1 
              className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#ff0477]"
            >
              <span className="mb-2 whitespace-nowrap">Estratégias Inteligentes</span>
              <span className="block font-light text-white">para a Nova Era Digital</span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl mb-20 md:mb-40 text-white/90 font-medium"
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Marketing para empresas visionarias
            </motion.p>
          </motion.div>

          <Link
            to="servicos"
            smooth={true}
            duration={800}
            className="inline-block"
          >
            <motion.button
              className="glow-button px-6 md:px-8 py-3 md:py-4 bg-[#ff0477] rounded-full text-white text-sm md:text-base font-semibold hover:bg-[#ff0477]/90 transition-all mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça Nossos Serviços
            </motion.button>
          </Link>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </motion.section>

      <motion.section 
        id="sobre" 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src="https://res.cloudinary.com/dgyocpguk/video/upload/v1741850348/founders_fpodyx.mov" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl text-[#ff0477] font-bold text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            WE.ARE.FLOW
          </motion.h2>
          <motion.div 
            className="text-lg text-white/70 text-center leading-relaxed space-y-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <strong>FlowOFF</strong> é uma agência de <strong>marketing digital</strong> que une estratégias tradicionais com as novas possibilidades da <strong>Web3</strong>. 
            Nosso foco é <em>impulsionar marcas</em> por meio de <strong>tecnologia, dados e criatividade</strong>, criando campanhas eficientes e direcionadas para <em>resultados tangíveis</em>.
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="servicos" 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dgyocpguk/image/upload/v1741844968/BACKGROUND_agv4zx.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Serviços
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card-hover bg-[#0A0F1C]/80 backdrop-blur-sm rounded-xl p-8 border border-[#ff0477]/10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 text-[#ff0477] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="equipe" 
        className="py-20 bg-gradient-to-b from-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="mb-4 bg-transparent relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-64 h-64 mx-auto object-contain bg-transparent"
                    style={{
                      filter: 'drop-shadow(0 4px 12px rgba(255, 4, 119, 0.6))'
                    }}
                  />
                </motion.div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#ff0477] mb-2">{member.role}</p>
                  <p className="text-white/70">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="web3" 
        className="py-20 md:py-32 bg-gradient-to-b to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dgyocpguk/image/upload/v1741844967/BBB_pxyerk.png')" }}
        ></div>

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ff0477] leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            O Futuro é<br className="block sm:hidden" /> Descentralizado!
          </motion.h2>
          
          <motion.div 
            className="text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed space-y-6 md:space-y-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-6 md:mb-8">
              A <span className="font-bold tracking-wider glitch">FlowOFF</span> acompanha a{' '}
              <span className="font-mono backdrop-blur-sm">evolução digital</span>{' '}
              e já está se posicionando na <span className="animate-pulse font-bold tracking-widest">Web3</span>.
            </p>
            <p className="mb-6 md:mb-8">
              Exploramos novas possibilidades de{' '}
              <span className="font-mono border-b-2 border-white/30">descentralização</span>,{' '}
              <span className="font-mono tracking-wide">comunidades</span> e{' '}
              <span className="font-mono font-bold tracking-wider backdrop-blur-sm">tecnologia blockchain</span>.
            </p>
            <p className="text-[#ff0477] font-semibold tracking-wide text-xl md:text-2xl lg:text-3xl">
              Seja parte desta revolução digital
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="contato" 
        className="py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Contato
          </motion.h2>
          <motion.form 
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <input 
                type="text" 
                placeholder="Seu WhatsApp" 
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#ff0477] transition-all"
              />
            </div>
            <motion.button
              type="submit"
              className="glow-button w-full px-6 py-4 bg-[#ff0477] rounded-lg text-white font-semibold hover:bg-[#ff0477]/90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Receber Material Exclusivo
            </motion.button>
          </motion.form>
          <p className="mt-8 text-center text-sm text-white/50">WE.ARE.FLOW - Let it Flow</p>
        </div>
      </motion.section>

      <footer className="py-6 bg-black border-t border-white/10">
        <p className="text-center text-white/50">&copy; FLOWOFF 2025. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default SiteHitech2025;
import { motion } from 'framer-motion';
import React from 'react';

const SiteHitech2025 = () => {
    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-black text-white">
                <div className="text-xl font-bold">FlowOFF</div>
                <nav>
                    <ul className="flex gap-4">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#equipe">Equipe</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
            
            <motion.section id="home" className="hero h-screen flex flex-col justify-center items-center text-white bg-cover bg-center" 
                style={{ backgroundImage: "url('/background.jpg')" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-4xl font-bold">FlowOFF - Estratégias Inteligentes para a Nova Era Digital</h1>
                <p className="mt-4 text-lg">Marketing para Empresas Visionárias</p>
                <motion.a href="#sobre" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg" whileHover={{ scale: 1.1 }}>Saiba Mais</motion.a>
            </motion.section>
            
            <section id="sobre" className="p-8 bg-gray-100">
                <h2 className="text-2xl font-bold">Sobre Nós</h2>
                <p className="mt-4">A <strong>FlowOFF</strong> é uma agência de marketing digital que une estratégias tradicionais da Web2 com as novas possibilidades da Web3. Nosso foco é impulsionar marcas por meio de tecnologia, dados e criatividade, criando campanhas eficientes e direcionadas para resultados tangíveis.</p>
                <p className="mt-4">Desde o início, a FlowOFF nasceu com a missão de conectar empresas às transformações digitais, ajudando-as a navegar pelo marketing de forma estratégica e orientada por dados. Nosso diferencial é a capacidade de alinhar marketing e vendas, garantindo impacto direto nos resultados financeiros dos clientes.</p>
                <p className="mt-4">Com um olhar voltado para o futuro, entendemos que a <strong>Web3</strong> traz novas oportunidades de descentralização e engajamento, mas sabemos que muitas empresas ainda precisam fortalecer suas estratégias atuais. Por isso, priorizamos serviços que <strong>geram receita imediata</strong>, sem perder a visão inovadora do futuro.</p>
            </section>
            
            <section id="servicos" className="p-8 bg-white">
                <h2 className="text-2xl font-bold">Nossos Serviços</h2>
                <div className="grid grid-cols-1 gap-6 mt-4">
                    <div className="p-4 bg-gray-200 rounded-lg">Flow 360: Solução Completa de Marketing Digital</div>
                    <div className="p-4 bg-gray-200 rounded-lg">Tráfego Pago e Performance</div>
                    <div className="p-4 bg-gray-200 rounded-lg">Consultoria para Gestão de Equipes de Marketing In-house</div>
                    <div className="p-4 bg-gray-200 rounded-lg">Gestão de Comunidades e Engajamento Digital</div>
                    <div className="p-4 bg-gray-200 rounded-lg">Desenvolvimento de Bots Inteligentes</div>
                    <div className="p-4 bg-gray-200 rounded-lg">Data Analytics e Inteligência de Mercado</div>
                </div>
            </section>
            
            <section id="equipe" className="p-8 bg-gray-100">
                <h2 className="text-2xl font-bold">Equipe FlowOFF</h2>
                <div className="grid grid-cols-1 gap-6 mt-4">
                    <div className="p-4 bg-gray-200 rounded-lg cursor-pointer" onClick={() => alert('Detalhes sobre Netto Mello')}>Netto Mello - Estrategista, visionário e fundador da FlowOFF.</div>
                    <div className="p-4 bg-gray-200 rounded-lg cursor-pointer" onClick={() => alert('Detalhes sobre Enrique Lopes')}>Enrique Lopes - Designer e arquiteto com especialização em UI/UX.</div>
                    <div className="p-4 bg-gray-200 rounded-lg cursor-pointer" onClick={() => alert('Detalhes sobre Bella Cintra')}>Bella Cintra - Especialista em branding, marketing e comunicação digital.</div>
                </div>
            </section>
            
            <section id="web3" className="p-8 bg-gray-900 text-white text-center">
                <h2 className="text-2xl font-bold">O Futuro é Descentralizado</h2>
                <p className="mt-4 text-lg">A FlowOFF acompanha a evolução digital e já está se posicionando na Web3, explorando novas possibilidades de descentralização, comunidades e tecnologia blockchain.</p>
            </section>
            
            <section id="contato" className="p-8 bg-white">
                <h2 className="text-2xl font-bold">Contato</h2>
                <p className="mt-4">Entre em contato conosco para inovar no digital.</p>
                <form className="mt-4">
                    <input type="text" placeholder="Seu WhatsApp" className="p-2 border rounded w-full" />
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg w-full">Receber Material Exclusivo</button>
                </form>
                <p className="mt-4 text-center"><a href="#" className="text-blue-600">WE.ARE.FLOW - Let it Flow</a></p>
            </section>
            
            <footer className="p-4 bg-black text-white text-center">
                <p>&copy; FLOWOFF 2025/50. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default SiteHitech2025;

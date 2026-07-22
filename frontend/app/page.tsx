export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/90 to-slate-900/95 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1625581652944-2f297562baa5" 
            alt="Professional software developer workspace" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-indigo-500/15 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
              Isac Albuquerque - 11 anos de experiência
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              Transformando conceitos complexos
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-indigo-300 to-white bg-clip-text text-transparent">
              em aplicações de alta performance
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            IA Tecnologia a serviço do seu negócio.
          </p>

          <div>
            <a 
              href="#contato"
              className="inline-flex items-center justify-center font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 group"
            >
              Vamos conversar?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE: DO ACADÊMICO AO MERCADO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900/40">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              Do Acadêmico ao Mercado
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma jornada de 11 anos construindo a base científica para entregar software livre de bugs e altamente escalável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="relative bg-slate-900/60 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center font-bold text-indigo-400">01</div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">2014</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">Fundação Acadêmica</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Início da jornada na engenharia de software com forte base científica e metodológica.</p>
                </div>
              </div>
            </div>

            <div className="relative bg-slate-900/60 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center font-bold text-purple-400">02</div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">2017</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">Primeiros Projetos Comerciais</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Aplicação de padrões de design e arquitetura escalável em projetos reais.</p>
                </div>
              </div>
            </div>

            <div className="relative bg-slate-900/60 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center font-bold text-pink-400">03</div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">2020</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">Especialização em Performance</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Foco em otimização, escalabilidade e entrega de aplicações de alta performance.</p>
                </div>
              </div>
            </div>

            <div className="relative bg-slate-900/60 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center font-bold text-cyan-400">04</div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">2025</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">Excelência Comprovada</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">11 anos de experiência entregando software livre de bugs e altamente escalável.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS ESPECIALIZADOS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas de engenharia de software para transformar sua visão em realidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Desenvolvimento Web Progressivo</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Aplicações web modernas e performáticas utilizando React, Next.js e as melhores práticas de otimização.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">React</span>
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">Next.js</span>
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">TypeScript</span>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Apps Mobile Nativos / Híbridos</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Desenvolvimento de aplicativos mobile multiplataforma com React Native e Flutter de alta performance.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">React Native</span>
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">Flutter</span>
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">iOS/Android</span>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Arquitetura de Sistemas</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Design e implementação de arquiteturas escaláveis, resilientes e orientadas a microserviços.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">Microservices</span>
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">Design Patterns</span>
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300">Cloud</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STACK TECNOLÓGICO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900/40">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ferramentas e tecnologias modernas para construir soluções robustas e escaláveis
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'REST APIs'].map((tech, idx) => (
              <div key={idx} className="px-6 py-3 bg-slate-900 border border-indigo-500/30 rounded-xl text-lg font-semibold text-indigo-200 shadow-lg">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE CONTATO */}
      <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              Fale com a IA Tecnologia
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40"
                  placeholder="Seu nome completo" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40"
                  placeholder="seu@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem para IA Tecnologia</label>
                <textarea 
                  required 
                  rows={6} 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white py-4 text-lg font-medium rounded-xl shadow-2xl shadow-indigo-500/20 transition-all duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-indigo-500/20 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              IA Tecnologia
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              Transformando conceitos complexos em aplicações de alta performance há 11 anos.
            </p>
          </div>
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contato</span>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>contato@isacalbuquerque.com</p>
              <p>+55 (85) 98170-0212</p>
              <p>Ceará, Brasil</p>
            </div>
          </div>
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Redes Sociais</span>
            <div className="flex gap-4 text-gray-400">
              <span>GitHub</span> &bull; <span>LinkedIn</span> &bull; <span>Twitter</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-indigo-500/10 text-center text-xs text-gray-500">
          © 2026 IA Tecnologia. Todos os direitos reservados. Desenvolvido com React, Tailwind CSS e Next.js.
        </div>
      </footer>

    </div>
  );
}
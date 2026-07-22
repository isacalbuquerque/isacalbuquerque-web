import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      
      {/* Cabeçalho / Hero Section */}
      <header className="w-full max-w-5xl mx-auto px-6 pt-16 pb-12 flex flex-col items-start border-b border-gray-900">
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            System Online &bull; v3.0.0 Enterprise
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          Isac Albuquerque
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 font-medium">
          Engenheiro de Software & Cientista de Dados
        </p>
      </header>

      {/* Corpo / Vitrine de Projetos e Especialidades */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="p-6 bg-gray-900/40 border border-gray-800/80 rounded-xl hover:border-blue-500/50 transition-all backdrop-blur-sm">
          <div className="text-blue-400 font-mono text-sm mb-3">01 // CORE</div>
          <h3 className="text-lg font-bold text-white mb-2">Arquitetura de Sistemas</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Desenvolvimento de microsserviços de alta performance, automação síncrona/assíncrona e padrões de projeto limpos focados em escalabilidade.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-gray-900/40 border border-gray-800/80 rounded-xl hover:border-blue-500/50 transition-all backdrop-blur-sm">
          <div className="text-blue-400 font-mono text-sm mb-3">02 // DATA</div>
          <h3 className="text-lg font-bold text-white mb-2">Inteligência Documental</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ecossistemas avançados de processamento em lote, extração estruturada de dados e consolidação corporativa de fluxos de documentos em grande escala.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-gray-900/40 border border-gray-800/80 rounded-xl hover:border-blue-500/50 transition-all backdrop-blur-sm">
          <div className="text-blue-400 font-mono text-sm mb-3">03 // STACK</div>
          <h3 className="text-lg font-bold text-white mb-2">Tecnologia Moderna</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ecossistema robusto pautado em Python, Next.js, TypeScript e ambientes conteinerizados em infraestrutura de nuvem distribuída.
          </p>
        </div>

      </section>

      {/* Seção de Contato Direto / Call to Action */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8">
        <div className="p-8 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-900/40 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Precisa de consultoria ou desenvolvimento especializado?</h4>
            <p className="text-sm text-gray-400">Entre em contacto direto para projetos de alta complexidade técnica.</p>
          </div>
          <a 
            href="mailto:contato@isacalbuquerque.com" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-colors shadow-lg shadow-blue-600/20 whitespace-nowrap"
          >
            Iniciar Contato
          </a>
        </div>
      </section>

      {/* Rodapé Corporativo */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-12 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-mono">
        <p>&copy; 2026 Isac Albuquerque. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0 text-gray-400">Powered by Next.js & Edge Network</p>
      </footer>

    </main>
  );
}
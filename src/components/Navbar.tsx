import React, { useState, useEffect } from 'react';
import { Marca } from './Marca';
import { Shield, Sparkles, UserCheck, Menu, X, ArrowRight, Layers, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (planId?: string) => void;
  onOpenCommunityModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenCommunityModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Conexões', href: '#como-funciona' },
    { label: 'Frameworks', href: '#frameworks' },
    { label: 'IA Local', href: '#ia-local' },
    { label: 'Modo auditor', href: '#modo-auditor' },
  { label: 'Auditoria', href: '#auditores' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Planos', href: '#planos' },
    // Único item que sai da página: o guia de instalação e operação. Fica no
    // trilho principal porque quem decide avaliar o produto precisa achá-lo
    // sem passar pelo modal.
    { label: 'Instalação', href: '/instalacao.html' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3.5'
          : 'bg-black/20 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          {/* A marca de verdade, no lugar do "T" provisório que estava aqui. */}
          <Marca tamanho={44} className="shrink-0 transition-transform group-hover:scale-105" />
          <div className="flex items-center gap-2">
              <span className="marca-nome text-2xl text-white">Hormos</span>
              {/* O selo é decoração da marca, não informação, e custa 81px.
                  Fica enquanto a barra só tem a marca e o botão da gaveta; a
                  partir de md, quando os dois botões entram, ele cede. Quando
                  a barra tem trabalho a fazer, o enfeite sai da frente — o
                  nome e o símbolo já identificam a marca sozinhos. */}
              <span className="inline-block md:hidden text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                GRC Suite
              </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/40 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2 py-1 text-xs font-medium text-slate-400 hover:text-blue-400 rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Lado direito: os botões e a gaveta andam juntos. Soltos, o
            justify-between jogava os botões para o meio da barra na faixa sem
            trilho de links, e eles pareciam perdidos ali. */}
        <div className="flex items-center gap-2 shrink-0">

          {/* CTAs — a partir de md. Abaixo disso eles moram na gaveta: a barra
              não cabe logo + dois botões + o próprio botão da gaveta. */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              id="nav-community-btn"
              onClick={onOpenCommunityModal}
              className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-white/10 rounded-full transition-all flex items-center gap-1.5 backdrop-blur-sm whitespace-nowrap"
            >
              <span>Edição Comunidade</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono">Grátis</span>
            </button>

            <button
              id="nav-demo-btn"
              onClick={() => onOpenDemo()}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-200" />
              {/* Mesma lógica do selo: o verbo cabe enquanto o trilho de links
                  não está lá, e cede em xl. A seta e a pílula azul seguram a
                  leitura de "chamada à ação" sozinhas. */}
              <span className="xl:hidden">Agendar Demonstração</span>
              <span className="hidden xl:inline">Demonstração</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white backdrop-blur-md shrink-0"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Gaveta — até xl, não até lg.

          A barra inteira EXIGIA 1367px e o modo desktop ligava em 1024px. Nos
          343px de diferença os dois botões saíam pela direita da janela, e
          como a página não rola na horizontal eles não ficavam só feios:
          ficavam INALCANÇÁVEIS. Medido, não estimado — ver medir_barra.py. */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#05070A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* De md para cima os dois botões já estão na barra; repeti-los aqui
              seria oferecer a mesma ação duas vezes na mesma tela. */}
          <div className="md:hidden pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommunityModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-slate-200 bg-slate-900/80 border border-white/10 rounded-full"
            >
              Edição Comunidade (Gratuita)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <UserCheck className="w-4 h-4 text-blue-200" />
              <span>Agendar c/ Auditor Especialista</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

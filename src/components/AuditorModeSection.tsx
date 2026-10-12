import React from 'react';
import {
  Building2,
  Database,
  ShieldCheck,
  Gauge,
  Lock,
  AlertTriangle,
  Archive,
  Eye
} from 'lucide-react';

/**
 * Modo auditor — a camada de quem presta o serviço para fora.
 *
 * Vem ANTES da seção de mentoria de propósito: primeiro o software que
 * permite operar uma carteira, depois a oferta de serviço. É a ordem em que o
 * comprador pensa — "dá para eu atender meus clientes aqui?" antes de
 * "vocês me ajudam?".
 *
 * O argumento central não é "multiempresa", que todo mundo diz: é BANCO
 * SEPARADO POR CLIENTE. Quem compra isto guarda dados de empresas que
 * concorrem entre si, e a pergunta que ele faz é como o vazamento é
 * impedido — não se ele é improvável.
 */
export const AuditorModeSection: React.FC = () => {
  const farol = [
    { nome: 'Fintech Alfa', estado: 'bom', nota: 82, cor: 'emerald' },
    { nome: 'Banco Beta', estado: 'atenção', nota: 54, cor: 'amber' },
    { nome: 'SCD Gama', estado: 'crítico', nota: 23, cor: 'rose' },
    { nome: 'Delta Serviços', estado: 'sem dados', nota: null, cor: 'slate' },
  ];

  const tom: Record<string, string> = {
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    amber: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    rose: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    slate: 'border-slate-600/40 bg-slate-600/10 text-slate-400',
  };

  return (
    <section id="modo-auditor" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODO AUDITOR · EDIÇÃO AVANÇADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Uma instalação. Vários clientes. Um banco de dados para cada.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Para firmas de auditoria e consultoria que acompanham dez, vinte clientes.
            Cada empresa tem o <strong className="text-slate-200">seu próprio banco de dados</strong> —
            não um compartimento dentro do mesmo banco. O PostgreSQL recusa a referência
            cruzada entre eles: o isolamento deixa de depender de disciplina de código e
            passa a ser propriedade do servidor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Database className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Banco por empresa</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Criar um cliente leva cerca de um segundo e meio: banco próprio, esquema
              replicado do mesmo DDL que construiu a instalação, e a empresa nasce
              <strong className="text-slate-200"> vazia</strong> — dado de demonstração não
              entra em base de cliente real.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Eye className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Você sempre sabe onde está</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Uma faixa fixa no menu diz em qual cliente você está, e entrar numa empresa
              fica no rastro de auditoria. Editar o cliente errado achando que é outro é o
              pior erro possível aqui — e ele não avisa sozinho.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Archive className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Desativar não apaga</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tirar um cliente da operação preserva o banco. O art. 23 da Res. CMN 4.893
              manda guardar cinco anos, e contrato de auditoria costuma mandar mais.
              Remover é ato de servidor, deliberado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-800 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300 font-mono">
                Carteira — como cada cliente está
              </span>
            </div>
            <div className="divide-y divide-slate-800">
              {farol.map((c) => (
                <div key={c.nome} className="px-5 py-3.5 flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-200 font-medium">{c.nome}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-slate-400 tabular-nums">
                      {c.nota !== null ? c.nota : '—'}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tom[c.cor]}`}>
                      {c.estado}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
              Cliente sem avaliação é <strong className="text-slate-300">&ldquo;sem dados&rdquo;</strong>,
              não &ldquo;crítico&rdquo;: são coisas diferentes, e chamar de crítico seria
              inventar um diagnóstico sobre quem ainda não começou.
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Só o administrador liga.</strong> O modo
                se ativa em Configurações da Empresa, por conta com perfil Administrador —
                ligar um módulo que cria bancos de dados não é ação de qualquer conta.
              </p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">A licença manda em tempo de uso.</strong> Se
                a Edição Avançada expirar, a instalação volta sozinha ao modo de empresa
                única — em vez de seguir num modo que a licença já não cobre.
              </p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Banco fora do ar é &ldquo;indisponível&rdquo;,
                não zero.</strong> Dizer que um cliente está mal quando o que caiu foi o
                banco seria mentir sobre ele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

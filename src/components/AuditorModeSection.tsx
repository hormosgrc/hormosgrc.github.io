import React from 'react';
import {
  Building2,
  Database,
  ShieldCheck,
  Gauge,
  Lock,
  Archive,
  Server,
  Eye,
  FileSignature,
  CalendarClock,
  History,
  Scale
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
            não um compartimento dentro da mesma base. O PostgreSQL recusa a referência
            cruzada entre eles: o isolamento deixa de depender de disciplina de código e
            passa a ser propriedade do servidor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Database className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Uma base de dados por empresa</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Criar um cliente leva cerca de um segundo e meio: base própria, esquema
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
              Tirar um cliente da operação preserva a base dele. O art. 23 da Res. CMN 4.893
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
              Cliente que ainda não começou aparece como
              <strong className="text-slate-300"> &ldquo;sem dados&rdquo;</strong>, nunca como
              &ldquo;crítico&rdquo;. São coisas diferentes, e chamar de crítico quem apenas
              não começou seria inventar um diagnóstico — justamente o tipo de erro que você
              não pode levar para uma reunião com o cliente.
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Só o administrador liga.</strong> O modo
                se ativa em Configurações da Empresa, por conta com perfil Administrador —
                ligar um módulo que cria bases de dados não é ação de qualquer conta.
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
              <Server className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">A infraestrutura é sua.</strong> O Hormos
                roda no servidor da própria firma. Os dados das empresas que você audita
                ficam com você — não numa nuvem de terceiro, não conosco. Para quem guarda
                informação de clientes que concorrem entre si, isso não é preferência: é
                condição.
              </p>
            </div>
          </div>
        </div>

        {/* ── O trabalho em si ──────────────────────────────────────────────
            A carteira acima responde "dá para eu atender meus clientes
            aqui?". Este bloco responde a pergunta seguinte, que é a que fecha
            contrato: "e o documento que eu entrego, sai daqui?". */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest font-mono">
              <FileSignature className="w-3.5 h-3.5" />
              <span>DO CRONOGRAMA AO PARECER · EDIÇÃO ESSENCIAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              O documento que você assina sai do sistema.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Não é um dump de tabelas com a sua logo em cima. É o relatório final de
              auditoria: escopo e limitações declarados, independência verificada,
              achados com amostra e tratamento, situação do ciclo anterior e o parecer —
              que <strong className="text-slate-200">congela no momento da emissão</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Scale className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                O sistema calcula, mas quem opina é você
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Quatro valores: conforme, conforme com ressalvas, não conforme e{' '}
                <strong className="text-slate-200">escopo insuficiente para opinar</strong>.
                O quarto existe porque a ordem das perguntas importa: para dizer{' '}
                <em>não conforme</em> basta uma não conformidade maior em aberto — quem
                encontrou, encontrou. Para dizer <em>conforme</em> é preciso ter examinado
                o bastante, porque essa frase afirma que o resto está em ordem. Abaixo do
                piso de exame, o sistema se recusa a atestar conformidade em vez de
                assinar sobre uma base vazia. O parecer calculado aparece sempre ao lado
                do seu, e a divergência fica visível a quem lê.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <FileSignature className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                Emitido é emitido
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enquanto o trabalho corre, o relatório é prévia e acompanha os dados. Ao
                emitir, o conteúdo é fotografado: o parecer de 2026 continuará dizendo,
                em 2028, exatamente o que dizia no dia da assinatura. Reemitir cria uma
                versão nova e <strong className="text-slate-200">preserva a anterior</strong>,
                com o motivo registrado — quem recebeu uma versão precisa poder
                reencontrá-la como a recebeu.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <CalendarClock className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                Atraso meu e atraso dele não são a mesma coisa
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                O cronograma tem duas naturezas de linha: as suas etapas, com previsto
                contra realizado, e os marcos que você cobra do cliente. O painel da
                carteira mostra a próxima etapa de cada trabalho e de quem ela é. Numa
                reunião de acompanhamento, &ldquo;o trabalho está atrasado&rdquo; não move
                ninguém; <strong className="text-slate-200">&ldquo;está atrasado com você,
                há 23 dias&rdquo;</strong> move.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <History className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                Virada de ciclo, com reincidência de verdade
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Cada trabalho pertence a um exercício e aponta para o anterior. Abrir o
                ano seguinte herda escopo e norma e carrega os apontamentos ainda
                abertos. É esse vínculo que separa o achado que{' '}
                <em>atravessou o ciclo em tratamento</em> do que é{' '}
                <strong className="text-slate-200">reincidente</strong> — encerrado e
                encontrado de novo num exame novo. A distinção não é de vocabulário:
                reincidência agrava a classificação numa certificação.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Imparcialidade medida, não declarada.</strong>{' '}
              A cláusula 9.2.2 c pede que o auditor não audite o próprio trabalho. O Hormos
              conta quantos itens do escopo têm como responsável a mesma pessoa que lidera
              a auditoria, e põe o número no relatório. Um parágrafo de independência não é
              verificável; um número é.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BadgePercent, Landmark, RefreshCw, Wallet, ShieldCheck, 
  UserCheck, Briefcase, Factory, FileCode2, Settings, Zap, Compass 
} from 'lucide-react';

export default function Features() {
  const services = [
    {
      title: 'Antecipação de Recebíveis',
      description: 'Transforme suas faturas, duplicatas, cheques e contratos em dinheiro imediato para o caixa. Tudo 100% online, sem burocracia.',
      icon: BadgePercent,
      tag: 'Mais procurado'
    },
    {
      title: 'Risco Sacado (Confirming)',
      description: 'Aproveite o excelente rating de crédito de seus grandes clientes compradores para conseguir taxas de desconto incrivelmente baixas.',
      icon: Landmark,
      tag: 'Grandes Cadeias'
    },
    {
      title: 'Fomento Mercantil & Factoring',
      description: 'Estruturação financeira de fomento comercial completa para apoiar a compra de matérias-primas e insumos de sua indústria.',
      icon: Wallet,
      tag: 'Corporativo'
    }
  ];

  const targetAudiences = [
    {
      title: 'Indústrias e Fábricas',
      description: 'Financie sua linha de produção adiantando notas de fornecimento e garanta a compra de matéria-prima no melhor momento.',
      icon: Factory
    },
    {
      title: 'Serviços e Tecnologia',
      description: 'Antecipe contratos de prestação de serviços continuados ou parcelas de projetos de tecnologia com rapidez.',
      icon: Briefcase
    },
    {
      title: 'Comércio e Distribuidores',
      description: 'Mantenha os canais de abastecimento rodando e evite a falta de estoque aproveitando os recebíveis de vendas a prazo.',
      icon: UserCheck
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Cadastro Simples',
      description: 'Insira as informações da sua empresa de forma 100% digital e segura. Leva menos de 5 minutos.'
    },
    {
      step: '02',
      title: 'Upload das Notas XML',
      description: 'Sincronize ou suba os arquivos XML das suas NF-es autorizadas diretamente em nossa plataforma.'
    },
    {
      step: '03',
      title: 'Taxa Personalizada',
      description: 'Nosso motor de análise calcula o menor deságio possível de acordo com o sacado e o mercado.'
    },
    {
      step: '04',
      title: 'Pix na Conta',
      description: 'Assine o contrato eletronicamente com seu Certificado Digital e receba os fundos em minutos.'
    }
  ];

  return (
    <div className="space-y-24 py-20 bg-white">
      
      {/* Services Grid (Nossos Serviços) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 Scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-gold uppercase tracking-widest bg-light-gold px-3 py-1 rounded-full border border-accent-gold/20">
            Nossos Serviços Financeiros
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-blue tracking-tight mt-4 mb-3">
            Soluções completas de fomento para a sua empresa
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Oferecemos as ferramentas de antecipação de crédito ideais para cada porte de negócio, sem surpresas na taxa ou amarras bancárias tradicionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div 
              key={svc.title} 
              className="premium-card p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                    <svc.icon className="w-5 h-5 text-accent-gold" />
                  </div>
                  <span className="text-[10px] font-bold text-accent-gold bg-light-gold border border-accent-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-primary-blue mb-3">
                  {svc.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {svc.description}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-primary-blue">
                <span>Simular tarifas</span>
                <span className="group-hover:translate-x-1.5 transition-transform text-accent-gold">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Segments Served (Para quem é) */}
      <section className="bg-slate-50/50 py-24 bg-grid-pattern border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent-gold uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">
              Setores Atendidos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-blue tracking-tight mt-4 mb-3">
              Estrutura de crédito sob medida para cada setor
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600">
              Facilitamos a negociação de recebíveis entre você e seus clientes comerciais in todos os maiores ramos de mercado nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudiences.map((target) => (
              <div 
                key={target.title} 
                className="premium-card p-8 rounded-3xl flex items-start space-x-5"
              >
                <div className="w-12 h-12 rounded-xl bg-light-gold flex items-center justify-center shrink-0 border border-accent-gold/10">
                  <target.icon className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-primary-blue mb-2">
                    {target.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {target.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Step-by-Step (Como Funciona) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 Scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-gold uppercase tracking-widest bg-light-gold px-3 py-1 rounded-full border border-accent-gold/20">
            Processo Ágil & Integrado
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-blue tracking-tight mt-4 mb-3">
            Sua antecipação de faturas em 4 passos simples
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Fomentamos as vendas da sua empresa sem que você precise enfrentar gerentes de bancos ou assinar calhamaços de papel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-1/3 left-1/8 right-1/8 h-0.5 bg-slate-100 -z-10" />

          {processSteps.map((step) => (
            <div key={step.step} className="premium-card p-6 rounded-2xl relative">
              {/* Step number circle */}
              <div className="w-10 h-10 rounded-full bg-primary-blue text-accent-gold font-display font-extrabold text-sm flex items-center justify-center absolute -top-5 left-6 shadow-md">
                {step.step}
              </div>
              <div className="pt-4">
                <h3 className="font-display font-bold text-base text-primary-blue mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Trust Block (Segurança) */}
      <section id="security" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 Scroll-mt-20">
        <div className="bg-gradient-to-r from-primary-blue to-[#082038] rounded-3xl p-8 sm:p-12 md:p-16 text-white relative overflow-hidden shadow-xl shadow-primary-blue/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1 border border-white/5 text-accent-gold text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-accent-gold" />
                <span>Padrão Banco Central de Segurança</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Criptografia de ponta a ponta e total conformidade regulatória
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                O Templus Pay opera sob as mais rígidas diretrizes regulatórias e de proteção de dados. Sincronização direta com a Receita Federal e barreira de segurança certificada para proteger todas as transações corporativas.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3.5 max-w-xs w-full">
                <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider block">Selos de Conformidade</span>
                <div className="flex items-center space-x-2 text-xs text-white/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span>LGPD COMPLIANT</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span>BANCO CENTRAL HOMOLOGADO</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span>CRIPTOGRAFIA SSL 256-BIT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

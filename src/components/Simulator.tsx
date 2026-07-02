/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator, CheckCircle2, Percent, TrendingUp, Sparkles, HelpCircle } from 'lucide-react';

interface SimulatorProps {
  onStartSignUp: (simulatedAmount: number) => void;
}

export default function Simulator({ onStartSignUp }: SimulatorProps) {
  const [amount, setAmount] = useState<number>(150000);
  const [days, setDays] = useState<number>(45);
  
  // Dynamic monthly rate depending on amount (larger amount = better rate)
  const [monthlyRate, setMonthlyRate] = useState<number>(1.85);
  const [discountFee, setDiscountFee] = useState<number>(0);
  const [iofFee, setIofFee] = useState<number>(0);
  const [platformFee, setPlatformFee] = useState<number>(150);
  const [netReceive, setNetReceive] = useState<number>(0);

  useEffect(() => {
    // Calculate dynamic rate based on amount
    let rate = 2.35; // base rate
    if (amount >= 300000) {
      rate = 1.45;
    } else if (amount >= 150000) {
      rate = 1.75;
    } else if (amount >= 50000) {
      rate = 1.95;
    } else if (amount >= 20000) {
      rate = 2.15;
    }
    setMonthlyRate(rate);

    // Platform fee scales with ticket size
    const platform = amount >= 250000 ? 300 : amount >= 100000 ? 190 : 95;
    setPlatformFee(platform);

    // Calculate discount fee (simple pro-rata calculation)
    const dailyRate = (rate / 100) / 30;
    const discount = amount * dailyRate * days;
    setDiscountFee(discount);

    // Calculate Brazilian IOF (approximately 0.38% flat + 0.0041% per day for PJ credit)
    const iofFlat = amount * 0.0038;
    const iofDaily = amount * 0.000041 * days;
    const iof = iofFlat + iofDaily;
    setIofFee(iof);

    // Calculate final value
    const finalNet = amount - discount - iof - platform;
    setNetReceive(finalNet > 0 ? finalNet : 0);
  }, [amount, days]);

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section id="simulator" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-light-gold/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-gold px-3.5 py-1.5 rounded-full mb-4 border border-accent-gold/20">
            <Calculator className="w-4 h-4 text-accent-gold" />
            <span className="font-sans font-semibold text-xs text-deep-gold uppercase tracking-wider">
              Simulador Online em Tempo Real
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-blue tracking-tight mb-4">
            Simule e saiba o valor líquido de sua antecipação na hora
          </h2>
          <p className="font-sans text-base text-slate-600">
            Calculamos com base nas melhores taxas do mercado. Transparência total: você visualiza todos os custos antes de enviar sua proposta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders / Inputs - Grid Span 7 */}
          <div className="lg:col-span-7 premium-card p-6 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-xl text-primary-blue mb-8 flex items-center gap-2">
                <span>Parâmetros de Simulação</span>
                <Sparkles className="w-4 h-4 text-accent-gold" />
              </h3>

              {/* Slider 1: Amount */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-sans font-semibold text-slate-700 text-sm">
                    Valor total das Notas Fiscais (NF-e)
                  </label>
                  <span className="font-mono font-bold text-xl text-primary-blue bg-white px-4 py-1.5 rounded-xl border border-accent-gold/20 shadow-sm">
                    {formatBRL(amount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-blue"
                  id="range-amount"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>R$ 5 mil</span>
                  <span>R$ 250 mil</span>
                  <span>R$ 500 mil</span>
                </div>
              </div>

              {/* Slider 2: Term (Days) */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-sans font-semibold text-slate-700 text-sm">
                    Prazo médio de recebimento (Dias)
                  </label>
                  <span className="font-mono font-bold text-xl text-primary-blue bg-white px-4 py-1.5 rounded-xl border border-accent-gold/20 shadow-sm">
                    {days} {days === 1 ? 'dia' : 'dias'}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="5"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-blue"
                  id="range-days"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>15 dias</span>
                  <span>60 dias</span>
                  <span>120 dias</span>
                </div>
              </div>
            </div>

            {/* Quick selectors for user ease */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center">Atalhos rápidos:</span>
              {[20000, 50000, 150000, 300000].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    amount === val 
                    ? 'bg-primary-blue text-white border-primary-blue' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {formatBRL(val).replace(',00', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary Card - Grid Span 5 */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary-blue to-[#0e3152] text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl shadow-primary-blue/10 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="pb-6 border-b border-white/10">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-1">
                  Valor Estimado a Receber (Líquido)
                </span>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-accent-gold tracking-tight" id="simulated-net-receive">
                  {formatBRL(netReceive)}
                </div>
                <div className="text-[11px] text-white/50 flex items-center gap-1 mt-1">
                  <span>Sujeito a análise de crédito</span>
                  <HelpCircle className="w-3 h-3 cursor-help" title="Cálculo simulado conforme tarifas vigentes e risco PJ." />
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="py-6 space-y-4" id="simulated-breakdown">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <Percent className="w-4 h-4 text-accent-gold/80" />
                    <span>Taxa Aplicada</span>
                  </div>
                  <span className="font-mono font-bold text-sm bg-white/10 px-2.5 py-0.5 rounded-md text-accent-gold">
                    {monthlyRate.toFixed(2)}% a.m.
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/75">Valor Bruto Solicitado</span>
                  <span className="font-mono font-medium text-white/90">{formatBRL(amount)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/75">Deságio Comercial (Juros)</span>
                  <span className="font-mono text-rose-300 font-medium">-{formatBRL(discountFee)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/75 flex items-center gap-1">
                    IOF Federal PJ
                  </span>
                  <span className="font-mono text-rose-300 font-medium">-{formatBRL(iofFee)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/75">Tarifa Operacional</span>
                  <span className="font-mono text-rose-300 font-medium">-{formatBRL(platformFee)}</span>
                </div>
              </div>

              {/* Confidence badges */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dinheiro pago no mesmo dia útil via Pix</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem reciprocidade comercial exigida por bancos</span>
                </div>
              </div>
            </div>

            {/* Action Call */}
            <div className="pt-8 relative z-10">
              <button
                onClick={() => onStartSignUp(amount)}
                className="w-full flex items-center justify-center space-x-3 bg-accent-gold hover:bg-white text-primary-blue hover:text-primary-blue px-6 py-4 rounded-2xl font-display font-bold text-base transition-all duration-200 shadow-md hover:scale-[1.01] cursor-pointer group"
                id="btn-submit-simulation"
              >
                <span>Antecipar Agora</span>
                <ArrowRight className="w-4 h-4 text-primary-blue group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-center mt-3">
                <span className="text-[10px] text-white/40 tracking-wider uppercase font-semibold">
                  Sem burocracia ou taxas de abertura
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

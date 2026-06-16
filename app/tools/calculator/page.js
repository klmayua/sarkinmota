"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [price, setPrice] = useState(50000000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(15);
  const [termMonths, setTermMonths] = useState(36);
  const [isApplied, setIsApplied] = useState(false);

  const downPaymentAmt = (price * downPaymentPct) / 100;
  const loanPrincipal = price - downPaymentAmt;

  // Monthly Loan Amortization Calculation Formula
  // M = P * (J / (1 - (1 + J)^-N))
  // where J is monthly interest rate (interestRate / 12 / 100)
  const monthlyInterest = interestRate / 12 / 100;
  const monthlyPayment = monthlyInterest > 0
    ? (loanPrincipal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -termMonths))
    : loanPrincipal / termMonths;

  const totalCost = monthlyPayment * termMonths + downPaymentAmt;
  const totalInterest = totalCost - price;

  const handleApply = (e) => {
    e.preventDefault();
    setIsApplied(true);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Loan Calculator</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Finance Calculator
      </h1>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-panel border border-white/10 p-8 rounded-md shadow-2xl">
        {/* Left: Input Sliders */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase">
              <span className="text-text-muted">Vehicle Value</span>
              <span className="font-bold text-gold">₦{price.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="10000000"
              max="300000000"
              step="5000000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase">
              <span className="text-text-muted">Down Payment Pct</span>
              <span className="font-bold text-gold">{downPaymentPct}% (₦{downPaymentAmt.toLocaleString()})</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              step="5"
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase">
              <span className="text-text-muted">Annual Interest Rate</span>
              <span className="font-bold text-gold">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase">
              <span className="text-text-muted">Loan Term Duration</span>
              <span className="font-bold text-gold">{termMonths} Months</span>
            </div>
            <input
              type="range"
              min="12"
              max="60"
              step="12"
              value={termMonths}
              onChange={(e) => setTermMonths(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Results Dashboard */}
        <div className="border border-white/5 bg-black/40 rounded-md p-6 flex flex-col justify-between space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs text-text-muted uppercase tracking-wider block">Estimated Monthly Payment</span>
            <span className="text-5xl font-black text-gold font-heading block">
              ₦{Math.round(monthlyPayment).toLocaleString()}
            </span>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-text-muted">Loan Principal</span>
              <span className="font-semibold">₦{loanPrincipal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">Total Interest</span>
              <span className="font-semibold text-gold">₦{Math.round(totalInterest).toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-white/5 pt-3">
              <span className="text-text-muted">Total Loan Cost</span>
              <span className="font-bold">₦{Math.round(totalCost).toLocaleString()}</span>
            </div>
          </div>

          {isApplied ? (
            <div className="bg-gold/10 border border-gold/30 rounded p-4 text-center text-gold text-xs font-bold uppercase tracking-wider">
              ✓ Financing Application Received!
            </div>
          ) : (
            <button
              onClick={handleApply}
              className="w-full py-4 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded hover:bg-gold-glow transition-all"
            >
              Apply for Financing
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function CustomsCalculator() {
  const [valueUsd, setValueUsd] = useState(30000);
  const [year, setYear] = useState(2022);
  const [isElectric, setIsElectric] = useState(true);
  const [port, setPort] = useState("LAGOS_APAPA");
  const [cbnRate] = useState(1550); // NGN per USD
  const [calculated, setCalculated] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    // 1. Age & Depreciation
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    let depRate = 0.50; // max 50%
    if (age === 0) depRate = 0.00;
    else if (age === 1) depRate = 0.10;
    else if (age === 2) depRate = 0.20;
    else if (age === 3) depRate = 0.30;
    else if (age === 4) depRate = 0.40;

    const depreciatedValueUsd = valueUsd * (1 - depRate);

    // 2. CIF
    const shippingUsd = port === "PORT_HARCOURT" ? 2200 : 1500;
    const cifUsd = depreciatedValueUsd + shippingUsd;
    const cifNgn = cifUsd * cbnRate;

    // 3. Taxes
    const surfaceDutyRate = isElectric ? 0.10 : 0.20; // 10% for EV, 20% standard
    const surfaceDuty = cifNgn * surfaceDutyRate;
    const surcharge = surfaceDuty * 0.07; // 7% surcharge
    const etls = cifNgn * 0.005; // 0.5% ECOWAS
    const ciss = valueUsd * cbnRate * 0.01; // 1% CISS on FOB
    const vat = (cifNgn + surfaceDuty + surcharge + etls + ciss) * 0.075; // 7.5% VAT

    const brokerFee = 350000;
    const totalLandingCost = surfaceDuty + surcharge + etls + ciss + vat + brokerFee;

    setCalculated({
      depreciatedValueUsd,
      cifNgn,
      surfaceDuty,
      surcharge,
      etls,
      ciss,
      vat,
      brokerFee,
      totalLandingCost
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Customs Estimator</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Customs Clearing Estimator
      </h1>

      {/* Grid splits */}
      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12">
        {/* Left Form */}
        <form onSubmit={handleCalculate} className="bg-panel border border-white/10 rounded-md p-6 h-fit space-y-4 shadow-xl">
          <div className="space-y-1">
            <label className="text-xs text-text-muted uppercase">FOB Purchase Price (USD)</label>
            <input
              type="number"
              value={valueUsd}
              onChange={(e) => setValueUsd(Number(e.target.value))}
              className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-text-muted uppercase">Model Manufacture Year</label>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none cursor-pointer"
            >
              {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-text-muted uppercase">Port of Arrival</label>
            <select
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none cursor-pointer"
            >
              <option value="LAGOS_APAPA">Lagos Apapa Port</option>
              <option value="LAGOS_TINCAN">Lagos Tin Can Port</option>
              <option value="PORT_HARCOURT">Port Harcourt Onne Port</option>
            </select>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={isElectric}
                onChange={(e) => setIsElectric(e.target.checked)}
                className="accent-gold"
              />
              <span>This is a Pure Electric Vehicle (EV)</span>
            </label>
          </div>

          <div className="text-xs text-text-muted border-t border-white/5 pt-3">
            CBN exchange rate: <span className="text-gold font-bold">₦{cbnRate} / $1 USD</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded hover:bg-gold-glow transition-all"
          >
            Calculate Landing Cost
          </button>
        </form>

        {/* Right Output */}
        <main className="border border-white/5 bg-panel/30 rounded-md p-8 shadow-2xl flex flex-col justify-between">
          {calculated ? (
            <div className="space-y-8">
              <div className="text-center space-y-1">
                <span className="text-xs text-text-muted uppercase tracking-wider block">Estimated Total Landing Cost</span>
                <span className="text-5xl font-black text-gold font-heading block">
                  ₦{Math.round(calculated.totalLandingCost).toLocaleString()}
                </span>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4 text-sm">
                <h3 className="text-xs uppercase tracking-widest text-gold font-bold">Itemized Clearance Details</h3>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">FOB Price Depreciated (USD)</span>
                  <span className="font-semibold text-right">${calculated.depreciatedValueUsd.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">CIF Value (NGN)</span>
                  <span className="font-semibold text-right">₦{Math.round(calculated.cifNgn).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">Surface Import Duty</span>
                  <span className="font-semibold text-right">₦{Math.round(calculated.surfaceDuty).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">Port Development Surcharge (7%)</span>
                  <span className="font-semibold text-right">₦{Math.round(calculated.surcharge).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">ECOWAS ETLS Levy (0.5%)</span>
                  <span className="font-semibold text-right">₦{Math.round(calculated.etls).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">CISS Inspection Fee (1%)</span>
                  <span className="font-semibold text-right">₦{Math.round(calculated.ciss).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-white/5 pb-2">
                  <span className="text-text-muted">Import Value Added Tax (VAT 7.5%)</span>
                  <span className="font-semibold text-right">₦{Math.round(calculated.vat).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 pb-2">
                  <span className="text-text-muted">Port Agent Broker Fee</span>
                  <span className="font-semibold text-right">₦{calculated.brokerFee.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center text-text-muted text-sm space-y-4 py-20">
              <svg viewBox="0 0 24 24" fill="none" className="size-16 stroke-white/20" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="9" x2="15" y2="9" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="13" y2="17" />
              </svg>
              <span>Please fill out and submit the estimator form to compute customs duties.</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

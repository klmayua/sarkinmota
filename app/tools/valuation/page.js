"use client";

import { useState, useEffect } from "react";

const brandModels = {
  "Xiaomi": ["YU7 EV"],
  "Audi": ["R8 V10", "Q8 e-tron", "A8 L"],
  "Mercedes-Benz": ["GLE 63S Coupe", "G63 AMG", "S580"],
  "BMW": ["i7 M70", "M5 Competition", "X7 M60i"],
  "Tesla": ["Cybertruck", "Model X Plaid"],
  "Nissan": ["Patrol Platinum"],
  "Stelato": ["S9 Ultra"]
};

const basePrices = {
  "YU7 EV": 135000000,
  "R8 V10": 260000000,
  "Q8 e-tron": 85000000,
  "A8 L": 95000000,
  "GLE 63S Coupe": 195000000,
  "G63 AMG": 235000000,
  "S580": 115000000,
  "i7 M70": 180000000,
  "M5 Competition": 125000000,
  "X7 M60i": 145000000,
  "Cybertruck": 155000000,
  "Model X Plaid": 120000000,
  "Patrol Platinum": 145000000,
  "S9 Ultra": 110000000
};

export default function ValuationPage() {
  const [brand, setBrand] = useState("Xiaomi");
  const [model, setModel] = useState("YU7 EV");
  const [year, setYear] = useState(2025);
  const [mileage, setMileage] = useState(10000);
  const [condition, setCondition] = useState("GOOD");
  const [valuation, setValuation] = useState(null);

  // Sync model dropdown options when brand changes
  useEffect(() => {
    const models = brandModels[brand];
    if (models && models.length > 0) {
      setModel(models[0]);
    }
  }, [brand]);

  const calculateValuation = (e) => {
    e.preventDefault();
    const basePrice = basePrices[model] || 50000000;
    
    // 1. Age Depreciation (4% per year older than 2026)
    const currentYear = 2026;
    const age = Math.max(0, currentYear - year);
    const ageDepPercent = age * 0.04;
    const ageDepAmount = basePrice * ageDepPercent;

    // 2. Mileage Depreciation (1.5% per 10k km, capped at 30%)
    const mileageDepPercent = Math.min(0.30, (mileage / 10000) * 0.015);
    const mileageDepAmount = basePrice * mileageDepPercent;

    // 3. Condition Adjustment
    const conditionAdjustments = {
      EXCELLENT: 0.05,  // +5%
      GOOD: 0.00,       // 0%
      FAIR: -0.15,      // -15%
      POOR: -0.35       // -35%
    };
    const condPercent = conditionAdjustments[condition];
    const condAdjustmentAmount = basePrice * condPercent;

    // Total computation
    const totalDepreciation = ageDepAmount + mileageDepAmount;
    const finalValue = Math.max(basePrice * 0.20, basePrice - totalDepreciation + condAdjustmentAmount); // Capped at 20% minimum value

    const lowRange = finalValue * 0.95;
    const highRange = finalValue * 1.05;

    setValuation({
      basePrice,
      ageDepreciation: ageDepAmount,
      mileageDepreciation: mileageDepAmount,
      conditionAdjustment: condAdjustmentAmount,
      estimatedValue: finalValue,
      lowRange,
      highRange,
      details: { brand, model, year, mileage, condition }
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/tools" className="hover:text-gold transition-colors">Tools</a> / <span className="text-gold">Market Value Estimator</span>
      </nav>

      {/* Header */}
      <div className="border-b border-white/10 pb-6 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Market Value Estimator</h1>
        <p className="text-sm text-text-muted mt-2">Get an instant, data-driven market price appraisal and trade-in valuation for your luxury vehicle.</p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Form panel */}
        <aside className="bg-panel border border-white/10 rounded-md p-6 h-fit shadow-xl">
          <form onSubmit={calculateValuation} className="space-y-4 text-xs">
            {/* Brand */}
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Vehicle Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none cursor-pointer"
              >
                {Object.keys(brandModels).map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Model Variant</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none cursor-pointer"
              >
                {brandModels[brand]?.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Manufacture Year</label>
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none cursor-pointer"
              >
                {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* Mileage */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Mileage (KM)</label>
                <span className="text-xs text-gold font-bold">{mileage.toLocaleString()} KM</span>
              </div>
              <input
                type="range"
                min={0}
                max={150000}
                step={5000}
                value={mileage}
                onChange={(e) => setMileage(Number(e.target.value))}
                className="w-full h-1.5 bg-black rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Condition */}
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Overall Condition</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: "EXCELLENT", label: "Excellent (+5%)" },
                  { key: "GOOD", label: "Good (0%)" },
                  { key: "FAIR", label: "Fair (-15%)" },
                  { key: "POOR", label: "Poor (-35%)" }
                ].map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setCondition(c.key)}
                    className={`py-2 px-3 rounded text-[10px] uppercase font-bold border transition-all ${
                      condition === c.key
                        ? "bg-gold text-black border-gold"
                        : "bg-black text-white border-white/10 hover:border-gold/30"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gold text-black font-bold uppercase tracking-widest rounded hover:bg-gold-glow transition-all mt-4"
            >
              Get Appraisal Value
            </button>
          </form>
        </aside>

        {/* Results Panel */}
        <div className="space-y-6">
          {valuation ? (
            <div className="bg-panel border border-gold/30 rounded-md p-8 shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs text-text-muted uppercase font-bold tracking-widest">Estimated Retail Range</span>
                <div className="text-2xl md:text-3xl font-black text-gold tracking-tight font-heading">
                  ₦{valuation.lowRange.toLocaleString(undefined, { maximumFractionDigits: 0 })} - ₦{valuation.highRange.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-xs text-text-muted">Estimated resale benchmark value based on Abuja luxury marketplace trends.</p>
              </div>

              {/* Breakdown List */}
              <div className="bg-black/40 border border-white/5 rounded-md p-6 space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-muted uppercase">Base Model Valuation</span>
                  <span className="font-bold text-white">₦{valuation.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-muted uppercase">Age Depreciation</span>
                  <span className="font-bold text-rose-400">- ₦{valuation.ageDepreciation.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-muted uppercase">Mileage Depreciation</span>
                  <span className="font-bold text-rose-400">- ₦{valuation.mileageDepreciation.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-muted uppercase">Condition Adjustment</span>
                  <span className={`font-bold ${valuation.conditionAdjustment >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {valuation.conditionAdjustment >= 0 ? "+" : "-"} ₦{Math.abs(valuation.conditionAdjustment).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between pt-2 text-sm">
                  <span className="text-text-muted uppercase font-bold">Estimated Net Value</span>
                  <span className="font-bold text-gold font-mono">₦{valuation.estimatedValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex gap-4 justify-center">
                <button
                  onClick={() => alert("Redirecting to swap requests page...")}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider"
                >
                  Apply for Swap/Trade-in
                </button>
                <button
                  onClick={() => alert("Valuation certificate saved (Simulated print).")}
                  className="px-6 py-2.5 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider"
                >
                  Print Certificate
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] border border-dashed border-white/10 rounded flex flex-col justify-center items-center text-center p-8">
              <span className="text-4xl mb-4">📈</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">No Valuation Performed</h3>
              <p className="text-xs text-text-muted max-w-xs mt-2">Select your vehicle options on the left and click Appraisal to generate pricing benchmarks.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

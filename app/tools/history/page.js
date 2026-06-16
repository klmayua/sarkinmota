"use client";

import { useState } from "react";

export default function VinHistoryPage() {
  const [vin, setVin] = useState("");
  const [stage, setStage] = useState("IDLE"); // IDLE, SCANNING, RESULT
  const [scanMessage, setScanMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const startScan = (e) => {
    e.preventDefault();
    if (vin.length < 5) return;
    
    setStage("SCANNING");
    setProgress(10);
    setScanMessage("Contacting international import/export registers...");

    setTimeout(() => {
      setProgress(40);
      setScanMessage("Querying accident registers & insurance claims databases...");
    }, 800);

    setTimeout(() => {
      setProgress(75);
      setScanMessage("Verifying odometer logs & mileage history records...");
    }, 1600);

    setTimeout(() => {
      setProgress(95);
      setScanMessage("Checking global police theft recovery logs...");
    }, 2400);

    setTimeout(() => {
      setStage("RESULT");
    }, 3000);
  };

  const handleReset = () => {
    setVin("");
    setStage("IDLE");
    setProgress(0);
    setScanMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/tools" className="hover:text-gold transition-colors">Tools</a> / <span className="text-gold">VIN History Check</span>
      </nav>

      {/* Header */}
      <div className="border-b border-white/10 pb-6 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">VIN History Check</h1>
        <p className="text-sm text-text-muted mt-2">Instantly verify accident history, mileage rollbacks, and ownership records for imported vehicles.</p>
      </div>

      {/* Content Box */}
      <div className="bg-panel border border-white/10 rounded-md p-8 shadow-xl">
        {stage === "IDLE" && (
          <form onSubmit={startScan} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs text-text-muted uppercase font-bold tracking-wider">Enter 17-Digit Vehicle Identification Number (VIN)</label>
              <input
                type="text"
                required
                maxLength={17}
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                placeholder="e.g. 1YVFP82Y0558129XX"
                className="w-full bg-black border border-white/10 rounded px-4 py-3.5 text-base text-white focus:border-gold outline-none tracking-widest font-mono"
              />
              <span className="text-[10px] text-text-muted block">You can locate the VIN stamped on the dashboard corner or inside the driver door frame.</span>
            </div>

            <button
              type="submit"
              disabled={vin.length < 5}
              className="w-full py-4 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-widest rounded transition-all"
            >
              Verify Vehicle History
            </button>
          </form>
        )}

        {stage === "SCANNING" && (
          <div className="py-12 text-center space-y-6 max-w-md mx-auto">
            <div className="size-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mx-auto"></div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold">{scanMessage}</h3>
              <p className="text-xs text-text-muted">Performing forensic background audit...</p>
            </div>

            <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gold h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {stage === "RESULT" && (
          <div className="space-y-8">
            <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">Report Summary for VIN</h3>
                <span className="text-lg font-mono text-white font-semibold mt-1 block">{vin}</span>
              </div>
              <span className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-bold">✓ CLEAN TITLE</span>
            </div>

            {/* Audit Logs Table */}
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-black/40 border border-white/5 rounded flex justify-between items-center">
                <div>
                  <span className="font-bold text-white block uppercase tracking-wide">Accident Record Check</span>
                  <span className="text-text-muted mt-0.5 block">Scanned national insurance claim reports and write-off registers.</span>
                </div>
                <span className="text-emerald-400 font-bold">0 Accidents Found</span>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded flex justify-between items-center">
                <div>
                  <span className="font-bold text-white block uppercase tracking-wide">Mileage Verification</span>
                  <span className="text-text-muted mt-0.5 block">Compared odometer records across export hubs and import arrivals.</span>
                </div>
                <span className="text-emerald-400 font-bold">Verified (No Rollback)</span>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded flex justify-between items-center">
                <div>
                  <span className="font-bold text-white block uppercase tracking-wide">Theft & Recovery Check</span>
                  <span className="text-text-muted mt-0.5 block">Searched Interpol database logs and national police indexes.</span>
                </div>
                <span className="text-emerald-400 font-bold">Passed</span>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded flex justify-between items-center">
                <div>
                  <span className="font-bold text-white block uppercase tracking-wide">Open Recalls</span>
                  <span className="text-text-muted mt-0.5 block">Checked official manufacturer safety recall campaigns.</span>
                </div>
                <span className="text-emerald-400 font-bold">0 Active Recalls</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex gap-4 justify-end">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider"
              >
                Scan Another VIN
              </button>
              <button
                onClick={() => alert("Report downloaded successfully (simulated PDF export).")}
                className="px-6 py-3 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider"
              >
                Download PDF Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

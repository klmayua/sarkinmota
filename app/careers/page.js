"use client";

import { useState } from "react";
import Image from "next/image";

const openPositions = [
  {
    id: "pos_1",
    title: "Senior Automotive Sales Consultant",
    department: "BROKERAGE SALES",
    location: "CBD, Abuja",
    type: "Full-Time",
    salary: "Base + Commission",
    description: "Manage relationships with high-net-worth clients, coordinate vehicle viewings, negotiate purchase contracts, and oversee delivery experiences."
  },
  {
    id: "pos_2",
    title: "Electric Vehicle (EV) Diagnostic Technician",
    department: "SAFIMOTA CARE",
    location: "CBD, Abuja",
    type: "Full-Time",
    salary: "Competitive",
    description: "Diagnose, service, and calibrate high-voltage battery systems, electric drive units, and smart cockpit computers for Tesla, Xiaomi, and BMW fleets."
  },
  {
    id: "pos_3",
    title: "Master Vehicle Detailer & Paint Specialist",
    department: "SAFIMOTA CARE",
    location: "CBD, Abuja",
    type: "Full-Time",
    salary: "Competitive",
    description: "Execute high-end detailing including multi-stage paint correction, ceramic coatings application, and Paint Protection Film (PPF) installations."
  }
];

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState(openPositions[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    coverLetter: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const currentJob = openPositions.find(p => p.id === selectedPosition);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Header Navigation */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto h-[108px] flex justify-between items-center px-6 lg:px-12">
          <a href="/" className="relative w-28 h-16 flex items-center">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
              priority
            />
          </a>
          <div className="flex gap-x-6 items-center">
            <a href="/vehicles" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors font-medium">Showroom</a>
            <a href="/tools" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors font-medium">Tools</a>
            <a href="/sell-swap" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors font-medium">Sell / Swap</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-1 w-full space-y-12">
        {/* Breadcrumbs */}
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Careers</span>
        </nav>

        <div className="border-b border-white/10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Join the King of Cars</h1>
          <p className="text-sm text-text-muted mt-2">Build your career inside Nigeria's fastest growing luxury automotive group.</p>
        </div>

        {/* Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
          {/* Left: Positions List */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold font-heading uppercase tracking-tight text-gold">Open Opportunities</h2>
            <div className="space-y-4">
              {openPositions.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedPosition(job.id)}
                  className={`bg-panel border rounded-md p-6 cursor-pointer transition-all ${selectedPosition === job.id ? "border-gold" : "border-white/10 hover:border-white/20"}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-2 py-0.5 rounded border border-gold/25">
                        {job.department}
                      </span>
                      <h3 className="text-base font-bold text-white uppercase mt-2">{job.title}</h3>
                      <p className="text-xs text-text-muted mt-1">{job.location} | {job.type} | {job.salary}</p>
                    </div>
                  </div>
                  {selectedPosition === job.id && (
                    <p className="text-xs text-text-muted mt-4 leading-relaxed border-t border-white/5 pt-4">
                      {job.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Apply Form */}
          <div className="bg-panel border border-white/10 rounded-md p-8 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-20 space-y-4">
                <div className="size-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold mx-auto text-2xl">✓</div>
                <h3 className="text-xl font-bold font-heading uppercase">Application Received</h3>
                <p className="text-xs text-text-muted">Excellent. Our human resource operations team will review your credentials and portfolio links for the <span className="text-white font-semibold">{currentJob?.title}</span> position.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-bold font-heading uppercase tracking-tight text-white">Apply Now</h2>
                <div className="bg-black/40 border border-white/5 p-3 rounded text-xs text-text-muted">
                  Applying for: <span className="text-gold font-semibold uppercase">{currentJob?.title}</span>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Bello Aminu"
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="bello@domain.ng"
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">LinkedIn or Portfolio URL *</label>
                  <input
                    type="url"
                    name="portfolio"
                    required
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Brief Summary / Pitch</label>
                  <textarea
                    name="coverLetter"
                    rows={3}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Why do you want to work on West Africa's premium luxury vehicle portal?"
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-all font-heading"
                >
                  Submit Credentials
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#060606] border-t border-white/5 py-8 text-center text-xs text-text-muted">
        <p>© SARKIN MOTA AUTOS 2026</p>
      </footer>
    </div>
  );
}

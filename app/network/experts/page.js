"use client";

const expertsDb = [
  {
    id: "ex1",
    name: "AutoShield Inspections",
    rating: 4.9,
    reviews: 94,
    specialty: "Full 150-Point Pre-Purchase Inspections & VIN Checks",
    location: "Abuja Metropolitan Area",
    contact: "+2348030000006",
    email: "inspect@autoshield.ng"
  },
  {
    id: "ex2",
    name: "Abuja Appraisal & Valuation Group",
    rating: 4.8,
    reviews: 67,
    specialty: "Insurance Appraisals & Market Valuation Certificates",
    location: "Central Business District, Abuja",
    contact: "+2348030000007",
    email: "value@abujavaluers.ng"
  }
];

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/network" className="hover:text-gold transition-colors">Network</a> / <span className="text-gold">Inspections & Valuers</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Inspection & Valuation Experts
      </h1>

      <div className="space-y-6">
        {expertsDb.map((expert) => (
          <div key={expert.id} className="bg-panel border border-white/10 rounded-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:border-gold/30 transition-all">
            <div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading">★ {expert.rating} ({expert.reviews} Reviews)</span>
              <h2 className="text-lg font-bold uppercase mt-1 tracking-tight">{expert.name}</h2>
              <p className="text-xs text-white/90 mt-1 font-medium">Specialty: {expert.specialty}</p>
              <p className="text-xs text-text-muted mt-1">📍 {expert.location}</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <a
                href={`mailto:${expert.email}`}
                className="flex-1 md:flex-none text-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider transition-all border border-white/10"
              >
                Book Inspection
              </a>
              <a
                href={`https://wa.me/${expert.contact}`}
                target="_blank"
                className="flex-1 md:flex-none text-center px-6 py-3 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider transition-all"
              >
                Chat Expert
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

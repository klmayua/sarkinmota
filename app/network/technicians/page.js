"use client";

const techsDb = [
  {
    id: "tc1",
    name: "Abuja Performance Garage",
    rating: 4.9,
    reviews: 104,
    specialty: "V8/V10/V12 Engine Tuning & Mechanical Diagnostics",
    location: "Garki Area 11, Abuja",
    contact: "+2348030000008",
    email: "tuner@abujaperformance.ng"
  },
  {
    id: "tc2",
    name: "ElectroVolt Motors",
    rating: 4.8,
    reviews: 73,
    specialty: "Electric Vehicle (EV) Diagnostics & Software Updates",
    location: "Wuse II, Abuja",
    contact: "+2348030000009",
    email: "service@electrovolt.ng"
  }
];

export default function TechniciansPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/network" className="hover:text-gold transition-colors">Network</a> / <span className="text-gold">Maintenance Technicians</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Maintenance Technicians
      </h1>

      <div className="space-y-6">
        {techsDb.map((tech) => (
          <div key={tech.id} className="bg-panel border border-white/10 rounded-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:border-gold/30 transition-all">
            <div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading">★ {tech.rating} ({tech.reviews} Reviews)</span>
              <h2 className="text-lg font-bold uppercase mt-1 tracking-tight">{tech.name}</h2>
              <p className="text-xs text-white/90 mt-1 font-medium">Specialty: {tech.specialty}</p>
              <p className="text-xs text-text-muted mt-1">📍 {tech.location}</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <a
                href={`mailto:${tech.email}`}
                className="flex-1 md:flex-none text-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider transition-all border border-white/10"
              >
                Book Tech
              </a>
              <a
                href={`https://wa.me/${tech.contact}`}
                target="_blank"
                className="flex-1 md:flex-none text-center px-6 py-3 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider transition-all"
              >
                WhatsApp Tech
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

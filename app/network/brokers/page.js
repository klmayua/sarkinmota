"use client";

const brokersDb = [
  {
    id: "br1",
    name: "Al-Mansoor Luxury Brokerage",
    rating: 4.9,
    reviews: 74,
    specialty: "High-End Supercars & Custom Imports",
    location: "Maitama, Abuja",
    whatsapp: "+2348030000001",
    email: "deals@almansoor.ng"
  },
  {
    id: "br2",
    name: "Capital Wheels Agency",
    rating: 4.8,
    reviews: 53,
    specialty: "Electric Vehicles & Executive Sedans",
    location: "Wuse II, Abuja",
    whatsapp: "+2348030000002",
    email: "broker@capitalwheels.ng"
  },
  {
    id: "br3",
    name: "Garki Premium Brokerage",
    rating: 4.7,
    reviews: 42,
    specialty: "Bulletproof Armored SUVs",
    location: "Garki II, Abuja",
    whatsapp: "+2348030000003",
    email: "sales@garkipremium.ng"
  }
];

export default function AutoBrokersPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/network" className="hover:text-gold transition-colors">Network</a> / <span className="text-gold">Auto Brokers</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Verified Auto Brokers
      </h1>

      <div className="space-y-6">
        {brokersDb.map((broker) => (
          <div key={broker.id} className="bg-panel border border-white/10 rounded-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:border-gold/30 transition-all">
            <div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading">★ {broker.rating} ({broker.reviews} Reviews)</span>
              <h2 className="text-lg font-bold uppercase mt-1 tracking-tight">{broker.name}</h2>
              <p className="text-xs text-white/90 mt-1 font-medium">Specialty: {broker.specialty}</p>
              <p className="text-xs text-text-muted mt-1">📍 {broker.location}</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <a
                href={`mailto:${broker.email}`}
                className="flex-1 md:flex-none text-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider transition-all border border-white/10"
              >
                Email Agent
              </a>
              <a
                href={`https://wa.me/${broker.whatsapp}`}
                target="_blank"
                className="flex-1 md:flex-none text-center px-6 py-3 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider transition-all"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

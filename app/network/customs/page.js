"use client";

const customsDb = [
  {
    id: "cs1",
    name: "Apex Port Logistics Ltd",
    rating: 4.9,
    reviews: 112,
    port: "Apapa & Tin Can Island Ports, Lagos",
    contact: "+2348030000004",
    email: "clear@apexlogistics.ng"
  },
  {
    id: "cs2",
    name: "SafePass Customs Agency",
    rating: 4.8,
    reviews: 89,
    port: "Abuja Airport (Air Cargo) & Lagos Ports",
    contact: "+2348030000005",
    email: "info@safepasscustoms.ng"
  }
];

export default function CustomsSpecialistsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/network" className="hover:text-gold transition-colors">Network</a> / <span className="text-gold">Customs Specialists</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Licensed Customs Specialists
      </h1>

      <div className="space-y-6">
        {customsDb.map((agent) => (
          <div key={agent.id} className="bg-panel border border-white/10 rounded-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:border-gold/30 transition-all">
            <div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading">★ {agent.rating} ({agent.reviews} Reviews)</span>
              <h2 className="text-lg font-bold uppercase mt-1 tracking-tight">{agent.name}</h2>
              <p className="text-xs text-white/90 mt-1 font-medium">Port Coverage: {agent.port}</p>
              <p className="text-xs text-text-muted mt-1">Verified Nigeria Customs Service (NCS) Brokerage License</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <a
                href={`mailto:${agent.email}`}
                className="flex-1 md:flex-none text-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider transition-all border border-white/10"
              >
                Send Request
              </a>
              <a
                href={`https://wa.me/${agent.contact}`}
                target="_blank"
                className="flex-1 md:flex-none text-center px-6 py-3 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider transition-all"
              >
                WhatsApp Agent
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

const partnersDb = [
  {
    id: "pt1",
    name: "Abuja Flagship Showrooms",
    rating: 4.9,
    reviews: 142,
    location: "Central Business District, Abuja",
    brands: "Xiaomi, Audi, AMG Mercedes-Benz",
    contact: "+2348030000010"
  },
  {
    id: "pt2",
    name: "Yola Exotic Cars",
    rating: 4.8,
    reviews: 58,
    location: "Jimeta, Yola",
    brands: "Toyota Land Cruiser, Lexus LX600",
    contact: "+2348030000011"
  }
];

export default function PartnerNetworkPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/network" className="hover:text-gold transition-colors">Network</a> / <span className="text-gold">Partner Dealers</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Dealership Partner Network
      </h1>

      <div className="space-y-6">
        {partnersDb.map((partner) => (
          <div key={partner.id} className="bg-panel border border-white/10 rounded-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:border-gold/30 transition-all">
            <div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading">★ {partner.rating} ({partner.reviews} Reviews)</span>
              <h2 className="text-lg font-bold uppercase mt-1 tracking-tight">{partner.name}</h2>
              <p className="text-xs text-white/90 mt-1 font-medium">Core Inventory Brands: {partner.brands}</p>
              <p className="text-xs text-text-muted mt-1">📍 {partner.location}</p>
            </div>

            <div className="w-full md:w-auto">
              <a
                href={`https://wa.me/${partner.contact}`}
                target="_blank"
                className="block text-center w-full px-6 py-3 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider transition-all"
              >
                Connect Dealership
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

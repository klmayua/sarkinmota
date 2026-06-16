"use client";

import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    title: "Sarkin Mota Autos Flagship Showroom Opens in Central Business District, Abuja",
    summary: "Experience a new standard of luxury vehicle commerce. Our state-of-the-art facility features premium detailing bays, EV charging hubs, and direct sales lounges.",
    date: "June 14, 2026",
    category: "SHOWROOM",
    readTime: "4 min read",
    img: "/static/carousel/mercedes-amg-gle-63.jpg"
  },
  {
    id: 2,
    title: "Nigeria's First Xiaomi YU7 Electric SUV Lands at Abuja Showroom",
    summary: "The revolutionary 1015-horsepower electric SUV from tech giant Xiaomi is now officially available for private viewings and pre-orders in Nigeria.",
    date: "June 10, 2026",
    category: "EXOTICS",
    readTime: "3 min read",
    img: "/static/carousel/xaiomi-yu7-green.png"
  },
  {
    id: 3,
    title: "Abuja Autofest 2026 Dates Announced: The Ultimate Supercar Festival",
    summary: "Sarkin Mota Autos returns as the title sponsor for West Africa's largest gathering of supercars, superbikes, drag racing, and classic car exhibitions.",
    date: "May 28, 2026",
    category: "EVENTS",
    readTime: "5 min read",
    img: "/static/carousel/R8.png"
  },
  {
    id: 4,
    title: "Nigeria Customs Service (NCS) Implements New Import Tariffs for Hybrid & Electric Vehicles",
    summary: "A comprehensive breakdown of how the latest federal fiscal policy changes impact import duties, clearing tariffs, and registration costs for green vehicles.",
    date: "May 15, 2026",
    category: "REGULATORY",
    readTime: "7 min read",
    img: "/static/carousel/bmw-i7-2025.png"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">


      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-6 py-16 flex-1 w-full">
        {/* Breadcrumbs */}
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">News & Events</span>
        </nav>

        <div className="border-b border-white/10 pb-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">News & Editorial Feed</h1>
          <p className="text-sm text-text-muted mt-2">Get the latest insights on supercar arrivals, automotive events, and Nigerian import policies.</p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 bg-panel border border-white/10 rounded-md overflow-hidden hover:border-gold/40 transition-all shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto w-full h-full bg-black min-h-[300px]">
              <Image
                src={newsArticles[0].img}
                alt={newsArticles[0].title}
                fill
                className="object-cover object-bottom"
              />
              <div className="absolute top-4 left-4 bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                FEATURED WRAP
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] text-gold uppercase tracking-widest font-semibold block">{newsArticles[0].category}</span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-tight text-white leading-tight">
                  {newsArticles[0].title}
                </h2>
                <p className="text-xs text-text-muted leading-relaxed">
                  {newsArticles[0].summary}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-text-muted">
                <span>{newsArticles[0].date}</span>
                <span>{newsArticles[0].readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <div
              key={article.id}
              className="bg-panel border border-white/5 rounded-md overflow-hidden hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full bg-black">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-900 border border-white/10 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold font-heading uppercase tracking-tight text-white line-clamp-2 hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-text-muted">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </main>


    </div>
  );
}

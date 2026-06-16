import { Titillium_Web, Inter } from "next/font/google";
import "./globals.css";

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sarkin Mota Autos | Premium Luxury Vehicles",
  description: "Nigeria's premier luxury vehicle marketplace and care ecosystem, located in Central Business District, Abuja.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${titilliumWeb.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}

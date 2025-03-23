import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "SkyConnect Explorer",
  description: "Encuentra todo sobre aeropuertos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <div className="absolute z-[-1] inset-0 bg-[#020D20] opacity-70" />
        {children}
      </body>
    </html>
  );
}

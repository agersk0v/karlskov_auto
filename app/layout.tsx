import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./JsonLd";
import url from "@/url.json";

export const metadata: Metadata = {
  title: "Karlskov Auto – Autoværksted i Gislinge",
  description:
    "Karlskov Auto i Gislinge tilbyder professionel reparation af alle bilmærker, varebiler og trailere. Vi håndterer skader, forsikringssager, aircondition service, dækskift og klargøring til syn.",
  keywords: [
    "Karlskov Auto",
    "autoværksted Gislinge",
    "reparation af biler",
    "varebiler",
    "forsikringsskader",
    "aircondition service",
    "dækcenter",
    "klargøring til syn",
    "serviceeftersyn",
    "trailer reparation",
    "bilservice",
  ],
  authors: [{ name: "Karlskov Auto" }],
  creator: "Karlskov Auto",
  generator: "Next.js",
  metadataBase: new URL(url.url),
  openGraph: {
    title: "Karlskov Auto – Autoværksted i Gislinge",
    description:
      "Få professionel bilservice hos Karlskov Auto. Vi tilbyder reparation af alle bilmærker, aircondition service, dækskift og meget mere.",
    url: url.url,
    siteName: "Karlskov Auto",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "images/logo2",
        width: 1200,
        height: 630,
        alt: "Karlskov Auto – Autoværksted i Gislinge",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="scroll-smooth">
      <link rel="icon" href="/images/favicon-192x192.png" sizes="192x192" />

      <link rel="icon" href="/images/favicon-512x512.png" sizes="512x512" />

      <JsonLd />
      <body className="antialiased text-white bg-black font-[roboto]">
        {children}
      </body>
    </html>
  );
}

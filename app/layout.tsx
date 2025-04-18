import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./JsonLd";
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
    metadataBase: new URL("https://karlskov-auto.vercel.app"),
    openGraph: {
        title: "Karlskov Auto – Autoværksted i Gislinge",
        description:
            "Få professionel bilservice hos Karlskov Auto. Vi tilbyder reparation af alle bilmærker, aircondition service, dækskift og meget mere.",
        url: "https://karlskov-auto.vercel.app",
        siteName: "Karlskov Auto",
        locale: "da_DK",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="da" className="scroll-smooth">
            <JsonLd />
            <body className="antialiased text-white bg-black font-[roboto]">
                {children}
            </body>
        </html>
    );
}

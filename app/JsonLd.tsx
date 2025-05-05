import React from "react";
import Head from "next/head";

const JsonLd: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Karlskov Auto",
    // image: 'https://karlskov-auto.vercel.app/logo.png',
    "@id": "https://karlskov-auto.vercel.app/",
    url: "https://karlskov-auto.vercel.app",
    telephone: "+45 24 49 19 15",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Teknikvej 4",
      addressLocality: "Gislinge",
      postalCode: "4532",
      addressCountry: "DK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "16:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "16:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/p/Karlskov-Auto-og-D%C3%A6kservice-100064165748078",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default JsonLd;

import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://www.greenloopbio.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GreenLoop Bio Resources | Used Cooking Oil Collection, Indore",
    template: "%s | GreenLoop Bio Resources",
  },
  description:
    "GreenLoop Bio Resources collects used cooking oil from hotels, cloud kitchens, food courts, caterers, and institutional cafeterias across Indore, supplying authorized facilities for renewable energy production. Schedule a free pickup.",
  keywords: [
    "used cooking oil collection Indore",
    "UCO collection Madhya Pradesh",
    "cooking oil disposal hotels",
    "biodiesel feedstock collection",
    "commercial kitchen oil pickup",
  ],
  authors: [{ name: "GreenLoop Bio Resources" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "GreenLoop Bio Resources",
    title: "GreenLoop Bio Resources | Used Cooking Oil Collection, Indore",
    description:
      "Reliable used cooking oil collection for hotels, cloud kitchens, caterers, and institutions across Indore and Madhya Pradesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenLoop Bio Resources | Used Cooking Oil Collection, Indore",
    description:
      "Reliable used cooking oil collection for hotels, cloud kitchens, caterers, and institutions across Indore and Madhya Pradesh.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0E7A3E",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GreenLoop Bio Resources",
  description:
    "Used cooking oil collection service for hotels, cloud kitchens, food courts, caterers, and institutional cafeterias, supplying authorized facilities for renewable energy production.",
  url: siteUrl,
  telephone: "+91-731-400-2210",
  email: "pickups@greenloopbio.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "AB Road Industrial Belt",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "State",
    name: "Madhya Pradesh",
  },
  openingHours: "Mo-Sa 09:00-19:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${plexMono.variable} scroll-pt-20`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

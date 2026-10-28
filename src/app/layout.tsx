import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

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

const siteUrl = "https://www.greenloopbioresources.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GreenLoop Bio Resources | Used Cooking Oil Collection, Indore",
    template: "%s | GreenLoop Bio Resources",
  },
  description:
    "GreenLoop Bio Resources collects used cooking oil from restaurants, hotels, cloud kitchens, namkeen and sweet manufacturers, caterers, and food courts across Indore district, and supplies it to a partner biodiesel plant. Request a free pickup.",
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
      "Used cooking oil collection for restaurants, hotels, cloud kitchens, and food businesses across Indore district.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenLoop Bio Resources | Used Cooking Oil Collection, Indore",
    description:
      "Used cooking oil collection for restaurants, hotels, cloud kitchens, and food businesses across Indore district.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0E7A3E",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: siteUrl,
  telephone: site.phone,
  ...(site.email ? { email: site.email } : {}),
  address: {
    "@type": "PostalAddress",
    ...(site.address ? { streetAddress: site.address } : {}),
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Indore district, Madhya Pradesh",
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

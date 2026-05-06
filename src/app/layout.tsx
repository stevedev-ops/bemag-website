import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEMAG Holdings | Your Strategic Bridge to Success",
  description: "BEMAG Holdings connects raw ideas to fully operational, customer-focused ventures. Built to scale, thrive, and lead in competitive markets.",
  metadataBase: new URL('https://www.bemagholdingsltd.com'),
  verification: {
    google: "q1VaUXAEsKMyCsV0uyK2NURoktV305TstBboHYrYE-I",
  },
  keywords: [
    "BEMAG Holdings - Your Strategic Bridge to Success",
    "BEMAG Holdings", "BEMAG Holdings Ltd", "BEMAG Holdings Limited", 
    "BEMAG Holding Ltd", "BEMAG Holding Limited", "Bemag Ltd", 
    "Bemag Limited", "Bemag Holdings", "Bemag Holding", "BEMAG", "Bemag",
    "Business Consultancy Kenya", "Strategic Bridge to Success"
  ],
  openGraph: {
    title: "BEMAG Holdings | Your Strategic Bridge to Success",
    description: "BEMAG Holdings connects raw ideas to fully operational, customer-focused ventures. Built to scale, thrive, and lead in competitive markets.",
    url: 'https://www.bemagholdingsltd.com',
    siteName: 'BEMAG Holdings',
    images: [
      {
        url: '/hero-bridge.png',
        width: 1200,
        height: 630,
        alt: 'BEMAG Holdings - The Bridge to Your Success',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BEMAG Holdings | Your Strategic Bridge to Success",
    description: "BEMAG Holdings connects raw ideas to fully operational, customer-focused ventures.",
    images: ['/hero-bridge.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BEMAG Holdings",
              "alternateName": [
                "BEMAG Holdings Ltd",
                "BEMAG Holdings Limited",
                "BEMAG Holding Ltd",
                "BEMAG Holding Limited",
                "Bemag Holdings Ltd",
                "Bemag Holdings Limited",
                "Bemag Holding Ltd",
                "Bemag Holding Limited",
                "Bemag Ltd",
                "Bemag Limited",
                "Bemag Holdings",
                "Bemag Holding",
                "BEMAG",
                "Bemag"
              ],
              "url": "https://www.bemagholdingsltd.com",
              "logo": "https://www.bemagholdingsltd.com/bemag-logo.png",
              "sameAs": [
                "https://www.bemagholdingsltd.com"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254115598150",
                "contactType": "customer service",
                "areaServed": "KE",
                "availableLanguage": "en"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}

import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IIT Academy",
  description: "IIT Academy – Best Institute for JEE and NEET Preparation",
  authors: [{ name: "Devanshu Kumar" }],
  openGraph: {
    type: "website",
    url: "https://www.iitacademy.in",
    siteName: "IIT Academy",
    title: "IIT Academy – Best Institute for JEE and NEET",
    description: "Top institute offering coaching for JEE and NEET aspirants.",
    images: [
      {
        url: "https://www.iitacademy.in/assets/seo/og-default.webp",
        width: 1200,
        height: 630,
        alt: "IIT Academy – Best JEE & NEET Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iitacademy",
    title: "IIT Academy – Best Institute for JEE and NEET",
    description:
      "Join IIT Academy for top-quality coaching for JEE (Main + Advanced) and NEET.",
    images: ["https://www.iitacademy.in/assets/seo/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.iitacademy.in",
  },
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Organization Schema with address
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IIT Academy",
    url: "https://www.iitacademy.in",
    logo: "https://www.iitacademy.in/assets/logo.png",
    sameAs: [
      "https://www.facebook.com/iitacademy",
      "https://www.instagram.com/iitacademy",
      "https://www.linkedin.com/company/iitacademy",
      "https://twitter.com/iitacademy",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9876543210",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Road",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <body>
        <Header />
        <main style={{ minHeight: "68.4vh" }}>
          <Toaster />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

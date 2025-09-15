"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface InstituteSEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  faq?: {
    question: string;
    answer: string;
  }[];
}

const InstituteSEO: React.FC<InstituteSEOProps> = ({
  title,
  description,
  url,
  image,
  faq = [],
}) => {
  const pathname = usePathname();

  // ✅ Breadcrumbs
  const breadcrumbParts = pathname.split("/").filter(Boolean);
  const breadcrumb = [
    { name: "Home", url: "https://www.iitacademy.in" },
    ...breadcrumbParts.map((part, index) => ({
      name: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      url:
        "https://www.iitacademy.in/" +
        breadcrumbParts.slice(0, index + 1).join("/"),
    })),
  ];

  // ✅ WebPage Schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    image: image ? [image] : undefined,
    publisher: {
      "@type": "Organization",
      name: "IIT Academy",
      url: "https://www.iitacademy.in",
      logo: "https://www.iitacademy.in/assets/logo.png",
    },
  };

  // ✅ FAQ Schema (optional)
  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default InstituteSEO;

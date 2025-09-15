"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface CourseSEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  faq: {
    question: string;
    answer: string;
  }[];
  duration?: string; // ISO 8601 (e.g. "P1Y")
  price?: string;
  priceCurrency?: string;
}

const CourseSEO = ({
  title,
  description,
  url,
  image,
  faq,
  duration,
  price,
  priceCurrency,
}: CourseSEOProps) => {
  const pathname = usePathname() || "/";

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

  // ✅ Course Schema
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const courseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    image: [image],
    provider: {
      "@type": "Organization",
      name: "IIT Academy",
      url: "https://www.iitacademy.in",
      logo: "https://www.iitacademy.in/assets/logo.png",
    },
  };

  if (duration) courseSchema.duration = duration;
  if (price && priceCurrency) {
    courseSchema.offers = {
      "@type": "Offer",
      price,
      priceCurrency,
      availability: "https://schema.org/InStock",
      url,
    };
  }

  // ✅ FAQ Schema
  const faqSchema = {
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
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {faq.length > 0 && (
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

export default CourseSEO;

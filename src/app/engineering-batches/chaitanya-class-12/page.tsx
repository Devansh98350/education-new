import { Metadata } from "next";
import Chaitanya from "@/components/Batches/Engineering/chaitanya";
import CourseSEO from "@/components/SEO/CourseSEO";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Chaitanya (JC) - Class 12 JEE Course | IIT Academy",
  description:
    "Chaitanya Course at IIT Academy is designed for students moving to Class 12, offering comprehensive JEE (Main + Advanced) preparation, board exam support, and extensive practice with expert faculty.",
  openGraph: {
    type: "website",
    title: "Chaitanya (JC) - Class 12 JEE Course | IIT Academy",
    description:
      "The Chaitanya Course by IIT Academy is tailored for Class 12 students aiming for JEE (Main + Advanced) 2025.",
    url: "https://www.iitacademy.in/engineering-batches/chaitanya-class-12",
    siteName: "IIT Academy",
    images: [
      {
        url: "https://www.iitacademy.in/assets/batches/Chaitanya.webp",
        width: 1200,
        height: 630,
        alt: "Chaitanya Batch Class 12 JEE Preparation - IIT Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya (JC) - Class 12 JEE Course | IIT Academy",
    description:
      "The Chaitanya Course by IIT Academy is designed for Class 12 students targeting JEE (Main + Advanced) with board exam support.",
    images: ["https://www.iitacademy.in/assets/batches/Chaitanya.webp"],
  },
  alternates: {
    canonical:
      "https://www.iitacademy.in/engineering-batches/chaitanya-class-12",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Page() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Chaitanya, Chaitanya Batch JEE Main Advanced IIT Academy, 11th to 12th Moving Students JEE Preparation, JEE (Main+Advanced) Coaching 2025, JEE Advanced Courses for 12th Students, Top IIT JEE Coaching Classes for class 12"
        />
      </Head>
      <CourseSEO
        title="Chaitanya Course (Class 12)"
        description="Chaitanya Course is designed for students moving to 12th class, providing full JEE (Main + Advanced) preparation, board exam support, and extensive practice with expert faculty."
        url="https://www.iitacademy.in/engineering-batches/chaitanya-class-12"
        image="https://www.iitacademy.in/assets/batches/Chaitanya.webp"
        duration="P1Y"
        price="29500"
        priceCurrency="INR"
        faq={[
          {
            question: "Who can join the Chaitanya Course?",
            answer:
              "Students moving to Class 12 after completing Class 11 can join the Chaitanya Course.",
          },
          {
            question: "What is the course duration?",
            answer:
              "The Chaitanya Course runs for 1 year, covering JEE (Main + Advanced) preparation, board exam readiness, and extensive practice sessions.",
          },
        ]}
      />
      <Chaitanya />
    </>
  );
}

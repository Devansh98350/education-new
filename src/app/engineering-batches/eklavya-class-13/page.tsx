import { Metadata } from "next";
import CourseSEO from "@/components/SEO/CourseSEO";
import E_Twelve from "@/components/Batches/Engineering/eklavya";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Eklavya (JE) - JEE Advanced Course | IIT Academy",
  description:
    "Eklavya Course offers a specialized one-year program designed for 12th passout students, providing comprehensive coaching for JEE Advanced 2025 with expert faculty, computer-based tests, and extensive study material, ensuring focused preparation for achieving top ranks.",
  openGraph: {
    type: "website",
    title: "Eklavya (JE) - JEE Advanced Course | IIT Academy",
    description:
      "The Eklavya Course by IIT Academy is specially designed for 12th passout students targeting JEE Advanced 2025.",
    url: "https://www.iitacademy.in/engineering-batches/eklavya-jee-advanced",
    siteName: "IIT Academy",
    images: [
      {
        url: "https://www.iitacademy.in/assets/batches/Eklavya.webp",
        width: 1200,
        height: 630,
        alt: "Eklavya Batch JEE Advanced Preparation - IIT Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eklavya (JE) - JEE Advanced Course | IIT Academy",
    description:
      "The Eklavya Course by IIT Academy is specially designed for 12th passout students targeting JEE Advanced 2025.",
    images: ["https://www.iitacademy.in/assets/batches/Eklavya.webp"],
  },
  alternates: {
    canonical:
      "https://www.iitacademy.in/engineering-batches/eklavya-jee-advanced",
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
          content="Eklavya ,Eklavya Batch JEE Main Advanced IIT Academy, 12th Passed Students JEE Preparation, Best JEE Coaching for Droppers, IIT JEE 2025 Advanced Coaching for Repeaters, JEE Preparation Courses for 12th Pass"
        />
      </Head>
      <CourseSEO
        title="Eklavya Course (12th Pass)"
        description="Eklavya Course is the premier program for 12th passout students, offering focused one-year JEE Advanced preparation with expert faculty and computer-based tests."
        url="https://www.iitacademy.in/engineering-batches/eklavya-jee-advanced"
        image="https://www.iitacademy.in/assets/batches/Eklavya.webp"
        duration="P1Y"
        price="31000"
        priceCurrency="INR"
        faq={[
          {
            question: "Who can join the Eklavya Course?",
            answer:
              "Students who have passed Class 12 and are aiming for JEE Advanced 2025 can join the Eklavya Course.",
          },
          {
            question: "What is the course duration?",
            answer:
              "The Eklavya Course runs for 1 year, focusing on JEE Advanced preparation with extensive study material and computer-based tests.",
          },
        ]}
      />
      <E_Twelve />
    </>
  );
}

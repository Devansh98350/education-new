import { Metadata } from "next";
import E_Eleven from "@/components/Batches/Engineering/arjuna";
import CourseSEO from "@/components/SEO/CourseSEO";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Arjuna (JA) - Class 11 JEE Course | IIT Academy",
  description:
    "Join the Arjuna Course at IIT Academy for Class 11 students. Early JEE (Main + Advanced) preparation, strong fundamentals, and expert mentorship for success in JEE 2026.",
  openGraph: {
    type: "website",
    title: "Arjuna (JA) - Class 11 JEE Course | IIT Academy",
    description:
      "The Arjuna Course by IIT Academy is specially designed for Class 11 students targeting JEE (Main + Advanced).",
    url: "https://www.iitacademy.in/engineering-batches/arjuna-class-11",
    siteName: "IIT Academy",
    images: [
      {
        url: "https://www.iitacademy.in/assets/batches/Arjuna.webp",
        width: 1200,
        height: 630,
        alt: "Arjuna Batch Class 11 JEE Preparation - IIT Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjuna (JA) - Class 11 JEE Course | IIT Academy",
    description:
      "The Arjuna Course by IIT Academy is specially designed for Class 11 students targeting JEE (Main + Advanced).",
    images: ["https://www.iitacademy.in/assets/batches/Arjuna.webp"],
  },
  alternates: {
    canonical: "https://www.iitacademy.in/engineering-batches/arjuna-class-11",
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
          content="Arjuna, Arjuna Batch IIT Academy, Class 11 JEE Coaching, JEE 2026 Preparation, Online JEE Preparation, Best JEE Coaching Institute"
        />
      </Head>
      <CourseSEO
        title="Arjuna Course (Class 11)"
        description="Arjuna Course is the premier program for class 11 engineering students, offering early JEE (Main + Advanced) preparation, strong fundamentals, and competitive exam readiness."
        url="https://www.iitacademy.in/engineering-batches/arjuna-class-11"
        image="https://www.iitacademy.in/assets/batches/Arjuna.webp"
        duration="P1Y"
        price="27100"
        priceCurrency="INR"
        faq={[
          {
            question: "Who can join the Arjuna Course?",
            answer:
              "Students moving to Class 11 after 10th Board exams can join the Arjuna Course.",
          },
          {
            question: "What is the course duration?",
            answer:
              "The Arjuna Course runs for 1 year, covering fundamentals, JEE (Main + Advanced) preparation, and competitive exam readiness.",
          },
        ]}
      />
      <E_Eleven />
    </>
  );
}

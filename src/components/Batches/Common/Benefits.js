"use client";

import React from "react";
import Image from "next/image";
import "../Boards/Boards.css";
const Benefits = () => {
  return (
    <div>
      <h1 className="heading">What are the Course Benefits?</h1>
      <div className="box-container">
        <div className="box">
          <span></span>
          <h4>Excellent Faculty</h4>
          <Image
            src="/assets/cbenefits/Excellent-Faculty.webp"
            alt="Excellent Faculty"
            width={200}
            height={200}
            unoptimized
          />

          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Outstanding and highly qualified faculty members who help students
            in every aspect of their study life.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Computer Based Tests</h4>
          <Image
            src="/assets/cbenefits/Computer-Based-Test.webp"
            alt="Computer Based Tests"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Online tests will be conducted as per the new change in the pattern,
            for better practice of our students.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Doubt Classes</h4>
          <Image
            src="/assets/cbenefits/Doubt-Classes.webp"
            alt="Doubt Classes"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            1 on 1 doubt classes are conducted for students to provide them with
            customized solution.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Board Improvement Program</h4>
          <Image
            src="/assets/cbenefits/Board-Exam-Preparation.webp"
            alt="Board Improvement Program"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Special board classes for the students who are improving in any
            subject of board.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Competitive Exam Support</h4>
          <Image
            src="/assets/cbenefits/Competitive-Exam-Support.webp"
            alt="Competitive Exam Support"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Special classes are designed for other exams like Olympiads, KVPY.
            Study material are provided and regular tests are conducted.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Daily Practice Problems</h4>
          <Image
            src="/assets/cbenefits/Daily-Practice-Problems.webp"
            alt="Daily Practice Problems"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Designed for a student&apos;s self-understanding of a topic. DPPs
            are handed over daily to the students for practice after every
            session.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Periodic Tests</h4>
          <Image
            src="/assets/cbenefits/Periodic-Tests.webp"
            alt="Periodic Tests"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Periodic Tests are conducted regularly, allowing students to solve
            all kinds of questions asked in the competitive exams of JEE.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Board Worksheets</h4>
          <Image
            src="/assets/cbenefits/Board-Worksheets.webp"
            alt="Board Worksheets"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            On the basis of NCERT and State Boards, worksheets for students are
            created. This runs parallel with the course curriculum.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Orientation Classes</h4>
          <Image
            src="/assets/cbenefits/Orientation-Classes.webp"
            alt="Orientation Classes"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Orientation classes are conducted for students to motivate them and
            make them familiar with the institute.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Performance Tracker</h4>
          <Image
            src="/assets/cbenefits/Performance-Tracker.webp"
            alt="Performance Tracker"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Every student&apos;s progress is tracked by giving a constant
            feedback on their performance in the tests.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Regular Feedback System</h4>
          <Image
            src="/assets/cbenefits/Feedback-System.webp"
            alt="Regular Feedback System"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Regular feedbacks are taken by the students in order to improve the
            learning process qualitatively and listens to all student&apos;s
            queries.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4> Study Material </h4>
          <Image
            src="/assets/cbenefits/Study-Material.webp"
            alt="Study Material"
            width={200}
            height={200}
            unoptimized
          />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Topic-wise study material with all the key concepts, problems for
            practice and important questions are updated regularly.
          </h4>
        </div>
        {/* <div className="box">
            <span></span>
            <h4>Recorded Video Lecture</h4>
            <Image src={video} alt=" " />
            <p>
              Students who have missed classes can watch recorded video lectures
              in computer lab to cover up the topics.
            </p>
          </div>
          <div className="box">
            <span></span>
            <h4>B:MUS (Make up classes)</h4>
            <Image src={makeup} alt=" " />
            <p>
              Especially organized for the students who have missed the classes
              or have doubt in particular topic or chapter.
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default Benefits;

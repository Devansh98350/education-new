"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Engineering.css";
import img from "../../../../public/assets/batches/Eklavya.webp";
import Benefits from "../Common/Benefits";
import Breadcrumbs from "../../Breadcrumbs";
import Image from "next/image";

const E_Thirteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "IMG") {
        event.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <>
      <Breadcrumbs />
      <section id="section">
        <div className="image">
          <Image src={img} alt="Loading..." unoptimized />
        </div>
        <div className="about">
          <h1>Why Eklavya?</h1>
          <p>
            <i
              className="fas fa-angle-double-right"
              style={{ color: "#f39c12", marginRight: "5px" }}
            ></i>
            Eklavya Course is specially designed of students who would be taking
            their Class XII board exams in 2024 and are willing to dedicate one
            year for the preparation of JEE-Advanced 2025. This course has been
            designed for students who intend to retake JEE(Main+Advance) in 2025
            for a better rank. It is also of utmost importance for those
            students who have not undergone specialized Coaching/ Training for
            JEE (Main+Advanced) during their Class XI & XII.
          </p>
          <p>
            <i
              className="fas fa-angle-double-right"
              style={{ color: "#f39c12", marginRight: "5px" }}
            ></i>
            In this Course, Entire syllabus of class XI & XII will be covered.
          </p>
          <p>
            <i
              className="fas fa-angle-double-right"
              style={{ color: "#f39c12", marginRight: "5px" }}
            ></i>
            Students joining this program are mentored to do focussed study for
            one year to utilise remaining time for preparation of JEE
            (Main+Advanced), their ultimate goal!
          </p>
        </div>
        <div className="details" id="details">
          <h2 className="heading-details">Fee & Scholarship Details</h2>

          <div className="detail-box">
            <h5 className="heading-box">
              Fee Structure For EKLAVYA Course (1 Year)
            </h5>
            <table className="fees-table">
              <thead>
                <tr>
                  <th className="table-head">
                    Admission + Infra. + Study material free
                  </th>
                  <th className="table-head">Tution Fee(TF)</th>
                  <th className="table-head">Caution Money</th>
                  <th className="table-head">
                    Gross Total Fee (if paid in inst.)
                  </th>
                  <th className="table-head">1st inst.</th>
                  <th className="table-head">2nd inst.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3100</td>
                  <td>35500</td>
                  <td>2500</td>
                  <td>41100</td>
                  <td>24100</td>
                  <td>17000</td>
                </tr>
              </tbody>
            </table>
            <p className="details-para">
              1st Installment is 60% of the total fee & 2nd Installment is 40%
              in Single Year Course. 1st Installment at the time of admission
              while 2nd installment on or before 60 days of course commencement.
              For students who deposit the fees in 2 installment, it is
              mandatory for them to submit a Post Dated Cheque (PDC) of the
              remaining installment.
            </p>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="scholar-box">
                  <h3 className="scholar-head">Scholarship Criteria</h3>
                  <ul className="box-ul">
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ color: "#f39c12", marginRight: "5px" }}
                      ></i>
                      Scholarship based on <b>Board Exam Marks.</b>
                    </li>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ color: "#f39c12", marginRight: "5px" }}
                      ></i>
                      Scholarship based on <b>Competitive Exam Performance.</b>
                    </li>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ color: "#f39c12", marginRight: "5px" }}
                      ></i>
                      To Know More{"   "}
                      <Link
                        href="/fees-structure#section"
                        className="btn-one buttn"
                        style={{ backgroundColor: "green" }}
                      >
                        Click here{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="scholars-box">
                  <h3 className="scholar-head">Scholarship Test Details</h3>
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  <button className="btn btn-secondary buttn">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="apply">
              <Link
                href="/admission-form"
                className="apply-btn btn btn-primary"
                style={{ backgroundColor: "green" }}
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Benefits />
    </>
  );
};

export default E_Thirteen;

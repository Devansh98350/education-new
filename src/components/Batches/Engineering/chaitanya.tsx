"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Engineering.css";
import img from "../../../../public/assets/batches/Chaitanya.webp";
import Benefits from "../Common/Benefits";
import Breadcrumbs from "../../Breadcrumbs";
import Image from "next/image";

const E_Twelve = () => {
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
          <h1>Why Chaitanya?</h1>
          <p>
            <i
              className="fas fa-angle-double-right"
              style={{ color: "#f39c12", marginRight: "5px" }}
            ></i>
            Chaitanya Course is specially designed to focus on JEE
            (Main+Advanced) preparation for students moving from class 11th to
            12th. The course covers complete syllabus of class 12th with whole
            revision of class 11. Students will also be guided to prepare for
            12th board examination.
          </p>
          <p>
            <i
              className="fas fa-angle-double-right"
              style={{ color: "#f39c12", marginRight: "5px" }}
            ></i>
            Students joining this course are mentored to build up their
            fundamentals and practice extensively for JEE (Advanced), their
            ultimate goal!
          </p>
        </div>
        <div className="details" id="details">
          <h2 className="heading-details">Fee & Scholarship Details</h2>

          <div className="detail-box">
            <h5 className="heading-box">
              Fee Structure For CHAITANYA Course (1 Year)
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
                  <td>30500</td>
                  <td>1500</td>
                  <td>35100</td>
                  <td>20100</td>
                  <td>15000</td>
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

export default E_Twelve;

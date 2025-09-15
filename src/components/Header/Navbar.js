"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link detection
// import "@fortawesome/fontawesome-free/css/all.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styled from "styled-components";
import mono from "../../../public/assets/homepage/mono.webp";
import mainlogo from "../../../public/assets/homepage/IIT_Academy.webp";
import whatsapp from "../../../public/assets/homepage/chatus.gif";
import call from "../../../public/assets/homepage/call_now.gif";
import Image from "next/image";

const StyledDiv10 = styled.div`
  /* Header row1*/

  .container-fluid {
    background-color: white;
    display: flex;
    justify-content: space-between;
  }

  .header {
    margin-top: 0px;
  }
  .header-col1,
  .header-col2,
  .header-col3 {
    display: flex;
    align-items: center;
  }
  .header-col1 img {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
    height: 75px;
    width: auto;
  }
  img {
    pointer-events: none; /* Disable click events */
    user-select: none; /* Disable selection */
  }

  .header-col12 img {
    display: flex;
    align-items: center;
    font-size: 30px;
    width: auto;
    height: 100px;
  }

  .header-col21 img {
    display: flex;
    align-items: center;
    margin-left: 50px;
    font-size: 30px;
    width: auto;
    height: 65px;
  }

  .header-col22 img {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 80px;
    font-size: 30px;
    width: auto;
    height: 50px;
  }

  /*Header Row 2*/

  .row2 {
    transition: all 0.1s ease;
    margin-bottom: 20px;
  }

  .row2-fixed {
    position: fixed;
      padding-top: 50 px;
    top: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 4px solid #F39C12;
    /* transition: background-color 0.1s, transform 0.1s; */
  }
 
  .container-fluid1 {
    background-color: white;
  }

  .nav-item {
    position: relative;
    display: inline-block;
    align-items: center;
  }

  .nav-link {
    color: white;
    border: none;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff; /* Background color for the dropdown menu */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); /* Box shadow for the dropdown */
    z-index: 100;
    width: 1000px;
  }

  .hover:hover .dropdown-menu {
    display: block;
    width: auto;
    text-decoration: none;
  }

  .nav-item.dropdown {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  .nav-link.dropdown-toggle {
    color: black;
    border: none;
    cursor: pointer;
  }
 .nav-link.dropdown-toggle.active {
    color: black;
    border: none;
    cursor: pointer;
  }
  .dropdown-item {
    color: black;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 0; /* Adjust padding as needed */
    text-align: left;
    text-decoration: none;
    display: block;
    padding: 10px;
  }
  .dropdown-item:hover{
    background-color: #2904F9;
    color:white;
    border-radius:20px; 
    text-decoration: none;
  }
  .active{
    background-color: #2904F9;
    color:white;
    border-radius:20px; 
    text-decoration: none;
  }
  .dropdown-heading {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    text-decoration: none;
  }

  /*For Batches*/

  .column a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
  }

  .column h3 {
    color:#F39C12;
  }

  .nav-item.dropdown .nav-link.dropdown-toggle {
    background-color: #F39C12;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .nav-item.dropdown .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 100;
    width: 1000px; 
    left: 40%; 
    transform: translateX(-35%);
    border-bottom: 2px solid orange;
  }

  .nav-item.dropdown:hover .dropdown-content {
    display: block;
  }

  .nav-item.dropdown .column {
    float: left;
    width: 20%;
    padding: 10px;
    height: 400px; 
  }

  .nav-item.dropdown .column h3 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
  }

  .nav-item.dropdown .column a {
    color: black;
    font-weight: light;
    padding: 10px;
    text-decoration: none;
    display: block;
  }

  .nav-item.dropdown .column a:hover,
  .nav-item.dropdown .column a .active {
    background-color: #2904F9;
    color:white;
    border-radius:20px; 
    text-decoration: none;
  }

  .nav-item.dropdown .column a:hover i {
    color: #fff; /* Change text color of the icon to white on hover */
  }
  .dropright-item{
    font-size: 18px;
  }
  .nav-item.dropdown .column h3 {
    border-bottom: 1px solid black; /* Add a white line below each h3 element */
    padding-bottom: 5px; /* Add some padding for better visual separation */
    margin-bottom: 0px; /* Adjust margin as needed */
  }
}
`;

const Navbar = () => {
  const [isRow2Fixed, setIsRow2Fixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const row1 = document.querySelector(".row1");
      // const row2 = document.querySelector(".row2");
      const row1Rect = row1.getBoundingClientRect();

      if (row1Rect.bottom <= 0) {
        setIsRow2Fixed(true);
      } else {
        setIsRow2Fixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const renderBatchesDropdown = () => {
    return (
      <li
        className="nav-item dropdown hover"
        style={{ marginLeft: "25px", marginRight: "25px" }}
      >
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          style={{
            border: "none",
            color: "white",
          }}
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          Batches
        </Link>
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Engineering</h3>
                <Link
                  href="/engineering-batches/arjuna-class-11"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "#f39c12",
                      marginRight: "5px",
                    }}
                  ></i>
                  Arjuna
                </Link>
                <Link
                  href="/engineering-batches/chaitanya-class-12"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Chaitanya
                </Link>
                <Link
                  href="/engineering-batches/eklavya-class-13"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Eklavya
                </Link>
              </div>
              <div className="column">
                <h3>Medical</h3>
                <Link
                  href="/medical-batches/ananta-class-11"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Ananta
                </Link>
                <Link
                  href="/medical-batches/sudarshan-class-12"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sudarshan
                </Link>
                <Link
                  href="/medical-batches/swadhyaya-class-13"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Swadhyaya
                </Link>
              </div>
              <div className="column">
                <h3>Foundation</h3>
                <Link
                  href="/foundation-batches/aadhya-class-06"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Aadhya
                </Link>
                <Link
                  href="/foundation-batches/abhinav-class-07"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Abhinav
                </Link>
                <Link
                  href="/foundation-batches/abhyas-class-08"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Abhyas
                </Link>
                <Link
                  href="/foundation-batches/aarohan-class-09"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Aarohan
                </Link>
                <Link
                  href="/foundation-batches/atal-class-10"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Atal
                </Link>
              </div>
              <div className="column">
                <h3>DLP</h3>
                <Link
                  href="/foundation-batches/sankalp-class-10-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sankalp
                </Link>
                <Link
                  href="/engineering-batches/utkarsh-class-11-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Utkarsh
                </Link>
                <Link
                  href="/engineering-batches/lakshya-class-12-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Lakshya
                </Link>
                <Link
                  href="/engineering-batches/abhiyaan-class-13-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Abhiyaan
                </Link>
                <Link
                  href="/medical-batches/yukti-class-11-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Yukti
                </Link>
                <Link
                  href="/medical-batches/sarthak-class-12-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sarthak
                </Link>
                <Link
                  href="/medical-batches/pragya-class-13-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Pragya
                </Link>
              </div>
              <div className="column">
                <h3>Boards</h3>
                <Link
                  href="/board-batches/sammarsa-class-11-pcm"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sammarsa
                </Link>
                <Link
                  href="/board-batches/vikash-class-12-pcm"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Vikash
                </Link>
                <Link
                  href="/board-batches/daksh-class-11-pcb"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Daksh
                </Link>
                <Link
                  href="/board-batches/samridhi-class-12-pcb"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Samridhi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  const renderBatchesDropdown1 = () => {
    return (
      <li
        className="nav-item dropdown hover"
        style={{ marginLeft: "25px", marginRight: "25px" }}
      >
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          style={{
            border: "none",
            color: "black",
            fontSize: "20px",
            backgroundColor: "white",
            textDecoration: "none",
          }}
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          Batches
        </Link>
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Engineering</h3>
                <Link
                  href="/engineering-batches/arjuna-class-11"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "#f39c12",
                      marginRight: "5px",
                    }}
                  ></i>
                  Arjuna
                </Link>
                <Link
                  href="/engineering-batches/chaitanya-class-12"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Chaitanya
                </Link>
                <Link
                  href="/engineering-batches/eklavya-class-13"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Eklavya
                </Link>
              </div>
              <div className="column">
                <h3>Medical</h3>
                <Link
                  href="/medical-batches/ananta-class-11"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Ananta
                </Link>
                <Link
                  href="/medical-batches/sudarshan-class-12"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sudarshan
                </Link>
                <Link
                  href="/medical-batches/swadhyaya-class-13"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Swadhyaya
                </Link>
              </div>
              <div className="column">
                <h3>Foundation</h3>
                <Link
                  href="/foundation-batches/aadhya-class-06"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Aadhya
                </Link>
                <Link
                  href="/foundation-batches/abhinav-class-07"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Abhinav
                </Link>
                <Link
                  href="/foundation-batches/abhyas-class-08"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Abhyas
                </Link>
                <Link
                  href="/foundation-batches/aarohan-class-09"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Aarohan
                </Link>
                <Link
                  href="/foundation-batches/atal-class-10"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Atal
                </Link>
              </div>
              <div className="column">
                <h3>DLP</h3>
                <Link
                  href="/foundation-batches/sankalp-class-10-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sankalp
                </Link>
                <Link
                  href="/engineering-batches/utkarsh-class-11-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Utkarsh
                </Link>
                <Link
                  href="/engineering-batches/lakshya-class-12-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Lakshya
                </Link>
                <Link
                  href="/engineering-batches/abhiyaan-class-13-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Abhiyaan
                </Link>
                <Link
                  href="/medical-batches/yukti-class-11-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Yukti
                </Link>
                <Link
                  href="/medical-batches/sarthak-class-12-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sarthak
                </Link>
                <Link
                  href="/medical-batches/pragya-class-13-distance"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Pragya
                </Link>
              </div>
              <div className="column">
                <h3>Boards</h3>
                <Link
                  href="/board-batches/sammarsa-class-11-pcm"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Sammarsa
                </Link>
                <Link
                  href="/board-batches/vikash-class-12-pcm"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Vikash
                </Link>
                <Link
                  href="/board-batches/daksh-class-11-pcb"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Daksh
                </Link>
                <Link
                  href="/board-batches/samridhi-class-12-pcb"
                  className="dropright-item"
                >
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Samridhi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  return (
    <StyledDiv10>
      <div className="row1" style={{ display: "row" }}>
        <div className="bg-white flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="navbar-brand">
              <Image
                src={mainlogo}
                alt="IIT Academy logo"
                style={{ height: "75px", width: "auto", marginLeft: "1vw" }}
                unoptimized
              />
            </Link>
          </div>
          <div className="flex items-center">
            {/*<div className="header-col3">
              <Link href="/Admission-form" className="header-col12">
                <img src={admission} alt="" />
              </Link>
            </div>*/}
            <div className="header-col21">
              <a
                href="https://wa.me/919205704041?text=I have a query.&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
                className="navbar-brand"
              >
                <Image src={whatsapp} alt="" unoptimized />
              </a>
            </div>
            <div className="header-col22">
              <a href="tel:9205704041" className="navbar-brand">
                <Image src={call} alt="" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isRow2Fixed ? (
        <div className="row2-fixed">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
              <div
                className="container-fluid1"
                // style={{ backgroundColor: "white " }}
              >
                <div className="navbarTogglerDemo01" class="navbar-collapse">
                  <ul
                    className="navbar-nav mx-auto mb-2 mb-lg-0 "
                    style={{
                      fontSize: "20px",
                      fontFamily: "comforta",
                      fontWeight: "bold",
                      color: "black",
                      zIndex: "1000",
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
                        marginRight: "25px",
                      }}
                    >
                      <Link
                        href="/"
                        className="nav-link"
                        activeclassname="active"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          backgroundColor: "white",
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown hover">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          marginLeft: "25px",
                          marginRight: "25px",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        About
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/about-iit-academy"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            IIT Academy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/director-message"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Welcome Message
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/why-iit-academy"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Why IIT Academy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/iit-academy-scholarship-test"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            IAST
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/frequently-asked-questions"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            FAQ&apos;s
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {renderBatchesDropdown1()}
                    <div className={`header-col1  text-center`}>
                      <Image src={mono} alt="" style={{ height: "50px" }} />
                    </div>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Admission
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/fees-structure"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Fee Structure
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/admission-process"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Process
                          </Link>
                        </li>
                        {/* <li>
                        <Link
                          href="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Pay Fees Online
                        </Link>
                      </li> */}
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Pay Fees Online
                          </div>
                        </li>
                        <li>
                          <Link
                            href="/admission-enquiry"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Enquiry
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-policy" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Privacy policy
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{
                        marginLeft: "25px",
                        marginRight: "25px",
                      }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Login Section
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/students-login"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Students
                          </Link>
                        </li>
                        <li>
                          <Link href="/faculty-login" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Faculty
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        role="button"
                        href="#"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Contact Us
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/careers" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link href="/internship" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Internship
                          </Link>
                        </li>
                        <li>
                          <Link href="/blogs" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Contact Us
                          </div>
                        </li>
                        <li>
                          <Link
                            href="https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing"
                            className="dropdown-item"
                            target="_blank"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Brochure
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>
      ) : (
        <div className="row2">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
              <div
                className="container-fluid"
                style={{ backgroundColor: "#F39C12" }}
              >
                <div className="navbarTogglerDemo01" class=" navbar-collapse">
                  <ul
                    className="navbar-nav mx-auto mb-2 mb-lg-0 "
                    style={{
                      fontSize: "20px",
                      fontFamily: "comforta",
                      fontWeight: "bold",
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
                        marginRight: "25px",
                      }}
                    >
                      <Link
                        href="/"
                        className="nav-link"
                        activeclassname="active"
                        style={{
                          color: "White",
                          textDecoration: "none",
                          backgroundColor: "#F39C12",
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown hover">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          marginLeft: "25px",
                          marginRight: "25px",
                          color: "White",
                          zIndex: "1000",
                        }}
                        aria-expanded="false"
                      >
                        About
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/about-iit-academy"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            IIT Academy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/director-message"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Welcome Message
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/why-iit-academy"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Why IIT Academy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/iit-academy-scholarship-test"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            IAST
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/frequently-asked-questions"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            FAQ&apos;s
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {renderBatchesDropdown()}
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Admission
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/fees-structure"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Fee Structure
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/admission-process"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Process
                          </Link>
                        </li>
                        {/* <li>
                        <Link
                          href="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Pay Fees Online
                        </Link>
                      </li> */}
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Pay Fees Online
                          </div>
                        </li>
                        <li>
                          <Link
                            href="/admission-enquiry"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Enquiry
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-policy" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Privacy policy
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{
                        marginLeft: "25px",
                        marginRight: "25px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Login Section
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/students-login"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Students
                          </Link>
                        </li>
                        <li>
                          <Link href="/faculty-login" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Faculty
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Result
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            JEE-Mains
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            JEE-Advance
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            NEET
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Boards
                          </div>
                        </li>
                        {/* Link href="/" */}
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            KVPY
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Contact Us
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/careers" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link href="/internship" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Internship
                          </Link>
                        </li>
                        <li>
                          <Link href="/blogs" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Contact Us
                          </div>
                        </li>
                        <li>
                          <Link
                            href="https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing"
                            className="dropdown-item"
                            target="_blank"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Brochure
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>
      )}
    </StyledDiv10>
  );
};

export default Navbar;

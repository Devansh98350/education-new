"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link detection
import styled from "styled-components";
import mainlogo from "../../../public/assets/homepage/IIT_Academy.webp";
const NavLink = ({ href, children, className }) => (
  <Link href={href || "#"} passHref>
    <StyledAnchor className={className}>{children}</StyledAnchor>
  </Link>
);
const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid #f39c12;
  padding: 5px 10px;
  .sidenav {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: white; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s;
    font-size: 19px;
  }
  .active {
    background-color: blue;
  }
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 19px;
    background-color: white;
    color: black;
    display: block;
    transition: 0.3s;
  }
  .sidenav .closebtn {
    position: absolute;
    text=align: right;
    top: 0;
    border-bottom: 1px solid white;
    right: 0;
    font-size: 48px;
    color: #111;
    margin-top: -15px;
  }
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 475px) {
    .sidenav {
      width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .sidenav {
      width: 90%;
    }
  }
  @media screen and (max-width: 340px) {
    .sidenav {
      width: 95%;
    }
  }
  @media screen and (max-width: 320px) {
    .sidenav {
      width: 100%;
    }
  }
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const HamburgerIcon = styled.span`
  font-size: 30px;
`;
const UserDetails = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
`;
const UserImage = styled.img`
  margin-left: 5px;
  width: auto;
  height: 75px;
  margin-right: 10px;
`;
const Details = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  border-bottom: 4px solid #f39c12;
  width: 100%;
  padding: 5px 10px;
`;
const Image = styled.img`
  margin-left: 5px;
  width: auto;
  height: 75px;
  margin-right: 10px;
`;
const SidebarContent = styled.div`
  background-color: white;
`;
const CloseButton = styled.a`
  cursor: pointer;
  color: black; /* Add your desired color */
`;
// Styled component for the dropdown menu
const DropdownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid orange;
  border-top: 1px solid orange;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;
const DropdownMenu1 = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid blue;
  border-top: 1px solid blue;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;

// Styled component for the dropdown toggle (navigation link with dropdown)
const DropdownToggle = styled(NavLink)`
  color: white;
  display: block;
  padding: 1px 1px;
  text-decoration: none;
  transition: 0.3s;
  background-color: white;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownToggle1 = styled(NavLink)`
  color: blue;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownItem = styled.li`
  color: white;
  padding: 2px 2px;
  text-decoration: none;
  display: block;
  transition: 0.3s;

  &:hover {
    background-color: #555;
  }
`;
const StyledAnchor = styled.a`
  color: white;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  background-color: red;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: blue;
  }
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <StyledSidebarContainer>
      <MenuButton onClick={toggleSidebar}>
        <HamburgerIcon>&#9776;</HamburgerIcon>
      </MenuButton>
      <UserDetails>
        <UserImage src={mainlogo} alt="IIT Academy logo" />
      </UserDetails>
      {isSidebarOpen && (
        <SidebarContent>
          <div id="mySidenav" className="sidenav">
            <CloseButton className="closebtn" onClick={closeSidebar}>
              &times;
            </CloseButton>
            <Details>
              <Image src={mainlogo} alt="IIT Academy logo" />
            </Details>

            <NavLink href="/" exact>
              Home
            </NavLink>
            <DropdownToggle
              href="#"
              onClick={() => toggleDropdown("about")}
              className="dropdown-toggle"
            >
              About
            </DropdownToggle>
            {dropdownOpen.about && (
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/about-iit-academy" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    IIT Academy
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/director-message" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Welcome Message
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/why-iit-academy" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Why IIT Academy
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    href="/iit-academy-scholarship-test"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    IAST
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    href="/frequently-asked-questions"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    FAQ&apos;s
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Gallery
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              href="#"
              onClick={() => toggleDropdown("admission")}
              className="dropdown-toggle"
            >
              Admission
            </DropdownToggle>
            {dropdownOpen.admission && (
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/fees-structure" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Fee Structure
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/admission-process" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Admission Process
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Pay Fees Online
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/admission-enquiry" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Admission Enquiry
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/our-policy" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Privacy policy
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              href="#"
              onClick={() => toggleDropdown("batches")}
              className="dropdown-toggle"
            >
              Batches
            </DropdownToggle>
            {dropdownOpen.batches && (
              <DropdownMenu1>
                <DropdownToggle1
                  href="#"
                  onClick={() => toggleDropdown("engineering")}
                  className="dropdown-toggle"
                >
                  Engineering
                </DropdownToggle1>
                {dropdownOpen.engineering && (
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        href="/engineering-batches/arjuna-class-11"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Arjuna
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/engineering-batches/chaitanya-class-12"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Chaitanya
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/engineering-batches/eklavya-class-13"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Eklavya
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  href="#"
                  onClick={() => toggleDropdown("medical")}
                  className="dropdown-toggle"
                >
                  Medical
                </DropdownToggle1>
                {dropdownOpen.medical && (
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        href="/medical-batches/ananta-class-11"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Ananta
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/medical-batches/sudarshan-class-12"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Sudarshan
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/medical-batches/swadhyaya-class-13"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Swadhyaya
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  href="#"
                  onClick={() => toggleDropdown("foundation")}
                  className="dropdown-toggle"
                >
                  Foundation
                </DropdownToggle1>
                {dropdownOpen.foundation && (
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        href="/foundation-batches/aadhya-class-06"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Aadhya
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/foundation-batches/abhinav-class-07"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Abhinav
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/foundation-batches/abhyas-class-08"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Abhyas
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/foundation-batches/aarohan-class-09"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Aarohan
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/foundation-batches/atal-class-10"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Atal
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  href="#"
                  onClick={() => toggleDropdown("distance")}
                  className="dropdown-toggle"
                >
                  Distance Learning
                </DropdownToggle1>
                {dropdownOpen.distance && (
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        href="/foundation-batches/sankalp-class-10-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Sankalp
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/engineering-batches/utkarsh-class-11-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Utkarsh
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/engineering-batches/lakshya-class-12-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Lakshya
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/engineering-batches/abhiyaan-class-13-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Abhiyaan
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/medical-batches/yukti-class-11-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Yukti
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/medical-batches/sarthak-class-12-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Sarthak
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/medical-batches/pragya-class-13-distance"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Pragya
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  href="#"
                  onClick={() => toggleDropdown("boards")}
                  className="dropdown-toggle"
                >
                  Boards
                </DropdownToggle1>
                {dropdownOpen.boards && (
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        href="/board-batches/sammarsa-class-11-pcm"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Sammarsa
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/board-batches/vikash-class-12-pcm"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Vikash
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/board-batches/daksh-class-11-pcb"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Daksh
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="/board-batches/samridhi-class-12-pcb"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Samridhi
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownMenu1>
            )}

            <DropdownToggle
              href="#"
              onClick={() => toggleDropdown("login")}
              className="dropdown-toggle"
            >
              Login Section
            </DropdownToggle>
            {dropdownOpen.login && (
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/students-login" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Students
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/faculty-login" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Faculty
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              href="#"
              onClick={() => toggleDropdown("result")}
              className="dropdown-toggle"
            >
              Result
            </DropdownToggle>
            {dropdownOpen.result && (
              <DropdownMenu>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Mains
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Advance
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    NEET
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Boards
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    KVPY
                  </div>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              href="#"
              onClick={() => toggleDropdown("contact")}
              className="dropdown-toggle"
            >
              Contact Us
            </DropdownToggle>
            {dropdownOpen.contact && (
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/careers" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Careers
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/internship" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Internship
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#" className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Contact Us
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            )}

            <DropdownToggle href="/blogs">Blogs</DropdownToggle>

            <NavLink href="https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing">
              Brochure
            </NavLink>
          </div>
        </SidebarContent>
      )}
    </StyledSidebarContainer>
  );
};

export default Sidebar;

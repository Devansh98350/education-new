import React from "react";
import "./Testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import zero from "../../../public/assets/home_page/10.jpeg";
import first from "../../../public/assets/home_page/01.png";
import second from "../../../public/assets/home_page/10.jpeg";
import third from "../../../public/assets/home_page/03.png";
import Image from "next/image";

function Testimonials() {
  return (
    <>
      <h1 className="testimonial-heading">We are adored by our students!</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper2"
      >
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <Image
              src={first}
              alt="Loading.."
              className="testimonial-img"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="testimonial1-para">
              &quot; Choosing IIT Academy for my NEET preparation was a wise
              decision. The teachers are not only experts in their fields but
              also approachable and supportive. The study environment is
              conducive to learning, and the regular doubt-solving sessions have
              been invaluable. I feel confident about acing NEET, thanks to IIT
              Academy. &quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <Image
              src={third}
              alt="Loading.."
              className="testimonial-img"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="testimonial1-para">
              &quot; The faculty at IIT Academy are highly experienced and
              passionate about teaching. They make complex concepts easy to
              understand and provide constant support throughout the preparation
              journey. The study material is comprehensive and covers all the
              important topics for the exams. &quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <Image
              src={zero}
              alt="Loading.."
              className="testimonial-img"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="testimonial1-para">
              &quot; As a JEE aspirant, I was looking for a course that could
              provide me with proper guidance and support throughout my
              preparation journey. That&apos;s when I came across IIT Academy
              and it turned out to be the best decision I ever made. The regular
              interaction with the faculty team and mentors provided me with the
              necessary guidance to rectify my weak points. &quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <Image
              src={second}
              alt="Loading.."
              className="testimonial-img"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="testimonial1-para">
              &quot; IIT Academy&apos;s NEET program exceeded my expectations.
              The faculty members are passionate about teaching, and the
              emphasis on practical applications of concepts has been immensely
              helpful. The library resources and online study materials are
              exhaustive, leaving no stone unturned in my NEET preparation
              journey. Highly recommended! &quot;
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonials;

import React from "react";
import Button from "../../component/Buttons/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Bulb from "../../assets/images/bulb.png";
import Hover from "../../assets/images/HoverImg.png";
import Hover1 from "../../assets/images/HoverImg1.png";
import Hands from "../../assets/images/Hands.svg";
import SingleService from "./component/SingleService/SingleService";
import { services, carouselSettings, carouselData } from "../../data";
import Slider from "react-slick";
import SingleCarousel from "./component/Carousel/SingleCarousel";
import { motion } from "framer-motion";
import BgLeft from "../../assets/images/bg-left.png";
import SideLogo from "../../assets/images/Home-side-img.svg";
import styled from "styled-components";
import MainSection from "../../component/Common/MainSection";
import SingleAbout from "../../component/Home/SingleAbout";
import SingleCoreValues from "../../component/Home/SingleCoreValues";
import Image from "../../assets/images/img1.svg";
import Image2 from "../../assets/images/img2.svg";
import Image3 from "../../assets/images/img4.svg";
import Image4 from "../../assets/images/img5.svg";
import Image5 from "../../assets/images/img6.svg";
import Core from "../../assets/images/core1.svg";
import Core1 from "../../assets/images/core2.svg";
import Core2 from "../../assets/images/core3.svg";
import SingleServices from "../../component/Home/SingleServices";
import ServiceImage from "../../assets/images/Page-1.svg";
import ServiceImage2 from "../../assets/images/Page-2.svg";
import ServiceImage3 from "../../assets/images/Page-3.svg";
import SliderCont from "../../assets/images/frame-slider 1.svg";
import Slider1 from "../../assets/images/slider1.png";
import Slider3 from "../../assets/images/slider1.png";
import Slider2 from "../../assets/images/slider2.png";
import Analytics from "../../assets/images/analytics.svg";
import Image8 from "../../assets/images/right-arrow.svg";

const HomePage = () => {
  const servicesView = services.map((item) => (
    <SingleService {...item} key={item.id} />
  ));
  const carouselView = carouselData.map((item) => (
    <SingleCarousel {...item} key={item.id} />
  ));

  return (
    <motion.div
      className=" main-home-container relative"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="relative pt-20 pb-5  lg:pl-16 main-wrapper md:pl-12 pl-6 lg:grid lg:grid-cols-2 gap-5">
        <div className=" h-full justify-center items-center lg:pt-32 md:pt-24 pt-24 col-span-1 ">
          <img
            src={BgLeft}
            alt="side picture"
            className="main-bg-left absolute right-0 bottom-0"
          />
          <h1
            data-aos="fade"
            data-aos-duration="2000"
            className="font-semibold main-text "
          >
            Bring your tech ideas to life
          </h1>
          <h6
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
            // data-aos-offset="100"
            className="sub-main-text3"
          >
            Our focus is the agile development of web, cloud, and mobile
            applications – and helping organizations create and sustain digital
            innovation.
          </h6>
          <h6
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            // data-aos-offset="200"
            className="sub-main-text3"
          >
            Web and Software development company that delivers
          </h6>
          <h6
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1500"
            // data-aos-offset="200"
            className="sub-main-text3"
          >
            We enable progressive businesses to transform, scale and gain
            competitive advantage, through the expert delivery of innovative,
            tailor-made software applications.
          </h6>
          <button className="home-btn sm:mb-5 animate-bounce">
            Get Started
          </button>
          {/* <div className="absolute invisible sm:visible lg:bottom-8 lg:right-10 md:right-0 bottom-3 md:bottom-4 flex">
            <NavLink className="mr-14 single-icon animate-pulse" to="#">
              <FaFacebook className="home-icon" />
            </NavLink>
            <NavLink
              className="mr-14 single-icon animate-pulse"
              to="https://twitter.com/24DesignCompany"
              target="_blank"
            >
              <FaTwitter className="home-icon" />
            </NavLink>
            <NavLink className="mr-14 single-icon animate-pulse" to="#">
              <FaLinkedin className="home-icon" />
            </NavLink>
            <NavLink className="mr-14 single-icon animate-pulse" to="#">
              <FaWhatsapp className="home-icon" />
            </NavLink>
          </div> */}
        </div>
        <div className="w-full h-full col2 col col-span-1 lg:pt-16 xl:pt-5 md:pt-5 pt-16">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-offset="100"
            className="home-side-img-cont"
          >
            <img
              src={SideLogo}
              alt="Side logo"
              className="block home-side-img w-full h-full"
            />
          </div>
        </div>
      </main>

      <MainSection className="">
        <div className="pt-20 w-full pb-20">
          <SingleAbout
            img={Image}
            text1="We are a global IT Company"
            title="Connecting Business and Technology"
            text2="We help you harness the cutting edge of tech to boost operational efficiencies, ensure faster time to value, and revolutionize customer care. Our service offering is built around helping you launch and sustain your digital transformation long-term."
            showBtn={true}
          />
          <SingleAbout
            reversed
            img={Image2}
            title="Our mission"
            text2="Our mission is to enable progressive businesses and ideas to transform, scale and gain competitive advantage, through the expert delivery of innovative, tailor-made software solutions. Our solutions help organizations and people around the world to perform more effectively and achieve better outcomes."
          />
        </div>
        {/* CORE VALUES SECTION */}
        <div className="w-full">
          <h6 className="text2  sm:text-4xl text-xl font-bold font-sans text-center mb-5 ">
            Core Values
          </h6>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-offset="100"
            className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 gap-24 my-20"
          >
            <SingleCoreValues
              img={Core}
              title="CREATIVITY"
              text="Teamwork like no other, be assured of a fast, percise yet accurate result."
            />
            <SingleCoreValues
              img={Core1}
              title="TEAM WORK"
              text="Teamwork like no other, be assured of a fast, percise yet accurate result."
            />
            <SingleCoreValues
              img={Core2}
              title="EXCELLENCE"
              text="Teamwork like no other, be assured of a fast, percise yet accurate result."
            />
          </div>
        </div>
      </MainSection>
      {/* OUR SERVICES SECTION */}
      <MainSection bg="#D4E1F4">
        <div className="w-full py-20">
          <h6 className="text2  sm:text-4xl text-xl font-bold font-sans text-center pb-20 ">
            Our Services
          </h6>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-offset="100"
            className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <SingleServices img={ServiceImage} title="Product Development" />
            <SingleServices
              img={ServiceImage2}
              title="Web Application Development"
            />
            <SingleServices img={ServiceImage3} title="Mobile Development" />
          </div>
          <div className="other-service-btn w-full flex-row flex mt-10">
            <button className="home-btn  sm:mb-5 animate-bounce">
              See All
            </button>
          </div>
        </div>
      </MainSection>
      {/* OTHER SERVICES */}
      <MainSection className="">
        <div className="w-full py-20">
          <SingleAbout
            img={Image3}
            title="What We Do"
            text2="At 24 Design Company, we pride ourselves on delivering innovative, digital experiences that make an impact. Since 2008, we’ve proudly partnered with start-ups, SMEs, large corporate companies and everyone in between to unlock value through creativity, technology, and business-minded thinking."
          />
          <SingleAbout
            reversed
            img={Image4}
            title="What We Believe."
            text2="We believe that creating memorable experiences is the best way to connect with your customers. From dynamic web designs to cutting-edge digital marketing strategies, we believe that the custom solutions we create today will transcend the trends of tomorrow. No matter your product or service, you have a story to tell. And, we’re the best agency to tell it."
          />
          <SingleAbout
            img={Image5}
            title="Who We Are."
            text2="We are an innovative, reliable and curious company providing strategic IT business solutions and services for complex and simple business problems, in multiple industry sectors including retail, healthcare, finance, education, and more."
            text3="Our vast technology and industry expertise enable us to focus on cutting-edge Internet technologies with the aim to develop scalable, secure and easy-to-use web applications that work across multiple devices."
            text4="We believe that the judicious use of technology, together with a good design can reduce complexity, connect individuals, and provide valuable insights, all of which ultimately help businesses succeed."
            text5="We’re thinkers and innovators who are determined to re-imagine the way we design and develop solutions."
          />
        </div>
      </MainSection>
      <MainSection bg="#F7F8F9">
        <div className="w-full md:pt-20 pt-10 pb-20">
          <h6 className="text2  sm:text-4xl text-xl font-bold font-sans text-center ">
            Design is our passion
          </h6>
          <p className="text3 text-center mx-auto py-5 font-normal sm:text-base text-xs lg:w-3/5 ">
            Design is our Passion. We have delivered various purpose-led
            designs. See some of the designs we have brought to life.
          </p>
          <div className="other-service-btn w-full flex-row flex ">
            <button className="home-btn  sm:mb-5 animate-bounce">
              View Projects
            </button>
          </div>
          {/* CAROUSEL */}
          <div className="w-full flex flex-col home-slider-cont mx-auto mt-10">
            {/* <div className="slider-cont mx-auto bg-primary-light"> */}
            <Slider
              className="w-full caro-slider mx-auto"
              arrows={false}
              {...carouselSettings}
            >
              {/* <SingleCarousel image={Slider2} /> */}
              {carouselView}
              {/* {carouselView} */}
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </MainSection>
      <MainSection>
        <SectionLast className=" rounded-md mx-auto my-24 py-5 px-10">
          <MainCont className="w-full lg:grid lg:grid-cols-2 gap-20 pb-5">
            <div
              className="single-text-cont w-full lg:mb-0 mb-10 pt-14"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <h6 className="text1 sm:text-lg text-base font-normal text mb-5">
                Interested in building a project
              </h6>

              <h4 className="text2 sm:text-3xl text-xl font-normal font-sans">
                Got an idea or a Project?
              </h4>
              <p className="text3 sm:text-base text-sm font-normal pt-6">
                We love helping you solve challenges, launch new products, or
                improve existing ones with purpose-led designs.
              </p>
              <p className="text3 sm:text-base text-sm font-normal pt-6">
                Tell us about your business idea or challenges to start working
                on a solution with top software development experts.
              </p>

              <button className="flex flex-row single-btn outline-none focus:outline-none rounded-md capitalize mt-5">
                Get started
                <img src={Image8} alt="" className="block single-img ml-5" />
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="single-img-cont mt-10"
            >
              <img
                src={Analytics}
                alt="illustration-image"
                className="block single-img "
              />
            </div>
          </MainCont>
          {/* <SingleAbout
            reversed
            img={Analytics}
            text1="Interested in building a project"
            title="Got an idea or a Project?"
            text2="We love helping you solve challenges, launch new products, or improve existing ones with purpose-led designs."
            text3="Tell us about your business idea or challenges to start working on a solution with top software development experts."
            showBtn={true}
          /> */}
        </SectionLast>
      </MainSection>
    </motion.div>
  );
};

export default HomePage;

const SectionLast = styled.section`
  width: 90%;
  background: #f7f8f9;
`;
const MainCont = styled.div`
  .text1 {
    color: #adb1b5;
  }
  .text2 {
    color: #1d1d1f;
  }
  .text3 {
    color: #4f4f4f;
  }
  .single-btn {
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    height: 50px;
    transition: all 0.5s ease-in-out;
    background: transparent;
    color: #1d1d1f;
    &:hover {
      border: 1px solid #1d1d1f;
      //   color: #fff;
      padding-left: 20px;
    }
  }
  .single-img {
    padding-top: -100px;
  }
`;

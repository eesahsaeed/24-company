import React, { useEffect } from "react";
import "./Footer.css";
import Image from "../../assets/images/24 Design Company.png";
import Arrow from "../../assets/icons/thin_long_02_up.svg";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaAngleDoubleRight,
} from "react-icons/fa";
import {
  Link as scrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Footer = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer container bg-primary-main pt-20 pb-5 lg:pb-12 min-w-full lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6 ">
      {/* single footer */}
      <div className="single-footer min-w-full mb-5">
        <div className=" footer-divider lg:w-2/5 w-full invisible lg:visible bg-primary-light"></div>
        <div className="mx-auto lg:mb-0 mb-10 ">
          <img src={Image} alt="24 Design Logo" />
        </div>
        <div className="lg:w-2/5 w-full">
          <div className=" footer-icon-cont mx-auto  pb-2 flex">
            {/* SINGLE ICON */}
            <NavLink
              className="mr-14 single-icon footer-icon  animate-pulse"
              to="#"
            >
              <FaFacebook className="home-icon" />
            </NavLink>
            {/* SINGLE ICON */}
            <NavLink
              className="mr-14 single-icon footer-icon animate-pulse"
              to="https://twitter.com/24DesignCompany"
              target="_blank"
            >
              <FaTwitter className="home-icon" />
            </NavLink>
            {/* SINGLE ICON */}
            <NavLink
              className="mr-14 single-icon footer-icon animate-pulse"
              to="#"
            >
              <FaLinkedin className="home-icon" />
            </NavLink>
            {/* SINGLE ICON */}
            <NavLink
              className="mr-14 single-icon footer-icon animate-pulse"
              to="#"
            >
              <FaWhatsapp className="home-icon" />
            </NavLink>
          </div>
          <div className=" footer-divider w-full mb-2 bg-primary-light"></div>
        </div>
      </div>
      {/* single footer */}
      <div className="single-footer min-w-full mb-5">
        <div className=" footer-divider lg:w-2/5 w-full  t"></div>
        <div className="mx-auto">
          <NavLink
            exact
            className="nav-links footer-links text-center"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className=" footer-divider w-full "></div>
        </div>
      </div>
      {/* single footer */}
      <div className="single-footer min-w-full mb-5">
        <div className=" footer-divider lg:w-2/5 w-full  t"></div>
        <div className="mx-auto">
          <NavLink exact className="nav-links footer-links text-center" to="#">
            Services
          </NavLink>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className=" footer-divider w-full "></div>
        </div>
      </div>
      {/* single footer */}
      <div className="single-footer min-w-full mb-5">
        <div className=" footer-divider lg:w-2/5 w-full  t"></div>
        <div className="mx-auto">
          <NavLink
            exact
            className="nav-links footer-links text-center"
            to="/careers"
          >
            Careers
          </NavLink>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className=" footer-divider w-full "></div>
        </div>
      </div>
      {/* single footer */}
      <div className="single-footer min-w-full mb-5">
        <div className=" footer-divider lg:w-2/5 w-full  t"></div>
        <div className="mx-auto">
          <NavLink
            exact
            className="nav-links footer-links text-center"
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className=" footer-divider w-full "></div>
        </div>
      </div>
      {/* single footer */}
      <div className="single-footer min-w-full mb-5">
        <div className="lg:w-2/5 w-full">
          <div className=" footer-divider  w-full bg-primary-light lg:visible invisible"></div>
          <p className="text-primary-light text-light footer-text lg:visible invisible">
            © 2020. 24 Design Company. All Rights Reserved.
          </p>
        </div>
        <div className="mx-auto">
          <button
            onClick={scrollToTop}
            className="block mx-auto outline-none scroll-btn"
            smooth="true"
            duration={1500}
          >
            <img
              src={Arrow}
              alt="24 Design Company"
              className="animate-bounce block mx-auto cursor-pointer"
            />
          </button>
          <p className="text-center text-sm text-primary-light font-normal lg:pb-0 pb-5">
            To the top
          </p>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className=" footer-divider w-full bg-primary-light"></div>
          <span className="text-primary-light text-light footer-text1  footer-text lg:invisible visible">
            © 2020. 24 Design Company. All Rights Reserved.
          </span>
          <span className="text-primary-light text-right lg:mr-2 footer-text2  text-light footer-text">
            Terms of Service
          </span>
          <span className="text-primary-light text-right text-light footer-text">
            Privacy policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

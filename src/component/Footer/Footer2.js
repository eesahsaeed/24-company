import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/main-logo.png";
import styled from "styled-components";
import { footerServices } from "../../data";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer2 = () => {
  const year = new Date().getFullYear();

  return (
    <MainFooter className="text-white mt-24 text-sm pt-10">
      <div className="text-left bg-primary py-14 md:px-20 px-8">
        <div className="myContainer">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* first */}
            <div className=" text-white footer-logo-cont sm:mb-0 mb-10">
              <Link to="/home">
                {" "}
                <img src={logo} alt="logo" style={{ height: 40, width: 150 }} />
              </Link>
              <p className="mt-5">Plot 1A, Road 3, Ikota Villa, Lekki Lagos</p>
              <a
                className="hover:text-secondary block py-1"
                href="tel:+234 704 454 4455"
              >
                +234 704 454 4455
              </a>
              <a
                className="hover:text-secondary"
                href="mailto:info@24discovery.com.ng"
              >
                info@24discovery.com.ng
              </a>
            </div>

            <div className="w-full sub-footer-cont col-span-2 grid md:grid md:grid-cols-3 lg:grid-cols-3 gap-14">
           
              {/* 2nd */}
              <div className="footer-3 w-full h-full md:mt-0 mt-5">
                <p className="footer-text text-base  font-SemiBold mb-5">
                  Services
                </p>
                {footerServices.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    exact
                    className="single-footer-nav bg-transparent text-white-light mb-5 block"
                    activeClassName="footer-active"
                  >
                    <p
                      className="text-sm  font-SansRegular footer-single-nav-text"
                      // onClick={scrollToTop}
                    >
                      {item.title}
                    </p>
                  </NavLink>
                ))}
              </div>
              <div>
              <h1 className="text-base font-SemiBold mb-5">Expertise</h1>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Healthcare</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Logistics</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">FinTech</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Marketplace</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Retail</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Travel</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Education</p>

            </div>   
            <div>
              <h1 className="text-base font-SemiBold mb-5">Insights</h1>
              <p className="text-sm  font-SansRegular text-white-light mb-5">App development cost</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">How to build ridesharing</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">How to build a fitness app</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Build a streaming app</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">CRM for Agriculture</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">How to build a CRM</p>
              <p className="text-sm  font-SansRegular text-white-light mb-5">Web design process</p>

            </div>       
            </div>

           
            
            <div className="">
              <h3 className="font-semibold  text-xl pb-3 footer-text">
                Subscribe
              </h3>

              <form className="flex flex-row footer-input-cont rounded-md w-full px-2">
                <input
                  type="email"
                  placeholder="Enter an email address"
                  className=" text-gray-600 pl-1 focus:outline-none outline-none footer-input "
                  required
                />
                <div className="footer-btn flex flex-row p-1 text-xs rounded-md">
                  <Link to={"/contact"}>
                    <button
                      type="submit"
                      className=" font-normal flex flex-row footer-main-btn rounded-md transition ease-in-out duration-500 outline-none focus:outline-none"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </form>
              <div className="footer-social-cont flex flex-row mt-10">
                <NavLink
                  to="#"
                  className=" bg-transparent text-white-light footer-icon-cont block mr-10 animate-pulse"
                  target="_blank"
                >
                  <FaFacebook className="text-2xl block footer-icon" />
                </NavLink>
                <NavLink
                  to="#"
                  className=" bg-transparent text-white-light footer-icon-cont block mr-10 animate-pulse"
                  target="_blank"
                >
                  <FaTwitter className="text-2xl block footer-icon" />
                </NavLink>
                <NavLink
                  to="#"
                  className=" bg-transparent text-white-light footer-icon-cont block mr-10 animate-pulse"
                  target="_blank"
                >
                  <FaInstagram className="text-2xl block footer-icon" />
                </NavLink>
                <NavLink
                  to="#"
                  className=" bg-transparent text-white-light footer-icon-cont block mr-10 animate-pulse"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-2xl block footer-icon" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-7 md:px-20 px-10 footer-terms-cont"
        style={{ background: "#07112c" }}
      >
        <div className="myContainer flex flex-col lg:flex-row justify-between">
          <div className="flex mb-3 lg:mb-0">
            <Link to='/terms'><span className="text-xs sm:text-sm">Terms of Services</span></Link>
            <div className="border-r-2 border-white mx-4" />
            <Link to='/privacy'><span className="text-xs sm:text-sm">Privacy Policy</span></Link>
          </div>
          <div>
            <p className="text-xs sm:text-sm mt-2">
              &copy; <span>{year}.</span>24 Design Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer2;

const MainFooter = styled.footer`
  background: #0b1930;

  .footer-logo-cont {
    color: #fff;
  }
  .footer-terms-cont {
    color: #fff;
  }
  .footer-text {
    color: #fff;
  }
  .single-footer-nav {
    color: #ddd;
  }
  @media (max-width: 500px) {
    .sub-footer-cont {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .footer-social-cont {
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      margin-left: 20px;
    }
  }
  @media (max-width: 400px) {
    .sub-footer-cont {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .footer-btn {
      font-size: 10px;
    }
  }
  .footer-icon-cont {
    transition: all 0.5s ease-in-out;
    background: transparent;
    outline: none;
    color: #fff;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #8cc152;
    }
  }
  .footer-social-cont {
    align-items: center;
  }
  .footer-icon {
    color: #fff;
  }
  .footer-input-cont {
    width: 100%;
    height: 50px;
    background: #fff;
    align-items: center;
    font-size: 12px;
  }
  .footer-input {
    background: transparent;
    width: 70%;
  }
  .footer-btn {
    width: 30%;
    height: 40px;
    color: #fff;
    background: #2f58ff;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
`;

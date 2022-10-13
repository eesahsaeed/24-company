import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Image2 from "../../assets/images/right-arrow.svg";

const SingleAbout = (props) => {
  const history = useHistory()
  return (
    <>
      {props.reversed ? (
        <MainCont className="w-full lg:grid lg:grid-cols-2 gap-32 pb-5">
          <div
            className="single-text-cont w-full lg:mb-0 mb-10 pt-14"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            {props.text1 && props.text1 !== "" && (
              <h6 className="text1 sm:text-lg text-base font-normal text mb-5">
                We are a global IT Company
              </h6>
            )}

            <h4 className="text2 sm:text-4xl text-xl font-normal font-sans">
              {props.title}
            </h4>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text2}
            </p>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text3}
            </p>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text4}
            </p>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text5}
            </p>
            {props.showBtn && (
              
                
                <button onClick={() => history.push('/contact')} className="flex flex-row single-btn outline-none focus:outline-none rounded-md capitalize mt-5">
                  Get started
                  <img src={Image2} alt="" className="block single-img ml-5" />
                </button>
                
            
            )}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="single-img-cont "
          >
            <img
              src={props.img}
              alt="illustration-image"
              className="block single-img "
            />
          </div>
        </MainCont>
      ) : (
        <MainCont className="w-full lg:grid lg:grid-cols-2 gap-32 pb-5">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="single-img-cont lg:mb-0 mb-10"
          >
            <img
              src={props.img}
              alt="illustration-image"
              className="block single-img "
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="single-text-cont w-full pt-14"
          >
            {props.text1 && props.text1 !== "" && (
              <h6 className="text1 sm:text-lg text-base font-normal text mb-5">
                We are a global IT Company
              </h6>
            )}
            <h4 className="text2 sm:text-4xl text-xl font-normal font-sans">
              {props.title}
            </h4>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text2}
            </p>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text3}
            </p>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text4}
            </p>
            <p className="text3 sm:text-base text-sm font-normal pt-6">
              {props.text5}
            </p>
            {props.showBtn && (
              <button onClick={() => history.push('/contact')} className="flex flex-row single-btn outline-none focus:outline-none rounded-md capitalize mt-2">
                Get started
                <img src={Image2} alt="" className="block single-img ml-5" />
              </button>
            )}
          </div>
        </MainCont>
      )}
    </>
  );
};

export default SingleAbout;

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

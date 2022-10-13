import React from "react";
import styled from "styled-components";

const SingleServices = (props) => {
  return (
    <MaainCont className="w-full flex flex-col rounded-md py-14 px-5 transition-all duration-500 ease-in-out lg:mb-0 mb-10">
      <div className="services-img-cont transition-all duration-500 ease-in-out">
        <img src={props.img} alt="bulb-svg" className="block services-img" />
      </div>
      <h6 className="service-title sm:text-xl text-base text-center font-bold my-5">
        {props.title}
      </h6>
      <p className="text-center sm:text-sm text-sm font-normal services-text">
        {props.text}
      </p>
    </MaainCont>
  );
};

export default SingleServices;

const MaainCont = styled.div`
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 42px 34px rgba(25, 46, 70, 0.25);
  .services-text {
    color: #4f4f4f;
  }
  &:hover {
    transform: scale(1.1);
    .services-img-cont {
      transform: rotate(360deg);
    }
  }
`;

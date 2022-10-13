import React from "react";
import styled from "styled-components";


const SingleCoreValues = (props) => {
  return (
    <MainCont className="w-full flex flex-col lg:mb-0 md:mb-6 mb-20">
      <div className="single-core-img-cont">
        <img
          src={props.img}
          alt="illustration-image"
          className="single-core-img block "
        />
      </div>
      <h6 className="sm:text-xl text-lg font-semibold single-core-title py-5 uppercase">
        {props.title}
      </h6>
      <p className="text-center sm:text-lg text-base single-core-text font-normal">
        {props.text}
      </p>
    </MainCont>
  );
};

export default SingleCoreValues;

const MainCont = styled.div`
  align-items: center;
  justify-content: center;
  .single-core-title {
    color: #1d1d1f;
  }
  .single-core-text {
    color: #4f4f4f;
  }
`;

import React from "react";
import "./SingleCareer.css";
import Image1 from "../../../../assets/images/career1.png";

const SingleCareer = (props) => {
  return (
    <div className="py-5 px-5 mb-10 single-career lg:mr-5">
      <img
        src={props.image}
        alt="24 Design Company"
        className="block mb-5  single-career-img"
      />
      <h6 className="font-medium single-career-text  text-primary-main mb-5">
        {props.title}
      </h6>
      <p className="font-light text-sm ">
        {props.details}
      </p>
    </div>
  );
};

export default SingleCareer;

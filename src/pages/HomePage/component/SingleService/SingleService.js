import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleService.css";
// import Icon from "../../../../assets/images/service1.png";

const SingleService = (props) => {
  return (
    <div className="w-full single-service rounded relative single-service-cont  transition-all duration-500 ease-in-out pt-10 px-7">
      <div>
        <img src={props.image} alt="24 Design" />
      </div>
      <h6 className="font-bold single-service-text1 md:text-2xl text-xl text-primary-main mt-5">
        {props.title}
      </h6>
      <h6 className="font-light single-service-text2 text-xs mt-3 text-primary-main">
        {props.details}
      </h6>
      <NavLink
        to={props.link}
        className="service-btn single-service-btn outline-none w-40 h-9 block mt-7 lg:mt-14 mx-auto border rounded-3xl border-primary-main"
      >
        Know more
      </NavLink>
    </div>
  );
};

export default SingleService;

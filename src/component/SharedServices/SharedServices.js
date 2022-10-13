import React from "react";
import "./SharedService.css";
import Image from "../../assets/images/product1.png";

const SharedServices = (props) => {
  return (
    <div className="mb-4 single-serv py-8 px-5">
      <img src={props.image} alt="24 Design Company" className="mb-5 block shared-img" />
      <h6 className="font-medium shared-text  mb-5 text-primary-main">
        {props.title}
      </h6>
      <p className="font-light text-left text-primary-main lg:text-base text-sm md:w-5/6 shared-sub-text">
        {props.details}
      </p>
    </div>
  );
};

export default SharedServices;

import React from "react";
import "./OurWorkCard.css";

import { NavLink } from "react-router-dom";

const OurWorkCard = (props) => {
  return (
    <NavLink
      to={props.path ? props.path : "/work-details"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      data-aos="fade-up" //please change this to router or '/'
      data-aos-duration="1500"
      data-aos-delay="350"
      className="our__work__card"
    >
      <div className="our__work__card__heading">
        <span>{props.title}</span> - {props.description}
      </div>
      <div className="our__work__card__img__container">
        <img className="our__work__card__img" src={props.image} alt="image" />
      </div>
      <div className="our__work__card__footer">
        <div className="our__work__card__title">{props.category}</div>
        <button className="home-btn sm:mb-5 animate-bounce">Know More</button>
      </div>
    </NavLink>
  );
};

export default OurWorkCard;

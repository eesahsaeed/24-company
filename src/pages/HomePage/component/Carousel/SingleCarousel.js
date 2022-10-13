import React from "react";
import "./SingleCarousel.css";
import styled from "styled-components";

const SingleCarousel = (props) => {
  return (
    <div className="mr-10 carouselItem">
      <img src={props.image} alt="24 Design" className="w-full h-full block" />
    </div>
  );
};

export default SingleCarousel;


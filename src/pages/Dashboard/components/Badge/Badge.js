
import React, {useState} from "react";
import {Button} from "react-bootstrap";

export default function({color}){
  return (
    <span className={`badge-color`} style={{backgroundColor: color}}>
      {color}
      <button className="color-close-btn">X</button>
    </span>
  );
}

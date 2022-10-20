
import React from "react";
import "./SingleJob.css";
import {useNavigate} from "react-router-dom";

const SingleJob = (props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-10 border-primary-light border-b pb-3 flex flex-row justify-between align-middle">
      <div className="">
        <span className="numeric mr-3 md:text-lg text-sm">{props.index + 1}.</span>
        <span className="font-normal job-title md:text-lg text-sm  mr-4">
          {props.title}
        </span>
        <span className="font-light job-lvl  uppercase">{props.level}</span>
      </div>
      <div>
        <button className="passion-btn job-btn flex animate-bounce outline-none md:w-32 md:h-7 border rounded-3xl  w-20 h-6" onClick={() => {
          let elem = document.getElementById("applicationSection");
          window.scrollTo({
            top: elem.offsetTop - 70,
            behavior: "smooth",
          });
          props.setValues({
            jobTitle: props.title,
            level: props.level
          })
        }}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default SingleJob;

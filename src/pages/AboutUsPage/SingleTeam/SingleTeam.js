import React from "react";
import Image from "../../../assets/images/kwam_kissi-nappy-.png";
import './SingleTeam.css'

const SingleTeam = () => {
  return (
    <div className="single-team h-96 w-full rounded-md">
      <div className="w-full h-4/5 rounded-md">
        <img
          src={Image}
          alt="24 Design"
          className="block w-full h-full rounded-md"
        />
      </div>
      <p className="font-bold text-sm text-primary-main text-bold mt-3 mb-1">
        Oluwole Olarewaju
      </p>
      <p className="font-normal text-sm text-primary-main text-normal ">Founder</p>
    </div>
  );
};

export default SingleTeam;

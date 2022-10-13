import React from "react";
import "./SingleBlog.css";
import Image from "../../../../assets/images/blog1.png";
import Divider from "../../../../component/Divider/Divider";

const SingleBlog = (props) => {
  return (
    <div className="w-full  h-96 trending-cont mb-10 flex flex-col ">
      <img src={Image} alt="24 Design Company" className="block  h-60" />
      <div className="pb-5 md:pt-6 pt-5 md:px-8 px-5">
        <p className="trending-date font-light sm:text-base lg:text-lg text-xs mb-3 ">
          November 23, 2020
        </p>
        <p className="font-semibold text-primary-main sm:text-base lg:text-base text-xs ">
          Take your small business online:
        </p>
          <span className="font-normal text-primary-main sm:text-base lg:text-lg text-xs mb-5 block">
            &nbsp;A step-by-step guide.
          </span>
        <Divider />
        <div className=" flex flex-row">
          <p className="trending-date sm:text-sm text-xs  mt-6 border-r pr-1 border-secodary-main mr-1">
            by WolzBauer
          </p>
          <p className="trending-date mt-6  sm:text-sm text-xs ">
            Apr 26, 2020{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

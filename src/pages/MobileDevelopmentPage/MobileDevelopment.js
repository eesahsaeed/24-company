import React from "react";
import "./MobileDevelopment.css";
import { motion } from "framer-motion";
import Image from "../../assets/images/mobile.png";
import Image1 from "../../assets/images/flower-hand.png";
import SharedServices from "../../component/SharedServices/SharedServices";
import {mobileData } from "../../data";

const mobileDevelpment = () => {
  const mobileView = mobileData.map((item) => (
    <SharedServices {...item} key={item.id} />
  ));
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container main-home-container relative"
    >
      <section className="container min-w-full pt-20  lg:pb-20 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6 proj-sec">
        <div className="w-full h-full grid lg:grid-cols-3 gap-0 lg:pt-48 md:pt-24 pt-24">
          {/* COL 1 */}
          <div className="lg:mb-0 mb-24 lg:col-span-2">
            <h6 className="font-bold text-primary-main proj-main-text text-3xl mb-5">
              Mobile Application Development
            </h6>
            <h6 className="font-light proj-sub-text  text-primary-main text-lg">
              We develop powerful applications that provide a thrilling
              experience for your users and bring tangible value to your
              business. Whether native, hybrid or cross platform, our mobile
              development team delivers solutions that run seamlessly on all
              major operating systems and all major mobile devices
            </h6>
          </div>

          {/* Cont 2 */}
          <div className=" mx-auto product-img">
            <img src={Image} alt="24 Design Company" className="block" />
          </div>
        </div>
      </section>
      <section className="container pro-sub-sec min-w-full pt-20  lg:pb-20 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6 proj-sec">
        <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mobileView}
        </div>
      </section>
      <section className="container pro-sub-sec3 min-w-full pt-20  lg:pb-20 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6 ">
        <div className="w-full h-full grid lg:grid-cols-3  gap-10">
          <div className="lg:col-span-2">
            <h6 className="mb-10 font-light pro-sub-sec3-text1">
              Your Business Is In Good Hands
            </h6>
            <p className="font-light mb-10 text-base pro-sub-sec3-text2 lg:w-3/4">
              Passionate about new technologies, we are experts in software
              engineering and agile, able to understand the business issues of
              customers and develop in record time the digital solutions that
              will allow clients to improve their performance.
            </p>
            <p className="font-light text-base pro-sub-sec3-text2 lg:w-3/4">
              Passionate about new technologies, we are experts in software
              engineering and agile, able to understand the business issues of
              customers and develop in record time the digital solutions that
              will allow clients to improve their performance.
            </p>
          </div>
          <div className="mx-auto">
            <img src={Image1} alt="24 Design Company" className="block" />
          </div>
        </div>
      </section>
      <section className="container pro-sub-sec4 min-w-full pt-20  lg:pb-20 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6 ">
        <div className="w-full h-full">
          <h6 className="text-primary-main md:text-3xl text-xl mb-5 font-semibold">
            Our Unique Approach & Process
          </h6>
          <p className="text-primary-main font-light md:text-base text-sm">
            By initiating your project with 24 Design Company, you get a
            dedicated and skilled team backing you up round-the-clock. All our
            processes are customer-oriented, designed to reduce the cost of
            business operations, address IT resourcing challenges, and offer you
            a competitive edge. We start with a deep analysis of your
            requirements and continue our relationship with post-launch support
            and updates.
          </p>
        </div>
      </section>
      <section className="container pro-sub-sec5 min-w-full pt-20  lg:pb-20 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6 ">
        <div className="w-full h-full mx-auto">
          <h6 className="font-medium text-primary-main mb-5  md:text-3xl text-xl text-center">
            GOT AN IDEA OR A PROJECT?
          </h6>

          <p className="text-primary-main lg-2xl md:text-xl text-xl font-light text-center">
            Tell us about your business idea or challenges to start working on a
            solution with top software development experts.
          </p>
          <button className="passion-btn mx-auto flex animate-bounce outline-none w-40 h-9  mt-14 border rounded-3xl border-primary-main bg-primary-main ">
            Get in touch
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default mobileDevelpment;

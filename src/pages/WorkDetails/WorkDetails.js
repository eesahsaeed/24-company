import React from "react";
import "./WorkDetails.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { workData } from "./work";

const WorkDetails = (props) => {
  const data = workData.find((v) => v.slug === props.match.params.slug);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Our Work | 24 Design Company | Latest business and technology news,
          trends, communities.
        </title>
        <link rel="canonical" href="https://24group.com.ng/work-details" />
      </Helmet>
      <motion.div
        className="container main-home-container relative"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full image__container">
          <img
            src={data.image}
            alt="img"
            style={{ width: "100%", height: "100%", borderRadius: 30 }}
          />
        </div>

        <section className="container w-full relative pt-20 pb-5 md:pb-20  lg:pl-28 blog-sub-cont md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
          {/* SERVICES HEADER */}
          <div className="w-full  align-middle  pb-14">
            <h1
              data-aos="fade"
              data-aos-duration="2000"
              className="font-semibold main-text_para main-text_para_bold"
            >
              {data.title}
            </h1>
            <h6
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              // data-aos-offset="100"
              className="sub-main-text3 main-text_para"
            >
              {data.details}
            </h6>
            <div className="content__row">
              <div className="content__row__entry">1-</div>
              <div className="content__row__entry">Frontend</div>
              <div className="content__row__entry">
                React <span>Redux</span>ES6
              </div>{" "}
              <div className="content__row__entry">
                SASS <span>BEM</span>Webpack
              </div>
            </div>
            <div className="content__row">
              <div className="content__row__entry">2-</div>
              <div className="content__row__entry">Backend</div>
              <div className="content__row__entry">
                C++ <span>.Net</span>Web API
              </div>
              <div className="content__row__entry">
                MS SQL <span>Azure</span>
              </div>
            </div>
            <div className="content__row">
              <div className="content__row__entry">3-</div>
              <div className="content__row__entry">Mobile</div>
              <div className="content__row__entry">
                React <span>Redux</span>ES6
              </div>
              <div className="content__row__entry">
                ES6+ <span>MDM Support</span>CR Integration
              </div>
            </div>
            <div className="content__row">
              <div className="content__row__entry">4-</div>
              <div className="content__row__entry">QA</div>
              <div className="content__row__entry">
                Selenium Webdriver <span>SpecFlow</span>
              </div>
              <div className="content__row__entry">
                BBD <span>.NET</span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default WorkDetails;

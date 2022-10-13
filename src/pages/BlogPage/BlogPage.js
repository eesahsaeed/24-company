import React from "react";
import "./BlogPage.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import SingleTrending from "./Component/SingleTrending/SingleTrending";
import SingleBlog from "./Component/SingleBlog/SingleBlog";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Our Blog | 24 Design Company | Latest business and technology news,
          trends, communities.
        </title>
        <link rel="canonical" href="https://24group.com.ng/blog" />
      </Helmet>
      <motion.div
        className="container main-home-container relative"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="container relative pt-20 pb-20  lg:pl-28 blog-wrapper md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
          <div className="w-full h-full justify-center items-center lg:pt-32 md:pt-24 pt-24 ">
            <h6 className="font-bold lg:text-9xl sm:text-8xl text-7xl text-right blog-main-text">
              BLOG
            </h6>
          </div>
        </section>
        <section className="container w-full relative pt-20 pb-5 md:pb-20  lg:pl-28 blog-sub-cont md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
          {/* SERVICES HEADER */}
          <div className="w-full flex justify-between align-middle  pb-14">
            <h6 className="font-semibold lg:text-2xl know-text md:text-2xl text-base  text-primary-main">
              Trending now:
            </h6>
            <NavLink to="#">
              <h6 className=" font-medium see-text flex flex-row flex-header text-secodary-main lg:text-sm text-xs  md:text-xs sm:mt-0 mt-1">
                Read all
                <FaAngleDoubleRight className="ml-1 " />
              </h6>
            </NavLink>
          </div>
          <div className="w-full h-full ">
            <SingleTrending title='Why You Should Invest in a New Website.' desc='Fresh new marketing initiatives and new targets for sales have likely been discussed, but what about making ‘digital’ a real focus for your business?
'/>
<SingleTrending title='The Real Scam of ‘Influencer’.' desc='There are tens of thousands of humans spending their days trying to be popular on Instagram, buying outfits, wearing hats and seeking their version of cute. People from all backgrounds and genders, hoping to be the next Kardashian.
'/>
          </div>
        </section>
        
      </motion.div>
    </>
  );
};

export default BlogPage;

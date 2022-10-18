
import React, {useState} from "react";
import {motion} from "framer-motion";
import "./CareersPage.css";
import SingleCareer from "./component/SingleCareer/SingleCareer";
import {careerData, jobs} from "../../data";
import SingleJob from "./component/SingleJob/SingleJob";
import {NavLink} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa";
import {Helmet} from "react-helmet";
import {PuffLoader} from "react-spinners";

import {getUrl} from "../../helper/urlHelper";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

const CareersPage = () => {
  const [values, setValues] = useState({
    jobTitle: "",
    level: "",
    applicantFullName: "",
    applicantPhoneNumber: "",
    applicantComment: "",    
    applicantCurriculumVitae: null
  });
  const [applicantFullNameError, setApplicantFullNameError] = useState(false);
  const [applicantFullNameErrorMessage, setApplicantFullNameErrorMessage] = useState("This is an error");
  const [applicantPhoneNumberError, setApplicantPhoneNumberError] = useState(false);
  const [applicantPhoneNumberErrorMessage, setApplicantPhoneNumberErrorMessage] = useState("");
  const [applicantCVError, setApplicantCVError] = useState(false);
  const [applicantCVErrorMessage, setApplicantCVErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#0c1737");

  const careerView = careerData.map((item) => (
    <SingleCareer {...item} key={item.id} />
  ));

  const jobView = jobs.map((item, index) => (
    <SingleJob {...item} setValues={setValues} key={item.id} index={index} />
  ));

  function handleChange(e){
    e.preventDefault();

    let name = e.target.name;

    if (name === "applicantFullName"){
      setApplicantFullNameError(false);
      setApplicantFullNameErrorMessage("");
    }

    if (name === "applicantPhoneNumber"){
      setApplicantPhoneNumberError(false);
      setApplicantPhoneNumberErrorMessage("");
    }

    if (name === "applicantCurriculumVitae"){
      setApplicantCVError(false);
      setApplicantCVErrorMessage("");
    }

    if (name === "applicantCurriculumVitae"){
      setValues({...values, [name]: e.target.files[0]});
      let size = e.target.files[0].size / 1000000;
      
      if (size < 3.2){
        setApplicantCVError(false);
        setApplicantCVErrorMessage("");
      } else {
        setApplicantCVError(true);
        setApplicantCVErrorMessage("File too large");
      }
    } else {
      setValues({...values, [name]: e.target.value});
    }
  }

  function validate(){
    let valid = true;

    if (!values.applicantFullName){
      setApplicantFullNameError(true);
      setApplicantFullNameErrorMessage("Please Enter first and last name");
      valid = false;
    }

    if (!values.applicantPhoneNumber){
      setApplicantPhoneNumberError(true);
      setApplicantPhoneNumberErrorMessage("Please enter a valid Phone Number");
      valid = false;
    }

    if (!values.applicantCurriculumVitae){
      setApplicantCVError(true);
      setApplicantCVErrorMessage("Please upload a CV not more than 3mb");
      valid = false;
    }

    if (values.applicantCurriculumVitae){
      let size = values.applicantCurriculumVitae.size / 1000000;

      if (size < 3.2){
        setApplicantCVError(false);
        setApplicantCVErrorMessage("");
        valid = true;   
      } else {
        setApplicantCVError(true);
        setApplicantCVErrorMessage("File too large");
        valid = false;
      }
    }

    return valid;
  }

  function handleSubmit(){
    setLoading(true);
    
    let applicantData = new FormData();
    values.jobTitle && applicantData.append("jobTitle", values.jobTitle);
    values.level && applicantData.append("level", values.level);
    values.applicantFullName && applicantData.append("applicantFullName", values.applicantFullName);
    values.applicantPhoneNumber && applicantData.append("applicantPhoneNumber", values.applicantPhoneNumber);
    values.applicantComment && applicantData.append("applicantComment", values.applicantComment);
    values.applicantCurriculumVitae && applicantData.append("applicantCurriculumVitae", values.applicantCurriculumVitae);

    const abortController = new AbortController();
    const signal = abortController.signal;

    async function apply(application){
      try{
        let response = await fetch(`${getUrl()}/applications/upload`, {
          method: "POST",
          headers: {
            "Accept": "application/json"
          },
          body: application
        })

        return await response.json();
      } catch(err){
        console.log(err);
      }
    }

    apply(applicantData).then(data => {
      if (data.success){
        let origin = document.location.origin;
        document.location.href = `${origin}/careers/#openPositions`;
        let picElem = document.querySelector("input[type=file]");
        picElem.value = "";
        setLoading(false);
        setValues({});
      }
    }).catch(err => {
      console.log(err);
    })
  }

  function clearFields(){

  }

  return (
    <motion.div
      className="container main-home-container relative"
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Careers | 24 Design Company | Careers Opportunities</title>
        <link rel="canonical" href="https://24group.com.ng/careers" />
      </Helmet>
      <section className="container relative pt-20 pb-5  lg:pl-28 careers-wrapper md:pl-12 pl-6">
        <div className="w-full h-full justify-center items-center lg:pt-32 md:pt-24 pt-24 ">
          <h6 className="career-main-text lg:w-4/6 font-medium lg:text-6xl md:text-6xl   mb-5">
            Join a team that solves
          </h6>
          <h6 className="career-main-text lg:w-4/6 font-medium lg:text-6xl md:text-6xl   mb-5">
            real-world problems
          </h6>
          <h6 className="career-main-text lg:w-4/6 font-medium lg:text-6xl md:text-6xl  ">
            with technology.
          </h6>
        </div>
      </section>
      <section className="container career-sub-main min-w-full pt-16 mt-0 pb-6 lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="w-full h-full">
          <h6 className="font-semibold text-center career-sub-main-text1 lg:text-5xl md:text-4xl text-3xl text-primary-main mb:mb-24 mb-16">
            Connect with the best in our team!
          </h6>
          <div className=" w-full h-full grid lg:grid-cols-2">
            <div className="lg:mt-52">
              <h6 className="font-bold career-sub-main-text2 md:text-4xl text-3xl text-primary-main mb-8">
                Your life at
                <span className="text-secodary-main">&nbsp;24 Design</span>
              </h6>
              <p className="font-light text-primary-main career-sub-main-text3 text-sm mb-5 lg:w-3/4">
                At TwentyFour we believe in working together and working hard.
                With over 15 happy clients, we are looking for dynamic and
                creative individuals who are willing to dedicate themselves to
                providing innovative products and services for our cients.
              </p>
              <p className="font-light text-primary-main career-sub-main-text3 text-sm lg:w-3/4">
                Besides geting the opportunity to unlock your true potential, at
                TwentyFour you can also network with some of the most talented
                people in the industry, goon annual picnics outside the country
                and enjoy many other benefits by working with us.
              </p>
              <a href='#openPositions' className="passion-btn flex animate-bounce outline-none w-40 h-9  mt-12 border rounded-3xl border-secodary-main bg-secodary-main ">
                Apply
              </a>
            </div>
            {/* COLS2 */}
            <div className=" grid lg:grid-cols-2 mt-8 gap-0">{careerView}</div>
          </div>
        </div>
        <h6 className="font-bold text-primary-main md:text-4xl text-3xl pt-16" id="openPositions">
          Open Positions
        </h6>
      </section>
      <section className="container bg-primary-main career-sub-main2 min-w-full pt-16 mt-0 pb-20 lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="w-full h-full ">{jobView}</div>
        <NavLink to="#" className="more-jobs no-underline flex flex-row">
          <p className="mr-2 font-normal md:text-lg text-xs right">Show more</p>
          <FaAngleRight />
        </NavLink>
      </section>
      <section className="container career-sub-main min-w-full pt-16 mt-0 md:pb-32 pb-6 lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6" id="applicationSection">
        <h6 className="font-normal text-primary-main md:text-4xl text-lg">
          Send your CV and we will contact you shortly
        </h6>
        <div className="w-full h-full grid lg:grid-cols-3 md:mt-20 mt-14">
          {/* COL1 */}
          <div className="lg:col-span-2 grid lg:grid-cols-2">
            <form className="lg:col-span-2 grid lg:grid-cols-2" style={{position: "relative"}}>
              {loading && <div className="loading-container">
                <PuffLoader
                  color={color}
                  loading={loading}
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>}
              {!values.jobTitle && <div className="loading-container">
                SELECT A JOB TO APPLY
              </div>}
              {values.jobTitle && <div>
                <div className="w-full mb-10 border-primary-light border-b flex flex-row justify-between align-middle" style={{paddingBottom: 11, borderColor: "#999"}}>
                  <div className="">
                    <span className="font-normal application-title md:text-lg text-sm  mr-4">
                      {values.jobTitle}
                    </span>
                    <span className="font-light application-lvl uppercase">{values.level}</span>
                  </div>
                  <div>
                    <button className="passion-btn flex animate-bounce outline-none md:w-32 md:h-7 border rounded-3xl  w-20 h-6 application-btn" onClick={() => {
                      let origin = document.location.origin;
                      document.location.href = `${origin}/careers/#openPositions`;
                      let picElem = document.querySelector("input[type=file]");
                      picElem.value = "";
                      setValues({});
                    }}>
                      X
                    </button>
                  </div>
                </div>
              </div>}
              <div className="input-container">
                <input
                  type="text"
                  name="applicantFullName"
                  placeholder="Full Name:"
                  className="single-input mr-5"
                  onChange={handleChange}
                  style={{borderColor: applicantFullNameError ? "red" : "#999"}}
                />
                {applicantFullNameError && <p className="error-msg">{applicantFullNameErrorMessage}</p>}
              </div>
              <div className="input-container">
                <input
                  type="number"
                  name="applicantPhoneNumber"
                  placeholder="Phone Number:"
                  className="single-input"
                  onChange={handleChange}
                  style={{borderColor: applicantPhoneNumberError ? "red" : "#999"}}
                />
                {applicantPhoneNumberError && <p className="error-msg">{applicantPhoneNumberErrorMessage}</p>}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="applicantComment"
                  multiple={true}
                  placeholder="Comments:"
                  className="single-input"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          {/* COL2 */}
          <div className="w-full mx-auto">
            <div className="file-cont mx-auto w-64 h-44 p-5 input-container">
              <input 
                type="file" 
                name="applicantCurriculumVitae" 
                className="file" 
                onChange={handleChange}
                style={{borderColor: applicantCVError ? "red" : "#999"}}
              />
              {applicantCVError && <p className="error-msg file-error">{applicantCVErrorMessage}</p>}
              <p className="font-light file-text mt-10">
                File size limit: 3mb. The following formats are supported: doc, docx, pdf, ppt, pptx
              </p>
            </div>
          </div>
        </div>
        <button className="passion-btn file-btn flex animate-bounce outline-none w-40 h-9  mt-12 border rounded-3xl border-secodary-main bg-secodary-main" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </motion.div>
  );
};

export default CareersPage;

import React from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import { GrAttachment } from "react-icons/gr";
import "./contact.css";

const Contact = () => {
  return (
    <motion.div
      className="contactPage mt-36 mx-20 "
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex md:space-x-7 lg:mt-10 lg:flex-row flex-col">
        <div className="lg:w-1/2 mb-10">
          <h1 className="text-6xl font-extrabold">
            Tell us about your Project
          </h1>
          <h4 className="text-xl md:h-auto h-0 md:visible invisible mt-5 lg:pr-6">
            We’ll contact you within a couple of hours to schedule a meeting to
            discuss your goals.
          </h4>
        </div>
        <div className="lg:w-1/2 md:grid md:grid-cols-2 md:gap-8 flex flex-col">
          <TextField
            id="standard-basic"
            label="Your full name"
            required
            variant="standard"
          />
          <TextField id="standard-basic" label="Company" variant="standard" />
          <TextField
            id="standard-basic"
            label="Your email address"
            required
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Your phone number"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Message"
            variant="standard"
            className="col-span-2"
          />
          <h4 className="opacity-50 my-3">
            By sending this form I confirm that I have read and accept the
            Privacy Policy
          </h4>
          <button
            className="bg-blue-600 px-8 rounded-full w-max mx-auto h-14"
            style={{ color: "white" }}
          >
            Send message
          </button>
        </div>
      </div>

      <div>
        <div className="lg:flex md:mt-20 mt-10 items-center">
          <h1 className="md:w-2/3 justify-between md:text-7xl text-5xl font-bold">
            Connect with our Team
          </h1>
          <h4 className="text-xl lg:p-5 py-3">
            Let's communicate! Don't hesitate to contact us with your projects,
            ideas, and questions.
          </h4>
        </div>
        <div className="my-20 lg:grid grid-cols-3 gap-5">
          <div className="lg:mb-0 mb-3">
            <h2 className="md:text-3xl text-xl font-bold">Have a great idea?</h2>
            <h2 className="md:text-2xl font-bold my-2 text-blue-600">
            BusinessDev@24group.com.ng
            </h2>
            <h4 className="md:text-xl">
              Tell us more about your business idea to get consulted
            </h4>
          </div>
          <div className="lg:mb-0 mb-3">
            <h2 className="md:text-3xl text-xl font-bold">Got questions to ask?</h2>
            <h2 className="md:text-2xl font-bold my-2 text-blue-600">
            Info@24group.com.ng
            </h2>
            <h4 className="md:text-xl">
            Discuss your project with us. We’re open to questions
            </h4>
          </div>
          <div className="lg:mb-0 mb-3">
            <h2 className="md:text-3xl text-xl font-bold">We are hiring!</h2>
            <h2 className="md:text-2xl font-bold my-2 text-blue-600">
            Hr@24group.com.ng
            </h2>
            <h4 className="md:text-xl">
            We do more for your career. Come and join us.
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

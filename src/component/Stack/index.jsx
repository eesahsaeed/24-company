import React, { useState } from "react";
import {
  FaAngular,
  SiMongodb,
  SiSwift,
  SiRealm,
  SiKotlin,
  SiDart,
  SiFirebase,
  IoLogoJavascript,
  FaJava,
  DiDotnet,
  FaReact,
  SiPhp,
  FaHtml5,
  FaNodeJs,
  SiJava,
  SiFlutter,
  SiIonic,
  FaLaravel,
} from "react-icons/all";

const Stack = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full">
        <div
          className="mb-5 lg:py-8 lg:px-6 p-5 rounded-lg cursor-pointer"
          style={{
            color: active ? "white" : "black",
            backgroundColor: active ? "#1f4287" : "white",
          }}
          onClick={() => setActive(true)}
        >
          <h1 className="md:text-3xl text-lg font-bold">
            Web Development Stack
          </h1>
          <h4 className="text-lg lg:mt-4 lg:visible invisible h-0 lg:h-auto">
            We follow the latest development approaches and technologies to
            build web applications that meet your requirements.
          </h4>
        </div>
        <div
          className="mb-5 lg:py-8 lg:px-6 p-5 rounded-lg cursor-pointer"
          style={{
            color: !active ? "white" : "black",
            backgroundColor: !active ? "#1f4287" : "white",
          }}
          onClick={() => setActive(false)}
        >
          <h1 className="md:text-3xl text-lg font-bold">
            Mobile Development Stack
          </h1>
          <h4 className="text-lg lg:mt-4 lg:visible invisible h-0 lg:h-auto">
            24 Design Company’s mobile development department follows the latest
            tech trends to create and future-proof your iOS or Android
            application.on.
          </h4>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-10">
        {active ? (
          <div>
            <h2 className="text-2xl font-bold">Frontend</h2>
            <div className="text-4xl flex items-center px-2 flex-wrap py-5 text-blue-700">
              <h2 className="flex flex-col items-center mr-5">
                <FaAngular />{" "}
                <span className="text-black text-lg">Angular</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <FaReact /> <span className="text-black text-lg">React JS</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <IoLogoJavascript />{" "}
                <span className="text-black text-lg">JavaScript</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <FaHtml5 /> <span className="text-black text-lg">HTML</span>
              </h2>
            </div>
            <h2 className="text-2xl font-bold">Backend</h2>
            <div className="text-4xl flex items-center px-2 flex-wrap py-5 text-blue-700">
              <h2 className="flex flex-col items-center mr-5">
                <SiJava /> <span className="text-black text-lg">Java</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <FaNodeJs /> <span className="text-black text-lg">Node JS</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <SiPhp /> <span className="text-black text-lg">PHP</span>
              </h2>
            </div>
            <h2 className="text-2xl font-bold">Frameworks</h2>
            <div className="text-4xl flex items-center  px-2 flex-wrap py-5 text-blue-700">
              <h2 className="flex flex-col items-center mr-5">
                <DiDotnet /> <span className="text-black text-lg">.NET</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <FaLaravel />
                <span className="text-black text-lg">Laravel</span>
              </h2>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold">Languages</h2>
            <div className="text-4xl flex items-center px-2 flex-wrap py-5 text-blue-700">
            <h2 className="flex flex-col items-center mr-5">
            <SiSwift />
                <span className="text-black text-lg">Swift</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
              <SiKotlin />
                <span className="text-black text-lg">Kotlin</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
              <FaJava />
                <span className="text-black text-lg">Java</span>
              </h2>
              
          
            </div>
            <h2 className="text-2xl font-bold">Frameworks</h2>
            <div className="text-4xl flex items-center px-2 flex-wrap py-5 text-blue-700">
              <h2 className="flex flex-col items-center mr-5">
                <SiFlutter />
                <span className="text-black text-lg">Flutter</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
              <SiIonic />
                <span className="text-black text-lg">Ionic</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
              <FaReact />
                <span className="text-black text-lg">React-Native</span>
              </h2>
            </div>
            <h2 className="text-2xl font-bold">Database</h2>
            <div className="text-4xl flex items-center px-2 flex-wrap py-5 text-blue-700">
              <h2 className="flex flex-col items-center mr-5">
                <SiMongodb />
                <span className="text-black text-lg">MongoDB</span>
              </h2>
              <h2 className="flex flex-col items-center mr-5">
                <SiFirebase />
                <span className="text-black text-lg">Firebase</span>
              </h2>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stack;

import "aos/dist/aos.css";
import React, {useState} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import AOS from "aos";
// COMPONENTS
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer2";

// SCREENS
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutUsPage/AboutPage";
import ProjectDevelopment from "./pages/ProductDevelopmentPage/ProjectDevelpment";
import MobileDevelopment from "./pages/MobileDevelopmentPage/MobileDevelopment";
import DigitalTransformation from "./pages/DigitalTransformation/DigitalTransformation";
import QAPage from "./pages/Q&APage/Q&ATesting";
import UIDevelopment from "./pages/UI-UXPage/UI-UXPage";
import WebDevPage from "./pages/WebDevelopmentPage/WebDevPage";
import CareersPage from "./pages/CareersPage/CareersPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import WorkDetails from "./pages/WorkDetails/WorkDetails";
import Admin from "./pages/Dashboard";
import Applications from "./pages/Dashboard/views/Applications";
import Dashboard from "./pages/Dashboard/views/Dashboard";

function App() {
  AOS.init({
    easing: "ease-in-out",
  });
  const location = useLocation();
  const [headerFooter, setHeaderFooter] = useState(false);

  return (
    <>
      <Navbar headerFooter={headerFooter}/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project-development" element={<ProjectDevelopment/>} />
          <Route path="/web-development" element={<WebDevPage/>} />
          <Route path="/careers" element={<CareersPage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/mobile-development" element={<MobileDevelopment/>} />
          <Route path="/ui-development" element={<UIDevelopment/>} />
          <Route path="/QA-testing" element={<QAPage/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/:slug" element={<WorkDetails/>} />
          <Route path="/admin" element={<Admin setHeaderFooter={setHeaderFooter}/>}>
            <Route path="applications" element={<Applications/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route> 
          <Route
            path="/digital-transformation"
            element={<DigitalTransformation/>}
          />
        </Routes>
      </AnimatePresence>
      <Footer headerFooter={headerFooter}/>
    </>
  );
}

export default App;

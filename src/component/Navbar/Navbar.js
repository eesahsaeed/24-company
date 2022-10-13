import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useHistory, Link } from "react-router-dom";
import { FaBars, FaTimes, FaApple, FaAndroid, FaGlobe, FaClone, FaLayerGroup } from "react-icons/fa";
import { RiFlutterFill, RiSettings3Fill, RiComputerFill } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";



import Logo from "../../assets/images/newLogoWhite.png";
import Logo1 from "../../assets/images/newLogoDark.png";


function Navbar() {
  const history = useHistory();
  const {
    location: { pathname: routeName },
  } = history;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showDropdown = () => {
    setDropdown(true);
  };
  const MouseExit = () => {
    setDropdown(false);
  };
  const hideDropdown = () => {
    closeMobileMenu();
    setDropdown(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    if (routeName === "/" ) {
      setNavColor(false);
    } else {
      setNavColor(true);
    }
  }, [routeName]);
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeNavBarBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavBarBackground);
  return (
    // <IconContext.Provider value={{ color: "#fff" }}>

    <nav
      className={
        navbar ? "navbar-containers bg-active" : "containers navbar-containers"
      }
    >
      <NavLink to="/" className="navbar-logo lg:mt-6" onClick={closeMobileMenu}>
        <img
          src={
            (routeName === "/about" ||
              routeName === "/project-development" ||
              routeName === "/contact" ||
              routeName === "/web-development" ||
              routeName === "/mobile-development" ||
              routeName === "/ui-development" ||
              routeName === "/QA-testing" ||
              routeName === "/digital-transformation") &&
            window.scrollY <= 60
              ? Logo1
              : Logo
          }
          alt="24  Design Logo"
          className="w-40 h-15"
        />
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* NAV_DROPDOWN */}

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/about"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/"
            onClick={closeMobileMenu}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item dropdown-cont">
          <div
            className={
              navColor === true
                ? "nav-links nav-links-change nav-drop"
                : "nav-links nav-drop"
            }
            // className="nav-links nav-drop"
          >
            Services
          </div>
          <div className="drop-menu fixed z-50 w-max mx-auto shadow-lg mt-24 grid lg:grid-cols-3">
            {/* Single content */}
            <div>
              <h1 className="text-left text-xl mb-5 font-bold">Mobile development</h1>
              <Link to='/mobile-development'>
              <div className="flex items-center text-sm text-left mb-5">
                <FaApple fontSize={25} color="blue"/>
                <div className="ml-2">
                  <h4>IOS app development</h4>
                  <h5 className="text-gray-400">Native Swift apps for all Apple devices</h5>
                </div>
              </div>
              </Link>
              <Link to='/mobile-development'>
              <div className="flex items-center text-sm text-left mb-5">
                <FaAndroid fontSize={25} color="blue"/>
                <div className="ml-2">
                  <h4>Android app development</h4>
                  <h5 className="text-gray-400">Build native apps for Android with Kotlin</h5>
                </div>
              </div>
              </Link>
              <Link to='/mobile-development'>
              <div className="flex items-center text-sm text-left mb-5">
                <RiFlutterFill fontSize={25} color="blue"/>
                <div className="ml-2">
                  <h4>Flutter app development</h4>
                  <h5 className="text-gray-400">Dart-based cross-platform development</h5>
                </div>
              </div>
              </Link>
            </div>
               
            <div>
              <h1 className="text-left text-xl mb-5 font-bold">Web development</h1>
              <Link to='/web-development'>
              <div className="flex items-center text-sm text-left mb-5">
                <FaGlobe fontSize={25} color="orange"/>
                <div className="ml-2">
                  <h4>Web app development</h4>
                  <h5 className="text-gray-400">Secure and performant web apps PWAs</h5>
                </div>
              </div>
              </Link>
              <Link to='/web-development'>
              <div className="flex items-center text-sm text-left mb-5">
                <RiSettings3Fill fontSize={25} color="orange"/>
                <div className="ml-2">
                  <h4>DevOps services</h4>
                  <h5 className="text-gray-400">Solution architecture & cloud dev services</h5>
                </div>
              </div>
              </Link>
              <Link to='/web-development'>
              <div className="flex items-center text-sm text-left mb-5">
                <RiComputerFill fontSize={25} color="orange"/>
                <div className="ml-2">
                  <h4>Legacy soft modernization</h4>
                  <h5 className="text-gray-400">Reengineering, redesign, and migration</h5>
                </div>
              </div>
              </Link>
            </div>

            <div>
              <h1 className="text-left text-xl mb-5 font-bold">For Startups</h1>
             <Link to='/digital-transformation'>
              <div className="flex items-center text-sm text-left mb-5">
                <AiOutlineFileSearch fontSize={25} color="#21e6c1"/>
                <div className="ml-2">
                  <h4>Discovery phase</h4>
                  <h5 className="text-gray-400">SRS, UX prototype, SWOT analysis</h5>
                </div>
              </div>
              </Link>
              <Link to='/digital-transformation'>
              <div className="flex items-center text-sm text-left mb-5">
                <FaLayerGroup fontSize={25} color="#21e6c1"/>
                <div className="ml-2">
                  <h4>MVP development</h4>
                  <h5 className="text-gray-400">Reducing time-to-market with MVP</h5>
                </div>
              </div>
              </Link>
              <Link to='/digital-transformation'>
              <div className="flex items-center text-sm text-left mb-5">
                <FaClone fontSize={25} color="#21e6c1"/>
                <div className="ml-2">
                  <h4>CTO as a Service</h4>
                  <h5 className="text-gray-400">CaaS consulting services for startups</h5>
                </div>
              </div>
              </Link>
            </div>
<Link to='/QA-testing'>
<div className="text-left">
  <h2 className="text-xl font-bold">Software testing</h2>
  <h3 className="text-gray-400">Manual testing & Automation testing</h3>
</div>
</Link>
<Link to='/project-development'>
<div className="text-left">
  <h2 className="text-xl font-bold">Dedicated team</h2>
  <h3 className="text-gray-400">Experienced tech staff to extend a team</h3>
</div>
</Link>
<Link to='/ui-development'>
<div className="text-left">
  <h2 className="text-xl font-bold">UI-UX design</h2>
  <h3 className="text-gray-400">Material and HIG design for all platforms</h3>
</div>
</Link>
          </div>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/careers"
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/blog"
            onClick={closeMobileMenu}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item contactBtn">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/contact"
            onClick={closeMobileMenu}
          >
            <span className="contact">Contact us</span>
          </NavLink>
        </li>
      </ul>
    </nav>

    // </IconContext.Provider>
  );
}

export default Navbar;


import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";

import logo from "../../assets/company-logo.png";

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="/"
          className="simple-text logo-normal"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  <p><span className="admin-icon">{prop.icon}</span>{" "}<span className="admin-link">{prop.name}</span></p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

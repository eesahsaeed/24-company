/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {MdOutlineDashboard, MdOutlineMenuBook, MdFormatListBulleted} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";

import Dashboard from "./views/Dashboard.js";
import Applications from "./views/Applications.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdOutlineDashboard className="me-2" size={20}/>,
    component: <Dashboard/>,
    layout: "/admin",
  },
  {
    path: "/applications",
    name: "Applications",
    icon: <MdOutlineMenuBook className="me-2" size={20}/>,
    component: <Applications/>,
    layout: "/admin",
  }
];

export default routes;

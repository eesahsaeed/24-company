import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from "react-router-dom";
import {getUrl} from "./helper/urlHelper";

if (!sessionStorage.getItem("fetch")){
  sessionStorage.setItem("fetch", JSON.stringify({fetch: true}));
  fetch(`${getUrl()}/users/demo`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  }).then(rs => {
    let d = rs.json();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

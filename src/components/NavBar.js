import React from "react";
import logo from "../assets/blogging.png";
import user from "../assets/mask.svg";
import "../userBackground.css";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: "#edf6f9" }}
    >
      <div className="container">
        <div className="navbar-brand" style={{ color: "black" }}>
          <img
            src={logo}
            style={{ width: "25px", height: "25px", marginRight: "5px" }}
          />
          BlogSite
        </div>
        <div className="collapse navbar-collapse justify-content-end">
          <ul
            className="navbar-nav justify-content-around"
            style={{ color: "black", width: "200px" }}
          >
            <li className="nav-item">Home</li>
            <li className="nav-item">News</li>
            <li className="nav-item">Login</li>
            <li className="nav-item user-background">
              <img
                src={user}
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

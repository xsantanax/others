import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/token-icon.png";

function Logo() {
  return (
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} width={40} height={40} alt="logo" />
        <div style={{ fontSize: 20, marginLeft: 5 }}>My Calendar</div>
      </div>
    </Link>
  );
}

export default Logo;

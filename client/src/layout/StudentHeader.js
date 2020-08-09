import React from "react";
import { NavLink } from "react-router-dom";
import "../";

const StudentHeader = ({ headerTitle }) => (
  <header>
    {/* <div className="header">{headerTitle}</div> */}
    <div
      style={{
        color: "red",
        padding: "20px",
        background: "#864501",
        marginBottom: "20px",
      }}
    >
      <center>
        <h5 className="heading">Lend a Hand India</h5>
        <img
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: "60px",
            left: "850px",
          }}
          src="http://1.bp.blogspot.com/_Dgv-9iqPwN4/S6zRhx0bRbI/AAAAAAAAA_0/dtuGNYeVW20/s400/Lend_A_Hand_logo_wo+LAHI.jpg"
        />{" "}
      </center>
    </div>
    <center>
      <h2>Students Panel</h2>
    </center>
  </header>
);

export default StudentHeader;

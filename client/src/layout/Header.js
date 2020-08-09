import React from "react";
import { NavLink } from "react-router-dom";
import "../";

const Header = ({ headerTitle }) => (
  <header>
    {/* <div className="header">{headerTitle}</div> */}
    <div style={{ color: "red", padding: "20px", background: "#864501" }}>
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

      <NavLink
        className="navlink"
        to="/teachers/dashboard"
        activeClassName="is-active"
        exact={true}
      >
        Dashboard{" "}
      </NavLink>
      <NavLink
        className="navlink"
        to="/teachers/addStudents"
        activeClassName="is-active"
      >
        Add Students{" "}
      </NavLink>
      <NavLink
        className="navlink"
        to="/teachers/upload"
        activeClassName="is-active"
      >
        Upload Materials{" "}
      </NavLink>
      <NavLink
        className="navlink"
        to="/teachers/weeklyAgenda"
        activeClassName="is-active"
      >
        Share Material
      </NavLink>
    </div>
  </header>
);

export default Header;

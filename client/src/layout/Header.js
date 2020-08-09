import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ headerTitle }) => (
  <header>
    {/* <div className="header">{headerTitle}</div> */}
    <div style={{ color: "red", padding: "20px", background: "#333" }}>
      <center>
        <h5 className="heading">Lend A Hand</h5>
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

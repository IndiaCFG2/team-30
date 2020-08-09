import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => (
  <header>
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
        to="/admin/dashboard"
        activeClassName="is-active"
        exact={true}
      >
        Admin Dashboard{" "}
      </NavLink>
      <NavLink
        className="navlink"
        to="/admin/addTeacher"
        activeClassName="is-active"
      >
        Add Teacher{" "}
      </NavLink>
      <NavLink
        className="navlink"
        to="/admin/upload"
        activeClassName="is-active"
      >
        Upload Materials{" "}
      </NavLink>
    </div>
  </header>
);

export default AdminHeader;

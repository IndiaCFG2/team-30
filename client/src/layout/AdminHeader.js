import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => (
  <header>
    <div style={{ color: "red", padding: "20px", background: "#333" }}>
      <center>
        <h5 className="heading">Lend A Hand</h5>
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

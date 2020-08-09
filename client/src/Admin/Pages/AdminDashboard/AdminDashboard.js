import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./AdminDashboard.css";
import Teachers from "./Teachers";
import AdminHeader from "../../../layout/AdminHeader";
var firebase = require("firebase");

const isAuthenticated = async () => {
  let temp = await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userno = user.phoneNumber;
      userno = userno.slice(3);
      if (userno !== "7780117991") {
        window.location.href = "/";
      }
    }
  });
};

const AdminDashboard = () => {
  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div className="admin_dashboard_container">
      <AdminHeader headerTitle={"LEND A HAND"} />
      <Teachers />
    </div>
  );
};

export default withRouter(AdminDashboard);

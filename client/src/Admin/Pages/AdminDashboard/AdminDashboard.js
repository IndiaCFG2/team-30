import React from "react";
import "./AdminDashboard.css";
import Teachers from "./Teachers";

const AdminDashboard = () => {
  return (
    <div className="admin_dashboard_container">
      <Teachers />
    </div>
  );
};

export default AdminDashboard;

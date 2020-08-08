import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../layout/Header";
import AddTeacher from "../Admin/Pages/AdminDashboard/AddTeacher";
import AdminLogin from "../Admin/Pages/AdminLogin/AdminLogin";
import AdminDashboard from "../Admin/Pages/AdminDashboard/AdminDashboard";

const AdminRouter = () => (
  <div>
    <Switch>
      <Route exact path="/adminLogin" component={AdminLogin} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/admin/addTeacher" component={AddTeacher} />
    </Switch>
  </div>
);

export default AdminRouter;

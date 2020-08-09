import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./Homepage";
import "./App.css";
import "./styles/styles.scss";
import AdminLogin from "./Admin/Pages/AdminLogin/AdminLogin";
import AdminDashboard from "./Admin/Pages/AdminDashboard/AdminDashboard";
import AddTeacher from "./Admin/Pages/AdminDashboard/AddTeacher";
import Login from "./Teachers/components/pages/Login";
import Dashboard from "./Teachers/components/pages/Dashboard";
import Upload from "./Teachers/components/pages/Upload";
import WeeklyAgenda from "./Teachers/components/pages/WeeklyAgenda";
import AddStudents from "./Teachers/components/pages/AddStudents";
import AdminUpload from "./Admin/Pages/AdminUpload";
import EditTeacher from "./Admin/Pages/AdminDashboard/EditTeacher";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/addTeacher" component={AddTeacher} />
        <Route exact path="/admin/editTeacher" component={EditTeacher} />
        <Route exact path="/admin/upload" component={AdminUpload} />
        {/* <AdminRouter /> */}
        {/* <TeacherRouter /> */}
        <Route exact path="/teacherLogin" component={Login} />
        <Route exact path="/teachers/dashboard" component={Dashboard} />
        <Route exact path="/teachers/upload" component={Upload} />
        <Route exact path="/teachers/addStudents" component={AddStudents} />
        <Route exact path="/teachers/weeklyAgenda" component={WeeklyAgenda} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import AdminLogin from './Admin/Pages/AdminLogin';
import AdminDashboard from './Admin/Pages/AdminDashboard';

import TeacherRouter from "./routers/TeacherRouter";
import "./App.css";
import "./styles/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <TeacherRouter/>
    </BrowserRouter>
          
  );
  // <div className="App">
    //   <Router>
    //     <Switch>
    //       {/* <Redirect exact from="/" to="/teacherLogin" /> */}
          
    //       <Route exact path="/adminLogin" component={AdminLogin} />
    //       <Route exact path="/admin/dashboard" component={AdminDashboard} />
    //     </Switch>
    //   </Router>
    // </div>
}

export default App;

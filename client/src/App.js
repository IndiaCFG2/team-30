import React from "react";
import Login from "./Teachers/components/pages/Login";
import Dashboard from "./Teachers/components/pages/Dashboard";
import AddStudents from "./Teachers/components/pages/AddStudents";
import WeeklyAgenda from "./Teachers/components/pages/WeeklyAgenda";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/teacherLogin" component={Login} />
          <Route exact path="/teachers/dashboard" component={Dashboard} />
          <Route exact path="/teachers/addStudents" component={AddStudents} />
          <Route exact path="/teachers/weeklyAgenda" component={WeeklyAgenda} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

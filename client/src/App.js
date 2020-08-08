import React from "react";
import Login from "./Teachers/components/pages/Login";
import Dashboard from "./Teachers/components/pages/Dashboard";
import Upload from "./Teachers/components/pages/Upload";
import AddStudents from "./Teachers/components/pages/AddStudents";
import WeeklyAgenda from "./Teachers/components/pages/WeeklyAgenda";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/teacherLogin" component={Login} />
          <Route exact path="/teachers/dashboard" component={Dashboard} />
          <Route exact path="/teachers/upload" component={Upload} />
          <Route exact path="/teachers/addStudents" component={AddStudents} />
          <Route exact path="/teachers/weeklyAgenda" component={WeeklyAgenda} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

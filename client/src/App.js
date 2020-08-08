import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import TeacherRouter from "./routers/TeacherRouter";
import AdminRouter from "./routers/AdminRouter";
import "./App.css";
import "./styles/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <TeacherRouter />
      <AdminRouter />
    </BrowserRouter>
  );
}

export default App;

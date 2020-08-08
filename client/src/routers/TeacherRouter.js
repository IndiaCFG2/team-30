import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Login from "../Teachers/components/pages/Login";
import Dashboard from "../Teachers/components/pages/Dashboard";
import Upload from "../Teachers/components/pages/Upload";
import AddStudents from "../Teachers/components/pages/AddStudents";
import WeeklyAgenda from "../Teachers/components/pages/WeeklyAgenda";
import Header from '../layout/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/teacherLogin" component={Login} />
                <Route exact path="/teachers/dashboard" component={Dashboard} />
                <Route exact path="/teachers/upload" component={Upload} />
                <Route exact path="/teachers/addStudents" component={AddStudents} />
                <Route exact path="/teachers/weeklyAgenda" component={WeeklyAgenda} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
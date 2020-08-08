import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Teaching...</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/teachers/addStudents" activeClassName="is-active">Add Students </NavLink>
        <NavLink to="/teachers/upload" activeClassName="is-active">Upload Materials </NavLink>
        <NavLink to="/teachers/weeklyAgenda" activeClassName="is-active">Weekly Agenda</NavLink>
    </header>
);

export default Header;
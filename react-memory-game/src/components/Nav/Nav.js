import React from "react";
import './Nav.css';
import Score from "../Score";

const Nav = () => (
    <nav className="navbar">
        <h1>Puppy</h1>
        <Score/>
    </nav>
);

export default Nav;
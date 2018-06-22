import React from "react";
import './Nav.css';
import Score from "../Score";

const Nav = () => (
    <nav className="navbar">
        <div className="container">
        <h1>Puppy Memory Game</h1>
        <p></p>
        </div>
        <Score/>
    </nav>
);

export default Nav;
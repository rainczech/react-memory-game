import React from "react";
import './Nav.css';
import Score from "../Score";

const Nav = props => (
    <nav className="navbar">
        <div className="container">
        <h1>Puppy Memory Game</h1>
        <p></p>
        </div>
        <Score currentScore={props.currentScore} highScore={props.highScore}/>
    </nav>
);

export default Nav;
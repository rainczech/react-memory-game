import React, {Component} from 'react';
import "./Score.css";

const Score = props => (
    <div className="row container">
        <p>Current Score: {props.currentScore}</p>
        <p>High Score: {props.highScore}</p>
    </div>
        )

export default Score
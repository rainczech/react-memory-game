import React, {Component} from 'react';
import "./Score.css";

class Score extends Component {
    // State goes here
    state = {
        currentScore: 0,
        highScore: 0
    }
    // state goes here
    componentDidMount() {
        this.setState({
            currentScore: 0,
            highScore: 0
        });
    }
    // JSX goes here
    render(){
        return (
            <div className="row container">
            <p>Current Score: {this.state.currentScore}</p>
            <p>High Score: {this.state.highScore}</p>
            </div>
        )
            
        
    }
}

export default Score
import React, {Component} from 'react';
import "./Score.css";

class Score extends Component {
    // State goes here
    state = {
        currentScore: 0,
        highScore: 0
    }
    // method
    componentDidMount() {
        this.setState({
            currentScore: 0,
            highScore: 0
        });
    };

    currentScoreIncrement = () => {
        this.setState({currentScore: this.state.currentScore +1});
    };

    setHighScore = () => {
        if(this.state.currentScore > this.state.highScore) {
            this.setState({highScore: this.state.currentScore});
        };
    };

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
import React, {Component} from 'react';

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
            <span>
            <p>Current Score: {this.state.currentScore}</p>
            <p>High Score: {this.state.highScore}</p>
            </span>
        )
            
        
    }
}

export default Score
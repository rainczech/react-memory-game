import React, { Component } from 'react';
import './App.css';
import images from "./images.json";
import GameArea from "./components/GameArea";

class App extends Component {
  componentDidMount(){
    console.log("Images are ", images)
  }
  render() {
    return (
        <GameArea/>
    )
  }

}

export default App;

import React, { Component } from 'react';
import './App.css';
import images from "./images.json";
import GameArea from "./components/GameArea";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount(){
    console.log("Images are ", images)
  }
  render() {
    return (
      <div>
        <Nav />
        <GameArea/>
        <Footer/>
      </div>
    )
  }

}

export default App;

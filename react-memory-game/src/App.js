import React, { Component } from 'react';
import './App.css';
import images from "./images.json";
import GameArea from "./components/GameArea";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Score from "./components/Score"

class App extends Component {
  componentDidMount(){
    console.log("Images are ", images);

  }
// when an image is clicked
 
 



  // JSX
  render() {
    return (
      <div>
        <Nav />
        <Score />
        <GameArea/>
        <Footer/>
      </div>
    )
  }

}

export default App;

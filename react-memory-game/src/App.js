import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from "./components/Score";
import images from "./images.json";
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      {Image}
      // {images.map(image => (
      //   <Image
      //   url={image.url}
      //   id={image.id}
      //   alt={image.alt}
      // ))}
    )
  }




  // boiler code
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

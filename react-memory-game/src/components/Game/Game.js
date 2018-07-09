import React, {Component} from "react";
// import "./Games.css";
// other components
import images from "../../images.json";
import GameArea from "../GameArea";
import Nav from "../Nav";
import Footer from "../Footer";

class Game extends Component {
// state
state = {
    images,
    currentScore: 0,
    highScore: 0
  };

  // methods
// when app starts
componentDidMount(){
    console.log("Images are ", images);
}

// shuffle Images to be called after every click
shuffleImages = images => {
    let i = images.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
      i--;
    }
    return images;
  };







// when an incorrect guess is made
  incorrectGuess = images => {
    this.setState({
      images: this.resetClick(images),
      score: 0
    });
  };
// reset the images to prop clicked as false
  resetClick = images => {
    const resetClick = images.map(item => ({ ...item, clicked: false }));
    return this.shuffleImages(this.resetClick);
  };


// JSX
render(){
    return (
        <div>
            <Nav/>
            <GameArea/>
            <Footer/>
        </div>
    );
}


}


export default Game;
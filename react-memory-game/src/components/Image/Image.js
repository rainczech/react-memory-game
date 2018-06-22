import React, { Component } from "react";

import './Image.css';

class Image extends Component {
  imageOnClick = (id) => {
    console.log("I've been clicked!");
    console.log(this.props.id);
  }

  render(){
    const boxStyle = {
        backgroundImage: `url(${this.props.image})`
    }
    return (
      <div onClick={this.imageOnClick}
        className="clicky-box"
        style={boxStyle}
      />
    );
  }
}

export default Image;
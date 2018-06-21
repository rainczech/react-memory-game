import React, { Component } from "react";

import './Image.css';

class Image extends Component {
  render(){
    const boxStyle = {
        backgroundImage: `url(${this.props.image})`
    }
    return (
      <div
        className="clicky-box"
        style={boxStyle}
      />
    );
  }
}

export default Image;
// import React from "react";
// import "./Image.css";

// const Image = props => (
//         <div className="col-md-2">
//              <div className="card" key={props.id}>
//                 <img src={props.url} alt={props.alt}/>
//             </div>
//         </div>
// )

// export default Image;

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
import React, { Component } from 'react';
import Image from '../Image';

import images from '../../images.json';
// import css
import './GameArea.css'

class GameArea extends Component {
  // STATE GOES HERE
  state = {
    puppies: [],
    alreadyClicked: []
  }

  // METHODS GO HERE
  componentDidMount() {
    this.setState({
      puppies: images
    });
  }

  // JSX GOES HERE
  render() {
    return (
      <div className='game-space-container'>
        {
          this.state.puppies.map(image => {
            return(
              <Image
                key={image.id}
                id={image.id}
                image={image.url} />
            )
          })
        }
      </div>
    );
  }
}

export default GameArea;



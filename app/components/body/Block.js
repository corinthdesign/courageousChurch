import React, { Component } from 'react';
import { image } from './library.js';

class Block extends React.Component {
  render() {
    return (
      <div className="block">
        <h1>This block has {this.props.description} {this.props.name}.</h1>
        <img src={image(this.props.image)} width="60%" height="60%"/>
      </div>
    );
  }
};

export default Block;

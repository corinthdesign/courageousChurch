import React, { Component } from 'react';
import { image } from './../library.js';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <a href=""><p>Give</p></a>
        <a href="#about"><p>About</p></a>
        <a href="index.html"><img src={image('logo.png')} /></a>
        <a href="http://eepurl.com/gzArP1"><p>Updates</p></a>
        <a href=""><p></p></a>
      </div>
    );
  }
};

export default Nav;

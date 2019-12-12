import React, { Component } from 'react';
import Hero from './Hero.js';
import About from './About.js';
import Engage from './Engage.js';


class Body extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Engage />
      </div>
    );
  };

};

export default Body;

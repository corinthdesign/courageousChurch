import React, { Component } from 'react';
import Button from './../tools/Button.js';
import { image } from './../library.js';

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="heroImage">
            <div className="heroText">
              <img className="heroLogo" src={image('logoWhite.png')} title="Courageous Church Logo" />
              <h3>Bold Love - Bold Truth - Bold Love</h3>
            </div>
            <Button link="https://tithe.ly/give?c=1086101" title="Support Courageous Church" className="heroGive" submit="- Support Courageous Church -"/>
            <div className="sectionTop"></div>
        </div>
      </div>
    );
  };

};

export default Hero;

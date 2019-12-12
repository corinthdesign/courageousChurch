import React, { Component } from 'react';
import Button from './../tools/Button.js';

class Engage extends React.Component {
  render() {
    return (
      <div className="engage">
        <div className="sectionBottom"></div>
        <h1>We need your Help</h1>
        <h2>Engage Seattle with us!</h2>
        <div className="respond">
          <Button link="http://eepurl.com/gzArP1" className="engageButton" submit="Get Updates"/>
          <Button link="https://tithe.ly/give?c=1086101" className="engageButton" submit="Give"/>
          <Button link="mailto:kloptjk@gmail.com" className="engageButton" submit="Let's Partner"/>
        </div>
      </div>
    );
  };

};

export default Engage;

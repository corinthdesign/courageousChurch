import React, { Component } from 'react';
import Content from './Content.js';
import Profile from './Profile.js';
import { image, profiles } from './../library.js';

class About extends React.Component {
  render() {
    let Names = () => {
      Object.values(profiles);
      console.log(this);
    };

    return (
      <div className="about" id="about">
        <Content heading="Here's Who We Are" subheading=""
        content="Courageous Church is a new church plant forming in Seattle, WA."/>
        <div className="staff">
          <h2>Our Team</h2>
          <Names />
        </div>
      </div>
    )
}
};

export default About;

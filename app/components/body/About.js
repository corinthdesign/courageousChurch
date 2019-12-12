import React, { Component } from 'react';
import Content from './Content.js';
import Profile from './Profile.js';
import { image } from './../library.js';

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <Content heading="Here's Who We Are" subheading=""
        content="Courageous Church is a new church plant forming in Seattle, WA."/>
        <div className="staff">
          <h2>Our Team</h2>
          <Profile src={image("hannahType.png")} name="Hannah Klopfenstein" title="Lead Pastor" content="Hannah loves going to new places! She also loves the Gospel of Jesus and caring for her children!" image={image("hannah.jpg")} />
          <Profile src={image("timType.png")} name="Tim Klopfenstein" title="Development Pastor" content="Tim loves Rock Climbing! He is deeply passionate about people knowing Jesus and loves his kids!" image={image("tim.jpg")} />
        </div>
      </div>
    );
  };

};

export default About;

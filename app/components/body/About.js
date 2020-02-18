import React, { Component } from 'react';
import Content from './Content.js';
import Profile from './Profile.js';
import { image, tim, hannah, careP, worshipP, pastorRes, makeProfile, about } from './../library.js';

class About extends React.Component {
  render() {
    return (
    <div className="about" id="about">
        <Content className="story" heading="Here's Who We Are" subheading=""
        content={about}/>
        <div className="staff">
          <h2>Our Team</h2>
          <div>
          {makeProfile(hannah)}
          {makeProfile(tim)}
          {makeProfile(careP)}
          {makeProfile(worshipP)}
          {makeProfile(pastorRes)}
          </div>
        </div>
      </div>
    )
}
};

export default About;

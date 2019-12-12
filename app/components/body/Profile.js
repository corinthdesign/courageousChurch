import React, { Component } from 'react';
import Bio from './Bio.js';

class Profile extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="profile">
        <img className="avatar" src={this.props.image} />
          <div className="title">
            <img className="nameImage" src={this.props.src} name={this.props.name}/>
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <Bio className="bio" content={this.props.content} />
      </div>
    );
  }
};

export default Profile;

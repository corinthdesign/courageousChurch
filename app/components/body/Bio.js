import React, { Component } from 'react';

class Bio extends React.Component {
  render() {
    return (
        <p className="bio">{this.props.bio}</p>
    );
  };

};

export default Bio;

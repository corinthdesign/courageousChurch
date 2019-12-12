import React, { Component } from 'react';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  };

};

export default Bio;

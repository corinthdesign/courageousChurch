import React, { Component } from 'react';

class Content extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.heading}</h1>
        <h2>{this.props.subheading}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
};

export default Content;

import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" className={this.props.className}>
        {this.props.submit}
      </a>
    );
  };

};

export default Button;

import React, { Component } from 'react';
import { image } from '../library.js';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a href="index.html"><img src={image("logoWhite.png")}  width="10%" /></a>
        <p>© 2020 Courageous Church</p>
      </div>
    );
  };

};

export default Footer;

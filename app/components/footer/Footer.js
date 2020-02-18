import React, { Component } from 'react';
import { image } from '../library.js';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="social">
          <a href={image("facebook.png")} title="Facebook" target="_blank"><img src={image("facebook.png")} /></a>
          <a href={image("instagram.png")} title="Instagram" target="_blank"><img src={image("instagram.png")} /></a>
          <a href={image("youtube.png")} title="Youtube" target="_blank"><img src={image("youtube.png")} /></a>
        </div>
        <div className="info">
          <a href="index.html"><img src={image("logoWhite.png")}  width="10%" /></a>
          <p>© 2020 Courageous Church</p>
        </div>
      </div>
    );
  };

};

export default Footer;

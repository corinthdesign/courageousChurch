const React = require('react');
import Hero from './body/Hero.js';
import Nav from './nav/Nav.js';
import './styles/app.css';
import {foods, random} from './library.js';

class SimpleApp extends React.Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
  );
  }
};

export default SimpleApp;

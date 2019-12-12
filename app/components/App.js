const React = require('react');
import Body from './body/Body.js';
import Nav from './nav/Nav.js';
import Footer from './footer/Footer.js';
import './styles/app.css';
import {foods, random} from './library.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
        <Footer />
      </div>
  );
  }
};

export default App;

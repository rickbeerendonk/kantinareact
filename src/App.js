import React, { Component } from 'react';
import './App.css';
import NavbarMain from '../src/Components/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <NavbarMain />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

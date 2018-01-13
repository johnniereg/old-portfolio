import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSection: 'none'
    };
    this.selectSection = this.selectSection.bind(this);
  }

  selectSection(section) {
    if (this.state.activeSection === section) {
      section = 'none';
    }
    this.setState({
      activeSection: section
    });
  }

  render() {
    return (
      <div className="App">
        <Header selectSection={this.selectSection} activeSection={this.state.activeSection} />
        <Section activeSection={this.state.activeSection} />
        <Footer />
      </div>
    );
  }
}

export default App;

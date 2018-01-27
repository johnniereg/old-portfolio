import React, { Component } from 'react';
import Code from './Code.jsx';
import Words from './Words.jsx';
import Sounds from './Sounds.jsx';
import Video from './Video.jsx';
import Contact from './Contact.jsx';

class Section extends Component {

    render() {
        if ( this.props.activeSection === 'none') {
            return (
                <div className="section empty container">
                </div>
            );
        } else if ( this.props.activeSection === 'code') {
            return (
                <Code />
            );
        } else if ( this.props.activeSection === 'words') {
            return (
                <Words />
            );
        } else if ( this.props.activeSection === 'sounds') {
            return (
                <Sounds />
            );
        } else if ( this.props.activeSection === 'video') {
            return (
                <Video />
            );
        } else if ( this.props.activeSection === 'contact') {
            return (
                <Contact />
            );
        }
    }
}

export default Section;


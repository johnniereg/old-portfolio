import React, { Component } from 'react';
import Button from './Button.jsx';

class Footer extends Component {
    render() {
        return (
            <div className="footer container fixed-bottom">
                <div className="row">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col">
                                <a href="https://www.github.com/johnniereg" target="_blank" rel="noopener noreferrer"><Button title="GitHub" /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.linkedin.com/in/johnnie-regalado" target="_blank" rel="noopener noreferrer"><Button title="LinkedIn" /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.twitter.com/johnniereg" target="_blank" rel="noopener noreferrer"><Button title="Twitter" /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.instagram.com/johnniereg" target="_blank" rel="noopener noreferrer"><Button title="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
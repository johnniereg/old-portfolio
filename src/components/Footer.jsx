import React, { Component } from 'react';
import Title from './Title.jsx';
import Button from './Button.jsx';

class Footer extends Component {
    render() {
        return (
            <div className="footer container">
                <Button title="Github" />
                <Button title="LinkedIn" />
                <Button title="Twitter" />
                <Button title="Instagram" />
            </div>
        );
    }
}

export default Footer;
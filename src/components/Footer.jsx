import React, { Component } from 'react';
import Button from './Button.jsx';

class Footer extends Component {
    render() {
        return (
            <div className="footer container">
                <div className="row">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col">
                                <Button title="Github" />
                            </div>
                            <div className="col">
                                <Button title="LinkedIn" />
                            </div>
                            <div className="col">
                                <Button title="Twitter" />
                            </div>
                            <div className="col">
                                <Button title="Instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
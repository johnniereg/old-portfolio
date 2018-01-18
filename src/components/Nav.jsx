import React, { Component } from 'react';
import Button from './Button.jsx';

class Nav extends Component {

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col"><Button title="Code" /></div>
                    <div className="col"><Button title="Words" /></div>
                    <div className="col"><Button title="Sound" /></div>
                    <div className="col"><Button title="Video" /></div>
                    <div className="col"><Button title="CV" /></div>
                </div>
            </div>
        );
    }
}

export default Nav;
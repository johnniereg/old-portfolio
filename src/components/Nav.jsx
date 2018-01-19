import React, { Component } from 'react';
import Button from './Button.jsx';

class Nav extends Component {

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col" onClick={(e) => this.props.selectSection("code")} ><Button title="Code" /></div>
                    <div className="col" onClick={(e) => this.props.selectSection("words")} ><Button title="Words" /></div>
                    <div className="col" onClick={(e) => this.props.selectSection("sound")} ><Button title="Sound" /></div>
                    <div className="col" onClick={(e) => this.props.selectSection("video")} ><Button title="Video" /></div>
                    <div className="col" onClick={(e) => this.props.selectSection("cv")} ><Button title="CV" /></div>
                </div>
            </div>
        );
    }
}

export default Nav;
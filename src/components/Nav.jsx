import React, { Component } from 'react';
import Button from './Button.jsx';

class Nav extends Component {
    constructor(props){
        super(props)
        this.checkIfSelected = this.checkIfSelected.bind(this)
    }

    checkIfSelected(activeSection, thisButton){
        if (activeSection === thisButton) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center no-gutters">
                    <div className="col" onClick={(e) => this.props.selectSection("code")} >
                        <Button title="code" highlight={this.checkIfSelected(this.props.activeSection, 'code')} />
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("words")} >
                        <Button title="words" highlight={this.checkIfSelected(this.props.activeSection, 'words')}/>
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("sound")} >
                        <Button title="sound" highlight={this.checkIfSelected(this.props.activeSection, 'sound')}/>
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("video")} >
                        <Button title="video" highlight={this.checkIfSelected(this.props.activeSection, 'video')}/>
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("contact")} >
                        <Button title="contact" highlight={this.checkIfSelected(this.props.activeSection, 'contact')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
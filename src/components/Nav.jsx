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
                <div className="row text-center">
                    <div className="col" onClick={(e) => this.props.selectSection("code")} >
                        <Button title="Code" highlight={this.checkIfSelected(this.props.activeSection, 'code')} />
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("words")} >
                        <Button title="Words" highlight={this.checkIfSelected(this.props.activeSection, 'words')}/>
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("sound")} >
                        <Button title="Sound" highlight={this.checkIfSelected(this.props.activeSection, 'sound')}/>
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("video")} >
                        <Button title="Video" highlight={this.checkIfSelected(this.props.activeSection, 'video')}/>
                    </div>
                    <div className="col" onClick={(e) => this.props.selectSection("cv")} >
                        <Button title="CV" highlight={this.checkIfSelected(this.props.activeSection, 'cv')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
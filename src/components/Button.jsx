import React, { Component } from 'react';

class Button extends Component {
    
    render(){
        if (this.props.highlight === true) {
            return (
                <div className="button highlight" onClick={(e) => this.props.clickFunction}>
                    {this.props.title}
                </div>
            )
        } else {
            return (
                <div className="button" onClick={(e) => this.props.clickFunction }>
                    {this.props.title}
                </div>
            );
        }
    }
}

export default Button;
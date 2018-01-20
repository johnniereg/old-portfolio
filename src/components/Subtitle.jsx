import React, { Component } from 'react';

class Subtitle extends Component {
    render(){
        return(
            <div className="subtitle entry text-center">
                <div>{this.props.title}</div>
                <div className="subtitle-text">{this.props.subtitleText}</div>
            </div>
        )
    }

}

export default Subtitle;
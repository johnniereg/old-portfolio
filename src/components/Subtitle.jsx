import React, { Component } from 'react';

class Subtitle extends Component {
    render(){
        return(
            <div className="subtitle entry text-center">{this.props.title}</div>
        )
    }

}

export default Subtitle;
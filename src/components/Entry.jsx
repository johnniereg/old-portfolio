import React, { Component } from 'react';

class Entry extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="entry container">
                <div class="entryTitle">
                    { this.props.entryTitle }
                </div>
                <div class="entryContent">
                    { this.props.entryContent }
                </div>
            </div>

        );
    }
}

export default Entry;




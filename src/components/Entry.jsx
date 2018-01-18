import React, { Component } from 'react';

class Entry extends Component {

    render() {
        return (
            <div className="entry container">
                <div className="row">
                    <div className="col-3">
                        <div className="entryTitle">
                            { this.props.entryName }
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="entryContent">
                            { this.props.entryContent }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entry;




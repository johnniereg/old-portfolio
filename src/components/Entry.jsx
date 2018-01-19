import React, { Component } from 'react';

class Entry extends Component {

    render() {
        return (
            <div className="entry container">
                <div className="row align-items-center">
                    <div className="col-2 text-center">
                        <div className="entry-title">
                            { this.props.entryName }
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="entry-content text-justify">
                            { this.props.entryContent }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entry;




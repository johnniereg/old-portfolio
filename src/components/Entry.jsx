import React, { Component } from 'react';

class Entry extends Component {

    render() {
        return (
            <div className="entry container">
                <div className="row align-items-center no-gutters">
                    <div className="col-4 text-center">
                        <div className="entry-title justify-right">
                            { this.props.entryName }
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="entry-content">
                            { this.props.entryContent }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entry;




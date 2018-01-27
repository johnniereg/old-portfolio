import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Words extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"words"} subtitleText="samples of my published writing" />
                <Entry entryName={"weird canada"} 
                    entryContent={
                        <div>
                            <p>I am a senior editor for the award winning music publication Weird Canada.</p>
                        </div>
                    } />
            </div>
        );
    }

}

export default Words;
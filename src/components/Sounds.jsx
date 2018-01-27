import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Sounds extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"sounds"} subtitleText={"samples of my audio work"} />
                <Entry entryName={"true north"} 
                    entryContent={
                        <div>
                            <p>True North was a nationally syndicated music radio program focused on the strange and experimental sounds of Canadian rock, pop and electronic music.</p>
                        </div>
                    } />
            </div>
        );
    }

}

export default Sounds;
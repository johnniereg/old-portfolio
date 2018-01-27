import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Video extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"video"} subtitleText={"samples of my video work"} />
                <Entry entryName={"basement closet sessions"} 
                    entryContent={
                        <div>
                            <p>Basement Closet Sessions is an award-winning video series that features live in studio music performances by local and touring artists visiting CFUV 101.9 FM</p>
                        </div>
                    } />
                <Entry entryName={"freshman's wharf"}
                    entryContent={
                        <div>
                            <p>Webseries produced by the University of Victoria. Winner of the BC Leo Film Award.</p>
                        </div>
                    } />
            </div>
        );
    }

}

export default Video;
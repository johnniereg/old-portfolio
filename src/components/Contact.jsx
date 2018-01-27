import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Contact extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle className="title" title={"contact"} subtitleText={"get in touch"} />
                <Entry entryName={"contact info"} 
                    entryContent={
                        <div>
                            <p>I'm always interested in new opportunities and collaborations.</p><p>Get in touch if you think we can work together.</p><p>Reach my by email ~~~ johnniereg@gmail.com"</p>
                        </div>
                    } />
            </div>
        );
    }

}

export default Contact;
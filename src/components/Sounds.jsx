import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Sounds extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"sounds"} subtitleText={"samples of my audio work"} />
                <Entry entryName={"sample audio"} entryContent={"Listen to the strange sounds of Campus and Community Radio across Canada with this app. Built in React, Express, Node, PostgresQL and deployed on Heroku."} />
            </div>
        );
    }

}

export default Sounds;
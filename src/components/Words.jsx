import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Words extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"words"} subtitleText="samples of my published writing" />
                <Entry entryName={"writing sample"} entryContent={"Listen to the strange sounds of Campus and Community Radio across Canada with this app. Built in React, Express, Node, PostgresQL and deployed on Heroku."} />
            </div>
        );
    }

}

export default Words;
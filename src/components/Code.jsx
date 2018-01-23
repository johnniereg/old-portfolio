import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Code extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"code"} subtitleText="samples of my coding projects" />
                <Entry entryName={"oddrad.io"} entryContent={"Listen to the strange sounds of Campus and Community Radio across Canada with this app. Built in React, Express, Node, PostgresQL and deployed on Heroku."} />
                <Entry entryName={"house of noodles"} entryContent={"Restaurant app that allows customers to order online, using SMS confirmations for the restaurant and customer. Built in jQuery, Bootstrap, Express, Node, PostgreSQL, Twilio and deployed on Heroku."} />
                <Entry entryName={"jungle"} entryContent={"eCommerce site which required additional features written on top of legacy code. Built in Ruby on Rails and tested using RSpec."} />
                <Entry entryName={"chatty app"} entryContent={"Real time chat application built using React and WebSockets."} />
                <Entry entryName={"tweeter"} entryContent={"Twitter clone built using jQuery, AJAX, MongoDB and styled with CSS."} />
            </div>
        );
    }

}

export default Code;
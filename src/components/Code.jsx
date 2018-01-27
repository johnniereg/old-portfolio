import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Subtitle from './Subtitle.jsx';

class Code extends Component {

    render() {
        return (
            <div className="section container">
                <Subtitle title={"code"} subtitleText="samples of my coding projects" />
                <Entry entryName={<a href="http://oddrad.io" target="_blank rel="noopener noreferrer><div>oddrad.io</div></a>} 
                    entryContent={<div><p>Listen to the strange sounds of Campus and Community Radio across Canada with this app.</p><p>Built in React, Express, Node, PostgresQL and deployed on Heroku.</p></div>} />
                <Entry entryName={<a href="https://serene-ridge-47454.herokuapp.com/" target="_blank" rel="noopener noreferrer"><div>house of noodles</div></a>} 
                    entryContent={<div><p>Restaurant app that allows customers to order online, using SMS confirmations for the restaurant and customer.</p><p>Built in jQuery, Bootstrap, Express, Node, PostgreSQL, Twilio and deployed on Heroku.</p></div>} />
                <Entry entryName={<a href="https://github.com/johnniereg/jungle-rails" target="_blank" rel="noopener noreferrer"><div>jungle</div></a>} 
                    entryContent={<div><p>eCommerce site which required additional features written on top of legacy code.</p><p>Built in Ruby on Rails and tested using RSpec.</p></div>} />
                <Entry entryName={<a href="https://github.com/johnniereg/chatty-app" target="_blank" rel="noopener noreferrer"><div>chatty app</div></a>} 
                    entryContent={<div><p>Real time chat application built using React and WebSockets.</p></div>} />
                <Entry entryName={<a href="https://github.com/johnniereg/tweeter" target="_blank" rel="noopener noreferrer"><div>tweeter</div></a>} 
                    entryContent={<div><p>Twitter clone built using jQuery, AJAX, MongoDB and styled with CSS.</p></div>} />
            </div>
        );
    }

}

export default Code;
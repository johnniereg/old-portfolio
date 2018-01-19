import React, { Component } from 'react';
import Entry from './Entry.jsx';

class Section extends Component {

    render() {
        if ( this.props.activeSection === 'none') {
            return (
                <div className="section empty container">
                </div>
            );
        } else {

            return (
                <div className="section container">
                    <Entry entryName={this.props.activeSection} entryContent={"Lorem ipsum dolor amet helvetica hell of gluten-free ramps stumptown adaptogen lyft. Normcore cold-pressed VHS tumblr heirloom celiac neutra food truck everyday carry intelligentsia plaid. Shoreditch pitchfork trust fund, yuccie green juice hoodie vinyl lo-fi thundercats pinterest. Ennui bushwick stumptown blue bottle. Man bun woke tumeric, dreamcatcher humblebrag freegan cornhole DIY pabst YOLO lyft jianbing hashtag four dollar toast. Blue bottle austin meggings, mustache flexitarian narwhal lumbersexual brooklyn. Narwhal sustainable cray, tacos mustache artisan whatever kickstarter copper mug godard truffaut before they sold out bushwick unicorn irony."}/>
                    <Entry entryName={this.props.activeSection} entryContent={"Irony helvetica pour-over selvage edison bulb shabby chic pork belly raw denim venmo hexagon food truck kickstarter chia disrupt. Scenester readymade typewriter seitan yr, fam man bun knausgaard biodiesel intelligentsia chicharrones blog migas. Lyft helvetica brunch marfa pug. Forage keffiyeh small batch echo park shoreditch art party taxidermy jianbing pork belly heirloom chartreuse migas cornhole hammock gentrify. Vinyl seitan pabst green juice. Snackwave migas single-origin coffee yuccie put a bird on it, health goth hella try-hard listicle cray banh mi selfies umami keytar."}/>
                    <Entry entryName={this.props.activeSection} entryContent={"Shabby chic kombucha retro neutra lomo enamel pin typewriter food truck art party portland bushwick. Cornhole pickled salvia next level actually single-origin coffee. Banjo single-origin coffee chillwave try-hard authentic, fam pork belly knausgaard. Knausgaard air plant copper mug chicharrones tattooed pickled, marfa pinterest yuccie blue bottle vegan tacos. Adaptogen fingerstache you probably haven't heard of them neutra, kitsch heirloom pok pok YOLO sustainable selvage XOXO hella."}/>
                </div>
            );
        }
    }
}

export default Section;


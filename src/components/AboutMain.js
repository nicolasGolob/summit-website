import React from 'react';
import './AboutMain.css';
import VideoMainAbout from '../assets/video/about.mp4'

export default function Main() {
    return (
        <section className="about-container">
            <video src={VideoMainAbout} type={"video/mp4"}  autoPlay muted alt="hyperlapse in the middle of the night with mountain and lake viewautoPlay loop muted" />
           {/*  autoPlay muted */}
            <div className="about-text-main"> 
                <h1>About</h1>
                <p>he mountain offers us the scenery... It is up to us to invent the story that goes with it.</p> 
            </div>  
        </section>
    )
}

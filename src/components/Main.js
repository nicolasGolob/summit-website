import React from 'react';
import './Main.css';
import VideoMain from '../assets/video/mountains.mp4'

export default function Main() {
    return (
        <section className="main-container">
            <video src={VideoMain} type={"video/mp4"} alt="hyperlapse in the middle of the night with mountain and lake viewautoPlay loop muted" />
           {/*  autoPlay muted */}
            <div className="text-main fade-in-main-title"> 
                <h1>RECONNECT WITH NATURE</h1>
                <p>What are you waiting for ? </p> 
            </div>  
        </section>
    )
}

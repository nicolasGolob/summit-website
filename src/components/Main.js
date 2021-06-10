import React from 'react';
import './Main.css';
import VideoMain from '../assets/video/mountains.mp4'

export default function Main() {
    return (
        <div className='main-container'>
            <video src={VideoMain} type={"video/mp4"} autoPlay loop muted />
            <div className="text-main"> 
                <h1>RECONNECT WITH NATURE</h1>
                <p>What are you waiting for ? </p> 
            </div>  
        </div>
    )
}

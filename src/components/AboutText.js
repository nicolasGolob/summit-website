import React, {useEffect, useRef} from 'react';
import './AboutText.css';
import aboutImage from '../assets/image/aboutImage.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutText() {
    gsap.registerPlugin(ScrollTrigger);
    const AboutRef = useRef(null);
    useEffect(() => {
        gsap.to("#aboutFade", {
            duration: 1,
            y: 0,
            autoAlpha:1,
            scrollTrigger: {
                trigger: "#aboutFade",
                start: "top 70%",
                end: "bottom 80%",
                toggleActions : "play",
                scrub: true   
            }
        });
  }, []);
    return (
        <section className="aboutText-container" ref={AboutRef} id="aboutFade">
            <img src={aboutImage} alt="a person climbing a rock" className="about-image"/>
            <div className="about-text">  
                <h2>About Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur maxime quis veritatis voluptatum, iste, at voluptatem reprehenderit possimus blanditiis autem. Iusto magni assumenda odit incidunt eveniet deserunt rem ullam?
                Sit amet consectetur adipisicing elit. Eaque ut eum quae rerum quasi, ab amet, ipsum quaerat nihil repellendus quidem repudiandae, cumque possimus nisi? Illo totam deleniti perspiciatis tempora!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa quibusdam hic consectetur similique porro itaque minima aliquid aliquam libero accusamus odio voluptate, eveniet fugiat dolore numquam et laborum repudiandae.
                </p>
            </div>
        </section>
    )
}

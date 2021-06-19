import React, {useRef, useEffect} from 'react';
import './Banner.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Banner() {
gsap.registerPlugin(ScrollTrigger);
const BannerRef = useRef(null);
  useEffect(() => {
    gsap.to("#bannerFade", {
        duration: 1,
        y: 0,
        autoAlpha:1,
        scrollTrigger: {
            trigger: "#bannerFade",
            start: "top 75%",
            end: "bottom 80%",
            toggleActions : "play",
            scrub: true   
        }
    });
  }, []);
    return (
        <section className="banner" ref={BannerRef} id="bannerFade">
            <div className="container">
                <div className="banner-content">
                    <h2>Come back to your inner self</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas aperiam a dolore fugiat nihil minus, necessitatibus rerum incidunt asperiores consequatur vitae ex! Obcaecati at sit neque nihil nobis reprehenderit.</p>
                </div>
            </div>
        </section>
    )
}

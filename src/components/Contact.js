import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';

export default function Contact() {
    return (
        <footer>
            <div className="footer-content">
                <h3>Don't be afraid to contact us</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto suscipit quaerat mollitia ut consequatur accusamus nesciunt odio ab.</p>
                    <ul className="social-media">
                        <Link to='//github.com/nicolasGolob' target="_blank"><h4 className="media-icon"><i class="fas fa-pen-square"></i></h4></Link>
                        <Link to='//www.linkedin.com/in/nicolas-golob-67a898184/' target="_blank"><h4 className="media-icon"><i className="fab fa-linkedin-in"></i></h4></Link>
                        <Link to='//github.com/nicolasGolob' target="_blank" ><h4 className="media-icon"><i className="fab fa-github"></i></h4></Link>
                    </ul>
            </div>
            <div className="footer-bottom">
                <p>Copyright &copy;2021 GOLOB Nicolas </p>    
                <div> <i class="fas fa-arrow-circle-up"></i> Back to the Top</div> 
            </div>
        </footer>
    )
}

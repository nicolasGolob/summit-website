import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' exact className="navbar-logo">
                        SUMMIT 
                    </Link> 
                    <div className="menu-hamburger" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

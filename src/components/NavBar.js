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
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" exact className='navbar-logo'>
                        SUMMIT 
                    </Link> 
                    <div className='menu-hamburger' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-links'>
                            <Link to='/'  className='nav-links'>Home</Link>
                        </li>
                        <li className='nav-links'>
                            <Link to='/'  className='nav-links'>Story</Link>
                        </li>
                        <li className='nav-links'>
                            <Link to='/'  className='nav-links'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar

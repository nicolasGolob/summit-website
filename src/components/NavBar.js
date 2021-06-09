import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () =>{setClick(!click)};

    return (
        <>
            <nav className='navbar'>
                    <Link to='/home'  exact className='navbar-logo'>
                        <img src={require('../assets/image/logo.png').default} width="30" height="30" alt='logo'/>
                        SUMMIT 
                    </Link> 
                    <ul className='nav-links'>
                        <li className='nav-item'>
                            <Link to='/home'  className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about'  className='nav-link'>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact'  className='nav-link'>Contact</Link>
                        </li>
                    </ul>   
                    <div className='hamburger-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
            </nav>
        </>
        
    )
}

export default NavBar

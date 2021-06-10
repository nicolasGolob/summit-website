import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

	const [openNav, setOpenNav] = useState(false);

	const handleClick = () => {
		setOpenNav(!openNav);
	};

	const closeMobileMenu = () => {
		setOpenNav(false);
	};

	return (
		<nav className="navbar">
			<Link to='/home'  exact className='navbar-logo'>
                <img src={require('../assets/image/logo.png').default} width="30" height="30" alt='logo'/>
                SUMMIT 
            </Link> 
			<div onClick={handleClick} className="nav-icon">
                <i className={openNav ? 'fas fa-times' : 'fas fa-bars'}/>
			</div>
			<ul className={openNav? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to='/home'  className='nav-link' onClick={closeMobileMenu}>Home</Link>
				</li>
				<li className="nav-item">
					<Link to='/about'  className='nav-link' onClick={closeMobileMenu}>About</Link>
				</li>
				<li className="nav-item">
					<Link to='/contact'  className='nav-link' onClick={closeMobileMenu}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
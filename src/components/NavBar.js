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
			<div  className="navbar-logo fade-in">
                <img src={require('../assets/image/logo.png').default} width="30" height="30" alt='logo'/>
                SUMMIT 
            </div> 
			<div onClick={handleClick} className="nav-icon">
                <i className={openNav ? "fas fa-times" : "fas fa-bars"}/>
			</div>
			<ul className={openNav? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/"  className="nav-link fade-in" onClick={closeMobileMenu}>Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link fade-in" onClick={closeMobileMenu}>About</Link>
				</li>
				<li className="nav-item ">
					<Link to="/contact" className="nav-link fade-in" onClick={closeMobileMenu}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
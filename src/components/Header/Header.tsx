import React from 'react';
import './styles/Header.scss';
export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<a className='header__title' href="/">FG</a>
			</div>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__list-item">
						<a href="/#about">About</a>
					</li>
					<li className="nav__list-item">
						<a href="/#experience">Experience</a>
					</li>
					<li className="nav__list-item">
						<a href="/#projects">Projects</a>
					</li>
					<li className="nav__list-item">
						<a href="/#contact">Contact</a>
					</li>
					<li className="nav__list-item nav__list-item--resume">
						<a
							href="http://www.google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</li>
				</ul>
			</nav>
			<div className="menu">Menu</div>
		</header>
	);
};

export default Header;

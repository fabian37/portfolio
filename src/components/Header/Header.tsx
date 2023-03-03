import React, { useState } from 'react';
import { ThemeBtn } from '../ThemeBtn';
import './styles/Header.scss';
export interface HeaderProps {}

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handlerToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="header">
			<div className="header__logo">
				<a className="header__title" href="/">
					FG
				</a>
			</div>
			<nav className="nav">
				<ul className={`nav__list ${isOpen ? 'open' : ''}`}>
					<li className="nav__list-item" onClick={handlerToggle}>
						<a href="/#about">About</a>
					</li>
					<li className="nav__list-item" onClick={handlerToggle}>
						<a href="/#experience">Experience</a>
					</li>
					<li className="nav__list-item" onClick={handlerToggle}>
						<a href="/#projects">Projects</a>
					</li>
					<li className="nav__list-item" onClick={handlerToggle}>
						<a href="/#contact">Contact</a>
					</li>
					<li className="nav__list-item nav__list-item--resume">
						<a
							href="https://drive.google.com/file/d/1IfiFIiDvJHJm2G7GExXgttY30yddTx1_/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</li>
					<ThemeBtn />
				</ul>
				<div
					onClick={handlerToggle}
					className={`nav__list-bg ${isOpen ? 'open' : ''}`}
				></div>
			</nav>
			<div className="menu">
				<label htmlFor="burger" className="menu__burger">
					<input
						id="burger"
						type="checkbox"
						onChange={handlerToggle}
						checked={isOpen}
					/>
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
		</header>
	);
};

export default Header;
